// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import ShoppingCard from '../ShoppingCard';

const Cart = () => {
  const { cartItems, totalAmount, message } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {message && <p className="cart-message">{message}</p>}
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <ShoppingCard key={index} product={item} showAddToCartButton={false} />
        ))}
      </div>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
