import React from "react";
import CharacterCards from "./CharacterCards";

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCards key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;

