import React from "react";

const Filters = ({ onFilterChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        onChange={handleInputChange}
      />
      <select name="status" onChange={handleInputChange}>
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filters;
