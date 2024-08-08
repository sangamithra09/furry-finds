import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    showNotification('Item added to cart');
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
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


// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// export const CartContext = createContext();
// const API_URL = 'http://localhost:8080/api/cart';

// // CartProvider component to wrap the app
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [notification, setNotification] = useState({ show: false, message: '' });

//   // Load cart from backend on initial render
//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   // Fetch cart items from the backend
//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/items`);
//       setCart(response.data);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   // Save cart to backend whenever it changes
//   useEffect(() => {
//     saveCartToBackend();
//   }, [cart]);

//   // Save cart to backend
//   const saveCartToBackend = async () => {
//     try {
//       await Promise.all(cart.map(item =>
//         axios.post(`${API_URL}/add`, item)
//       ));
//     } catch (error) {
//       console.error('Error saving cart to backend:', error);
//     }
//   };

//   // Function to add items to the cart
//   const addToCart = async (product) => {
//     try {
//       await axios.post(`${API_URL}/add`, product);
//       fetchCartItems(); // Refresh cart items after adding
//       showNotification('Item added to cart');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   // Function to increment item quantity
//   const incrementQuantity = async (productId) => {
//     try {
//       await axios.patch(`${API_URL}/increment/${productId}`);
//       fetchCartItems(); // Refresh cart items after incrementing
//     } catch (error) {
//       console.error('Error incrementing quantity:', error);
//     }
//   };

//   // Function to decrement item quantity
//   const decrementQuantity = async (productId) => {
//     try {
//       await axios.patch(`${API_URL}/decrement/${productId}`);
//       fetchCartItems(); // Refresh cart items after decrementing
//     } catch (error) {
//       console.error('Error decrementing quantity:', error);
//     }
//   };

//   // Function to remove an item from the cart
//   const removeItem = async (productId) => {
//     try {
//       await axios.delete(`${API_URL}/remove/${productId}`);
//       fetchCartItems(); // Refresh cart items after removal
//     } catch (error) {
//       console.error('Error removing item:', error);
//     }
//   };

//   // Function to show notification messages
//   const showNotification = (message) => {
//     setNotification({ show: true, message });
//     setTimeout(() => {
//       setNotification({ show: false, message: '' });
//     }, 3000);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeItem, notification }}>
//       {children}
//       {notification.show && <div className="notification">{notification.message}</div>}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = () => useContext(CartContext);
