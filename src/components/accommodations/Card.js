//import PropTypes from "prop-types";
//import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

export default function AccommodationCard({
  id,
  name,
  image,
  price
  /*bar,
  breakfast_included,
  restaurant,
  pet_friendly,
  parking_available,
  guesthouse,
  hotel,
  bed_and_breakfast,*/
}) {
    
  //const [features, setFeatures] = useState([]);

  /*const specialFeatures =
    bar &&
    breakfast_included &&
    restaurant &&
    pet_friendly &&
    parking_available &&
    guesthouse &&
    hotel &&
    bed_and_breakfast;

  if (specialFeatures === true) {
    return <p>hello</p>;
  }*/

  /*if (specialFeatures === true) {
    setFeatures.toString();
  }*/

  return (
    <div className="card" key={id}>
      <div className="card__img">
        <img src={image} alt={name} />
      </div>
      <div className="card__desc">
        <Heading size="1" content={name} />
        <Heading size="2" content={price} />
        <ul className="card__desc__special-features">
          <li></li>
        </ul>
        <Link to={`/accommodations/${id}`} className="card__desc__btn">
          Details
        </Link>
      </div>
    </div>
  );
}

/*AccommodationCard.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bar: PropTypes.any,
  breakfast_included: PropTypes.any,
  restaurant: PropTypes.any,
  pet_friendly: PropTypes.any,
  parking_available: PropTypes.any,
  guesthouse: PropTypes.any,
  hotel: PropTypes.any,
  bed_and_breakfast: PropTypes.any,
};*/
