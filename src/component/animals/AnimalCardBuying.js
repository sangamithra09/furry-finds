// src/components/AnimalCardBuying.js
import React from 'react';
import './AnimalCardBuying.css';

const AnimalCardBuying = ({ animal }) => {
  return (
    <div className="animal-card">
      <img src={animal.imageUrl} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>Breed: {animal.breed}</p>
      <p>Age: {animal.age}</p>
      <p>Price: {animal.price}</p>
    </div>
  );
};

export default AnimalCardBuying;
