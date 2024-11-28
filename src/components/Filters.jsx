import React, { useState, useEffect } from "react";

const Filters = ({ onFilterChange, onResetFilters, currentFilters, pageType }) => {
  const [localFilters, setLocalFilters] = useState(currentFilters);

  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters({ ...localFilters, [name]: value });
    onFilterChange(name, value);
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={localFilters.name || ""}
        onChange={handleInputChange}
      />

      {pageType === "home" && (
        <>
          <select
            name="status"
            value={localFilters.status || ""}
            onChange={handleInputChange}
          >
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <select
            name="species"
            value={localFilters.species || ""}
            onChange={handleInputChange}
          >
            <option value="">All Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Robot">Robot</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="gender"
            value={localFilters.gender || ""}
            onChange={handleInputChange}
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </>
      )}

      <button onClick={onResetFilters} className="reset-button">Reset Filters</button>
    </div>
  );
};

export default Filters;
