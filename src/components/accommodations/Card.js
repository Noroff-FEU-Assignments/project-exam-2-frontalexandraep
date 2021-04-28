import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

export default function Card({
  id,
  name,
  image,
  price,
  bar,
  breakfast_included,
  restaurant,
  pet_friendly,
  parking_available,
  guesthouse,
  hotel,
  bed_and_breakfast,
}) {
  return (
    <div className="card" key={id}>
      <div className="card__img">
        <img src={image} alt={name} />
      </div>
      <div className="card__desc">
        <Heading size="1" content={name} />
        <h2>{price} NOK</h2>
        <ul className="card__desc__special-features">
          {bar && <li>Bar</li>}
          {breakfast_included && <li>Breakfast Included</li>}
          {restaurant && <li>Restaurant</li>}
          {pet_friendly && <li>Pet-friendly</li>}
          {parking_available && <li>Parking Available</li>}
          {guesthouse && (
            <li className="card__desc__special-features--type">Guesthouse</li>
          )}
          {hotel && (
            <li className="card__desc__special-features--type">Hotel</li>
          )}
          {bed_and_breakfast && (
            <li className="card__desc__special-features--type">
              Bed & Breakfast
            </li>
          )}
        </ul>
        <Link to={`/accommodations/${id}`} className="card__desc__btn">
          Details
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
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
};
