import React from 'react';
import { useCart } from './CartContext';
import {useNavigate} from 'react-router-dom'
import CartItem from './CartItem'; 
import './Cart.css';

const Cart = () => {
  const { cart = [], totalAmount = 0, notification = {} } = useCart();
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { cart, total: calculateTotalAmount() } });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {notification.show && <p className="cart-message">{notification.message}</p>}
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>
      <h3>Total: ₹{(totalAmount || calculateTotalAmount()).toFixed(2)}</h3>
      <button onClick={handleProceedToCheckout}>Procced to Checkout</button>
    </div>
  );
};

export default Cart;
