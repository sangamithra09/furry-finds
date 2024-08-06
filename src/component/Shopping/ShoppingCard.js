import React from 'react';
import { useCart } from './Cart/CartContext';
import { useWishlist } from './Wishlist/WishlistContext';
import './ShoppingCard.css';

const ShoppingCard = ({ product, showAddToCartButton = true }) => {
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
    <div className="shopping-card">
      <div className="card-header">
        <button
          className={`wishlist-button ${isInWishlist ? 'active' : ''}`}
          onClick={toggleWishlist}
        >
          ♥
        </button>
      </div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price.toFixed(2)}</p>
      {showAddToCartButton && (
        <button className={'cartbutton'} onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ShoppingCard;
