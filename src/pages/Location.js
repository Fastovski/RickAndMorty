import React, { useState, useEffect } from "react";
import { fetchLocations } from "../api/rickAndMortyApi";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import LocationList from './../components/LocationList';

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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

  const handleFilterChange = (name, type, value) => {
    setFilters({ ...filters, [name]: value , [type]:value});
    setCurrentPage(1); 
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <LocationList locations={locations} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Location;
