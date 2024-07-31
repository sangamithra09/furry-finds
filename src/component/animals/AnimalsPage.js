// src/pages/AnimalsPage.js
import React, { useState } from 'react';
import AnimalCardBuying from './AnimalCardBuying';
import AnimalCardAdopting from './AnimalCardAdopting';
import './AnimalsPage.css';
import { buyingAnimals, adoptingAnimals } from './AnimalsData';

const AnimalsPage = () => {
  const [selectedSection, setSelectedSection] = useState('buying');

  return (
    <div className="animals-page">
      <h1 >Find Your New BestFriend Here !!</h1>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="buying"
            checked={selectedSection === 'buying'}
            onChange={() => setSelectedSection('buying')}
          />
          Buy
        </label>
        <label>
          <input
            type="radio"
            value="adopting"
            checked={selectedSection === 'adopting'}
            onChange={() => setSelectedSection('adopting')}
          />
          Adopt
        </label>
      </div>
      <div className="animal-list">
        {selectedSection === 'buying' &&
          buyingAnimals.map(animal => (
            <AnimalCardBuying key={animal.id} animal={animal} />
          ))}
        {selectedSection === 'adopting' &&
          adoptingAnimals.map(animal => (
            <AnimalCardAdopting key={animal.id} animal={animal} />
          ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
