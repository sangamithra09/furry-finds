import React, { useState, useEffect } from 'react';
import './PetFilter.css';

const PetFilter = ({ setFilters }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedBreeds, setSelectedBreeds] = useState({});
  
  const breeds = {
    Dog: ['Labrador', 'Golden Retriever', 'Shih Tzu', 'German Shepherd'],
    Cat: ['Siamese', 'Persian', 'Maine Coon', 'Bengal'],
    Birds: ['Parrot', 'Canary', 'Sparrow', 'Finch']
  };

  const handlePetClick = (petType) => {
    setSelectedPet((prev) => (prev === petType ? null : petType));
    if (selectedPet === petType) {
      // Clear breeds if the same category is clicked again
      setSelectedBreeds({});
    }
  };

  const handleBreedClick = (breed) => {
    const petType = selectedPet;
    setSelectedBreeds((prev) => ({
      ...prev,
      [petType]: prev[petType]?.includes(breed)
        ? prev[petType].filter(b => b !== breed)
        : [...(prev[petType] || []), breed]
    }));
  };

  useEffect(() => {
    setFilters({ pets: selectedPet ? [selectedPet] : [], breeds: selectedBreeds });
  }, [selectedPet, selectedBreeds, setFilters]);

  return (
    <div className="petfilter-options">
      <h2>Shop > Pets</h2>
      <h2>Filters</h2>
      <div className="petfilter-group">
        <div className="petfilter-categories">
          {Object.keys(breeds).map(petType => (
            <div key={petType}>
              <div
                className={`petfilter-category ${selectedPet === petType ? 'active' : ''}`}
                onClick={() => handlePetClick(petType)}
              >
                {petType}
              </div>
              {selectedPet === petType && (
                <div className="breed-options">
                  {breeds[petType].map(breed => (
                    <div
                      key={breed}
                      className={`breed-option ${(selectedBreeds[petType] || []).includes(breed) ? 'selected' : ''}`}
                      onClick={() => handleBreedClick(breed)}
                    >
                      {breed}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetFilter;
