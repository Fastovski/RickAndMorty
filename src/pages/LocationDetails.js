import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchLocationDetails, fetchCharacterDetails } from "../api/rickAndMortyApi";
import CharacterList from "../components/CharacterList"; 

const LocationDetails = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLocationDetails = async () => {
      try {
        const locationData = await fetchLocationDetails(id);
        setLocation(locationData);

        const residentsData = await Promise.all(
          locationData.residents.map(async (url) => {
            const residentData = await fetchCharacterDetails(url.split('/').pop()); 
            return residentData;
          })
        );

        setResidents(residentsData);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    loadLocationDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>{location.name}</h3>
      <p>{location.type}</p>
      <h4>Персонажи локации:</h4>
      <CharacterList characters={residents} />
    </div>
  );
};

export default LocationDetails;
