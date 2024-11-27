import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterDetails } from "../api/rickAndMortyApi";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const loadCharacterDetails = async () => {
      try {
        const data = await fetchCharacterDetails(id);
        setCharacter(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    loadCharacterDetails();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>{character.status} - {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Current Location: {character.location.name}</p> 
    </div>
  );
};

export default CharacterDetails;
