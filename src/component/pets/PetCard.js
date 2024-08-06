import React from 'react';
import { useCart } from '../Shopping/Cart/CartContext';
import { useWishlist } from '../Shopping/Wishlist/WishlistContext';
import './PetCard.css';

const PetCard = ({ product, showAddToCartButton = true }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
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
      <h3>{product.name}</h3>
      <p>Age: {product.age}</p>
      <p>{product.description}</p>
      <p>₹{product.price.toFixed(2)}</p>
      {showAddToCartButton && (
        <button className='cartbutton' onClick={() => addToCart(product)}>
          Contact Info
        </button>
      )}
    </div>
  );
};

export default PetCard;
