import React from "react";
import LocationCards from './LocationCards';

const LocationList = ({ locations }) => {
  return (
    <div className="character-list">
      {locations.map((location) => (
        <LocationCards key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;