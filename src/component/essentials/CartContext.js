// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const user = localStorage.getItem("userid");
      const response = await axios.get(`http://localhost:8080/api/cartitems/user/${user}`); 
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const existingProduct = cart.find((item) => item.id === product.id);
      if (existingProduct) {
        await axios.put(`http://localhost:8080/api/cartitems/${product.id}`, { quantity: existingProduct.quantity + 1 });
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        await axios.post('http://localhost:8080/api/cartitems', { ...product, quantity: 1 });
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
      showNotification('Item added to cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      showNotification('Failed to add item to cart');
    }
  };

  const removeItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/cartitems/${productId}`);
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      showNotification('Item removed from cart');
    } catch (error) {
      console.error('Error removing item from cart:', error);
      showNotification('Failed to remove item from cart');
    }
  };

  const incrementQuantity = async (productId) => {
    try {
      const item = cart.find((item) => item.id === productId);
      if (item) {
        await axios.put(`http://localhost:8080/api/cartitems/${productId}`, { quantity: item.quantity + 1 });
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      }
      showNotification('Item quantity increased');
    } catch (error) {
      console.error('Error incrementing item quantity:', error);
      showNotification('Failed to increase item quantity');
    }
  };

  const decrementQuantity = async (productId) => {
    try {
      const item = cart.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        await axios.put(`http://localhost:8080/api/cartitems/${productId}`, { quantity: item.quantity - 1 });
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
      showNotification('Item quantity decreased');
    } catch (error) {
      console.error('Error decrementing item quantity:', error);
      showNotification('Failed to decrease item quantity');
    }
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem }}>
      {children}
      {notification.show && <div className="notification">{notification.message}</div>}
    </CartContext.Provider>
  );
};
