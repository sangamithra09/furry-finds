// src/components/AnimalCardAdopting.js
import React from 'react';
import './AnimalCardAdopting.css';

const AnimalCardAdopting = ({ animal }) => {
  return (
    <div className="animal-card">
      <img src={animal.imageUrl} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>Breed: {animal.breed}</p>
      <p>Age: {animal.age}</p>
      <p>Trained: {animal.trained}</p>
      <p> {animal.description}</p>
    </div>
  );
};

export default AnimalCardAdopting;
