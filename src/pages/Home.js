import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/rickAndMortyApi";
import CharacterList from "../components/CharacterList";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters(currentPage, filters);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error(error.message);
      }
    };
    loadCharacters();
  }, [currentPage, filters]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // Сбросить на первую страницу при изменении фильтров
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <CharacterList characters={characters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
