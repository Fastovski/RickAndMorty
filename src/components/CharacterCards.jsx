import React from "react";
import { Link } from "react-router-dom";

const CharacterCards = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`} className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.status} - {character.species}</p>
      <p>Location: {character.location.name}</p>
    </Link>
  );
};

export default CharacterCards;
