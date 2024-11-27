import React from "react";
import { Link } from "react-router-dom";

const LocationCards = ({ location }) => {
  return (
    <Link to={`/location/${location.id}`} className="character-card">
      <h3>{location.name}</h3>
      <p>{location.type}</p>
    </Link>
  );
};

export default LocationCards;