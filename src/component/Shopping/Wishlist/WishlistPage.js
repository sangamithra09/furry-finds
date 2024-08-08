import React from 'react';
import { useWishlist } from './WishlistContext';
import ShoppingCard from '../ShoppingCard'; 
import './Wishlist.css'; 
const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <ShoppingCard
              key={product.id}
              product={product}
              showAddToCartButton={true} 
            />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
