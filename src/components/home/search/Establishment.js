import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Establishment({ id, name }) {
  return (
    <div className="search-bar__results--single">
      <Link to={`/accommodations/` + id}>{name}</Link>
    </div>
  );
}

Establishment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
