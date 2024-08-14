import React, { createContext, useState, useEffect, useContext } from 'react';
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
      const userId = localStorage.getItem('userid'); // Retrieve user ID from localStorage
      if (userId) {
        const response = await axios.get(`http://localhost:8080/api/cartitems/${userId}`);
        setCart(response.data);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const userId = localStorage.getItem('userid'); // Retrieve user ID from localStorage
      if (userId) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
          await axios.put(`http://localhost:8080/api/cartitems/${product.id}`, {
            userId,
            quantity: existingProduct.quantity + 1
          });
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
        } else {
          const quantity = 1;
          await axios.post('http://localhost:8080/api/cartitems/add', {
            userId,
            productId: product.id,
            quantity: quantity
          });
          setCart((prevCart) => [...prevCart, { ...product, quantity }]);
        }
        showNotification('Item added to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      showNotification('Failed to add item to cart');
    }
  };

  const incrementQuantity = async (product) => {
    try {
      const userId = localStorage.getItem('userid'); // Retrieve user ID from localStorage
      if (userId) {
        const item = cart.find((item) => item.id === product.id);
        if (item) {
          const updatedQuantity = item.quantity ++;
          await axios.put(`http://localhost:8080/api/cartitems/${product.id}/increment`, {
            userId,
            quantity: item.quantity ++
          });
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity ++ } : item
            )
          );
        }
        showNotification('Item quantity increased');
      }
    } catch (error) {
      console.error('Error incrementing item quantity:', error);
      showNotification('Failed to increase item quantity');
    }
  };

  const decrementQuantity = async (product) => {
    try {
      const userId = localStorage.getItem('userid'); // Retrieve user ID from localStorage
      if (userId) {
        const item = cart.find((item) => item.id === product.id);
        if (item && item.quantity > 1) {
          await axios.put(`http://localhost:8080/api/cartitems/${item.id}/decrement`, {
            userId,
            quantity: item.quantity --
          });
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity --} : item
            )
          );
        }
        showNotification('Item quantity decreased');
      }
    } catch (error) {
      console.error('Error decrementing item quantity:', error);
      showNotification('Failed to decrease item quantity');
    }
  };

  const removeItem = async (product) => {
    try {
      const userId = localStorage.getItem('userid'); // Retrieve user ID from localStorage
      if (userId) {
        await axios.delete(`http://localhost:8080/api/cartitems/${product.id}`, {
          data: { userId }
        });
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
        showNotification('Item removed from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      showNotification('Failed to remove item from cart');
    }
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem, notification }}>
      {children}
      {notification.show && <div className="notification">{notification.message}</div>}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
