import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/rickAndMortyApi";
import CharacterList from "../components/CharacterList";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : {};
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters)); 
  }, [filters]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage); 
  }, [currentPage]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value }); 
    setCurrentPage(1); 
  };

  const handleResetClick = () => {
    setShowModal(true); 
  };

  const confirmReset = () => {
    setFilters({}); 
    setCurrentPage(1); 
    setShowModal(false); 
  };

  const cancelReset = () => {
    setShowModal(false); 
  };

  return (
    <div>
      <Filters
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetClick}
        currentFilters={filters} 
        pageType="home"
      />
      <CharacterList characters={characters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Вы действительно хотите сбросить все фильтры?</p>
            <button onClick={confirmReset} className="confirm-button">
              Yes
            </button>
            <button onClick={cancelReset} className="cancel-button">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
