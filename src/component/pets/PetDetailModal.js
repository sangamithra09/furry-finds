// PetDetailModal.js
import React from 'react';
import Modal from 'react-modal';
import './PetDetailModal.css'; // Add styling as needed

Modal.setAppElement('#root'); // For accessibility

const PetDetailModal = ({ isOpen, onRequestClose, petDetails }) => {
  if (!petDetails) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pet Details"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onRequestClose} className="close-button">×</button>
      <h1>Pet Details</h1>
      <p><strong>Breed:</strong> {petDetails.breed}</p>
      <p><strong>Gender:</strong> {petDetails.gender}</p>
      <p><strong>Color:</strong> {petDetails.color}</p>
      <p><strong>Description:</strong> {petDetails.description}</p>
      <p><strong>Location:</strong> {petDetails.location}</p>
      <p><strong>Price:</strong> ₹{petDetails.price}</p>
      <h2>Contact Details</h2>
      <p><strong>Owner Name:</strong> {petDetails.ownerName}</p>
      <p><strong>Contact:</strong> {petDetails.ownerContact}</p>
    </Modal>
  );
};

export default PetDetailModal;
