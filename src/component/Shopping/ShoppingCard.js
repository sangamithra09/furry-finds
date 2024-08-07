import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from './Cart/CartContext';
import { useWishlist } from './Wishlist/WishlistContext';
import './ShoppingCard.css';

const ShoppingCard = ({ product, showAddToCartButton = true }) => {
  const navigate = useNavigate(); // Initialize useNavigate
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

  const handleCardClick = () => {
    navigate(`/product/${product.id}`); // Navigate to product detail page
  };

  return (
    <div className="shopping-card" onClick={handleCardClick}>
      <div className="card-header">
        <button
          className={`wishlist-button ${isInWishlist ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from bubbling up to the card
            toggleWishlist();
          }}
        >
          ♥
        </button>
      </div>
      
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price.toFixed(2)}</p>
      {showAddToCartButton && (
        <button className={'cartbutton'} onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}>Add to Cart</button>
      )}
    </div>
  );
};

export default ShoppingCard;
