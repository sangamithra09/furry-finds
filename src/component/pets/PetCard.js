import React, { useState } from 'react';
import { useWishlist } from '../Shopping/Wishlist/WishlistContext';
import PetDetailModal from './PetDetailModal'; 
import './PetCard.css';

const PetCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInWishlist = wishlist.some(item => item.id === product.id);
  const price = Number(product.price);

  const formattedPrice = !isNaN(price) ? price.toFixed(2) : 'Invalid price';

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pet-card">
      <div className="petcard-header">
        <button
          className={`petwishlist-button ${isInWishlist ? 'active' : ''}`}
          onClick={toggleWishlist}
        >
          ♥
        </button>
      </div>
      <img src={product.image} alt={product.name} />
      <p>Age: {product.age}</p>
      {/* <p>{product.description}</p> */}
      <p>₹{formattedPrice}</p>
      <div className='contactbutton'>
        <button className='contact-info' onClick={openModal}>
          Contact Info
        </button>
      </div>

      <PetDetailModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        petDetails={product} // Pass the unique pet details
      />
    </div>
  );
};

export default PetCard;
