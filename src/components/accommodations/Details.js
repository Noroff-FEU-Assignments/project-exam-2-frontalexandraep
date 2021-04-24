import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_URL } from "../../constants/api";
import Loader from "../common/Loader";
import Heading from "../common/Heading";

export default function Details() {
  const [establishment, setEstablishment] = useState(null);
  const [fetchEstablishment, setFetchEstablishment] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `establishments/${id}`;

  useEffect(function () {
    async function getEstablishment() {
      try {
        const response = await axios.get(url);
        console.log("reponse", response);
        setEstablishment(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error);
      } finally {
        setFetchEstablishment(false);
      }
    }

    getEstablishment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchEstablishment) return <Loader />;

  if (fetchError)
    return (
      <div className="error">
        Sorry, there's an error in our system. Please try again later!
      </div>
    );

  return (
    <main className="details">
      <Helmet>
        <title>{establishment.name} | Holidaze</title>
      </Helmet>
      <div className="details__banner">
        <Heading
          size="1"
          content={establishment.name}
          className="details__banner__heading"
        />
      </div>
      <a href="/accommodations">
        <i className="fas fa-chevron-left"></i>
        Return
      </a>
      <Heading size="2" content={establishment.name} />
      <div className="details__card">
        <div className="details__card__img">
          <img src={establishment.image[0].url} alt={establishment.name} />
        </div>
        <div className="details__card__desc">
          <Heading size="3" content={establishment.price} />
          <ul className="details__card__desc--special-features">
            <li></li>
          </ul>
          <p>{establishment.description}</p>
          <Link to={`enquiry/${id}`} className="details__card__desc__btn">
          Book Now
        </Link>
        </div>
      </div>
    </main>
  );
}
