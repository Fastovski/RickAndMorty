import React, { useState, useEffect } from "react";
import { fetchLocations } from "../api/rickAndMortyApi";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import LocationList from "../components/LocationList";

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("locationFilters");
    return savedFilters ? JSON.parse(savedFilters) : {};
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("locationCurrentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchLocations(currentPage, filters);
        setLocations(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error(error.message);
      }
    };
    loadLocations();
  }, [currentPage, filters]);

  useEffect(() => {
    localStorage.setItem("locationFilters", JSON.stringify(filters)); 
  }, [filters]);

  useEffect(() => {
    localStorage.setItem("locationCurrentPage", currentPage); 
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
        pageType="location"
      />
      <LocationList locations={locations} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Вы действительно хотите сбросить фильтры?</p>
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

export default Location;
