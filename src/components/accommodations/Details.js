import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../../constants/api";
import Loader from "../common/Loader";
import Heading from "../common/Heading";
import Enquiry from "./Enquiry";

export default function Details() {
  // modal for booking enquiry
  const [showEnquiryModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // fetch establishment
  const [establishment, setEstablishment] = useState(null);
  const [fetchEstablishment, setFetchEstablishment] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `establishments/${id}`;

  useEffect(function () {
    async function getEstablishment() {
      try {
        const response = await axios.get(url);
        console.log("response", response);
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
          <h3>{establishment.price} NOK</h3>
          <ul className="details__card__desc--special-features">
            {establishment.bar && <li>Bar</li>}
            {establishment.breakfast_included && <li>Breakfast Included</li>}
            {establishment.restaurant && <li>Restaurant</li>}
            {establishment.pet_friendly && <li>Pet-friendly</li>}
            {establishment.parking_available && <li>Parking Available</li>}
            {establishment.guesthouse && <li>Guesthouse</li>}
            {establishment.hotel && <li>Hotel</li>}
            {establishment.bed_and_breakfast && <li>Bed & Breakfast</li>}
          </ul>
          <p>{establishment.description}</p>
          {
            <button onClick={handleShowModal} className="details__card__desc__btn">Book Now</button>
          }
        </div>
        <Enquiry show={showEnquiryModal} onHide={handleCloseModal} id={id} />
      </div>
    </main>
  );
}
