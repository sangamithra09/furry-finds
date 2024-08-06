import React, { useState } from 'react';
import './FilterOptions.css'
const FilterOptions = ({ setFilters }) => {
  const [selectedPets, setSelectedPets] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlePetChange = (event) => {
    const value = event.target.value;
    setSelectedPets((prev) =>
      prev.includes(value) ? prev.filter((pet) => pet !== value) : [...prev, value]
    );
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    setFilters({ pets: selectedPets, categories: selectedCategories });
  };

  return (
    
    <div className="filter-options">
      <h2>Shop > All Products</h2>
      <h2>Filters</h2>
      <div className="filter-group">
        <h3>Shop by Pet</h3>
        <label>
          <input type="checkbox" value="Dog" onChange={handlePetChange} />
          Dog
        </label>
        <label>
          <input type="checkbox" value="Cat" onChange={handlePetChange} />
          Cat
        </label>
        <label>
          <input type="checkbox" value="Birds" onChange={handlePetChange} />
          Birds
        </label>
      </div>

      <div className="filter-group">
        <h3>Shop by Category</h3>
        <label>
          <input type="checkbox" value="Food" onChange={handleCategoryChange} />
          Food
        </label>
        <label>
          <input type="checkbox" value="Grooming" onChange={handleCategoryChange} />
          Grooming
        </label>
        <label>
          <input type="checkbox" value="Others" onChange={handleCategoryChange} />
          Others
        </label>
      </div>

      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;
