// CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [message, setMessage] = useState('');

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalAmount((prevTotal) => prevTotal + product.price);
    setMessage('Item added to the cart');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, addToCart, message }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
