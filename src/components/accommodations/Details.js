import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import { BASE_URL } from "../../constants/api";
import Loader from "../common/Loader";
import Heading from "../common/Heading";
import Enquiry from "./enquiry/Enquiry";

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
    <>
      <Helmet>
        <title>{establishment.name} | Holidaze</title>
      </Helmet>
      <div className="banner__details">
        <Heading size="1" content={establishment.name} />
      </div>
      <Container className="details">
        <a className="details__return-link" href="/accommodations">
          <i className="fas fa-chevron-left icon"></i>
          Return
        </a>
        <div className="details__card">
          <div className="details__card__img-container">
            <img
              className="details__card__img-container__img"
              src={establishment.image[0].url}
              alt={establishment.name}
            />
          </div>
          <div className="details__card__desc">
          <Heading size="2" content={establishment.name} />
            <h3>{establishment.price} NOK</h3>
            <ul className="details__card__desc__special-features">
              {establishment.bar && (
                <li className="details__card__desc__special-features__item">
                  Bar
                </li>
              )}
              {establishment.breakfast_included && (
                <li className="details__card__desc__special-features__item">
                  Breakfast Included
                </li>
              )}
              {establishment.restaurant && (
                <li className="details__card__desc__special-features__item">
                  Restaurant
                </li>
              )}
              {establishment.pet_friendly && (
                <li className="details__card__desc__special-features__item">
                  Pet-friendly
                </li>
              )}
              {establishment.parking_available && (
                <li className="details__card__desc__special-features__item">
                  Parking Available
                </li>
              )}
            </ul>
            <p className="details__card__desc__text">
              {establishment.description}
            </p>
            {
              <button
                onClick={handleShowModal}
                className="details__card__desc__btn"
              >
                Book Now
              </button>
            }
          </div>
          <Enquiry
            show={showEnquiryModal}
            onHide={handleCloseModal}
            establishmentId={id}
          />
        </div>
      </Container>
    </>
  );
}
