import React, { useState } from 'react';
import './SellPetForm.css';

export default function SellPetForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    petType: '',
    breed: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Sell Your Pet</h2>
      <p>Only vaccinated pets are accepted.</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <label>Pet Type:</label>
        <input type="text" name="petType" value={formData.petType} onChange={handleChange} required />

        <label>Breed:</label>
        <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
