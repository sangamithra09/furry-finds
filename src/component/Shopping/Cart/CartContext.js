// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [notification, setNotification] = useState({ show: false, message: '' });

//   // Load cart data from local storage when the component mounts
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     } else {
//       fetchCart();
//     }
//   }, []);

//   // Save cart data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const fetchCart = async () => {
//     try {
//       const userId = localStorage.getItem('userid');
//       if (userId) {
//         const response = await axios.get(`http://localhost:8080/api/cartitems/${userId}`);
//         setCart(response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const addToCart = async (product) => {
//     try {
//       const userId = localStorage.getItem('userid');
//       if (userId) {
//         const existingProduct = cart.find((item) => item.id === product.id);
//         if (existingProduct) {
//           await axios.put(`http://localhost:8080/api/cartitems/${product.id}`, {
//             userId,
//             quantity: existingProduct.quantity + 1,
//           });
//           setCart((prevCart) =>
//             prevCart.map((item) =>
//               item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//           );
//         } else {
//           const quantity = 1;
//           await axios.post(
//             `http://localhost:8080/api/cartitems/add?userId=${userId}&productId=${product.id}&quantity=${quantity}`
//           );
//           setCart((prevCart) => [...prevCart, { ...product, quantity }]);
//         }
//         showNotification('Item added to cart');
//       }
//     } catch (error) {
//       console.error('Error adding item to cart:', error);
//       showNotification('Failed to add item to cart');
//     }
//   };

//   const incrementQuantity = async (product) => {
//     try {
//       const userId = localStorage.getItem('userid');
//       if (userId) {
//         const item = cart.find((item) => item.id === product.id);
//         if (item) {
//           const updatedQuantity = item.quantity + 1;
//           await axios.put(`http://localhost:8080/api/cartitems/${product.id}/increment`, {
//             userId,
//             quantity: updatedQuantity,
//           });
//           setCart((prevCart) =>
//             prevCart.map((item) =>
//               item.id === product.id ? { ...item, quantity: updatedQuantity } : item
//             )
//           );
//           showNotification('Item quantity increased');
//         }
//       }
//     } catch (error) {
//       console.error('Error incrementing item quantity:', error);
//       showNotification('Failed to increase item quantity');
//     }
//   };

//   const decrementQuantity = async (product) => {
//     try {
//       const userId = localStorage.getItem('userid');
//       if (userId) {
//         const item = cart.find((item) => item.id === product.id);
//         if (item && item.quantity > 1) {
//           const updatedQuantity = item.quantity - 1;
//           await axios.put(`http://localhost:8080/api/cartitems/${item.id}/decrement`, {
//             userId,
//             quantity: updatedQuantity,
//           });
//           setCart((prevCart) =>
//             prevCart.map((item) =>
//               item.id === product.id ? { ...item, quantity: updatedQuantity } : item
//             )
//           );
//           showNotification('Item quantity decreased');
//         }
//       }
//     } catch (error) {
//       console.error('Error decrementing item quantity:', error);
//       showNotification('Failed to decrease item quantity');
//     }
//   };

//   const removeItem = async (product) => {
//     try {
//       const userId = localStorage.getItem('userid');
//       if (userId) {
//         await axios.delete(`http://localhost:8080/api/cartitems/${product.id}`, {
//           data: { userId },
//         });
//         setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
//         showNotification('Item removed from cart');
//       }
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//       showNotification('Failed to remove item from cart');
//     }
//   };

//   const showNotification = (message) => {
//     setNotification({ show: true, message });
//     setTimeout(() => {
//       setNotification({ show: false, message: '' });
//     }, 3000);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart,setCart, incrementQuantity, decrementQuantity, removeItem, notification }}
//     >
//       {children}
//       {notification.show && <div className="notification">{notification.message}</div>}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ show: false, message: '' });

  // Load cart data from local storage or fetch from backend when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const userId = localStorage.getItem('userid');

    if (userId && !savedCart) {
      fetchCartFromBackend(userId);
    } else if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          console.error("Invalid cart data in local storage.");
          setCart([]); // Fallback to an empty array if invalid
        }
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        setCart([]); // Fallback to an empty array if parsing fails
      }
    
    }
  }, []);

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const fetchCartFromBackend = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/cartitems/${userId}`);
    //   setCart(response.data);
    //   localStorage.setItem('cart', JSON.stringify(response.data)); // Save fetched cart to local storage
    // } catch (error) {
    //   console.error('Error fetching cart items:', error);
    // }
    if (Array.isArray(response.data)) {
      setCart(response.data);
  } else {
      console.error("Cart data is not an array:", response.data);
      setCart([]); // Fallback to an empty array
  }
} catch (error) {
  console.error('Error fetching cart:', error);
  setCart([]); // Fallback to an empty array in case of an error
}
  };

  const addToCart = async (product) => {
    try {
      const userId = localStorage.getItem('userid');
      if (userId) {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
          await axios.put(`http://localhost:8080/api/cartitems/${product.id}`, {
            userId,
            quantity: existingProduct.quantity + 1,
          });
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
        } else {
          const quantity = 1;
          await axios.post(
            `http://localhost:8080/api/cartitems/add?userId=${userId}&productId=${product.id}&quantity=${quantity}`
          );
          setCart((prevCart) => [...prevCart, { ...product, quantity }]);
        }
        showNotification('Item added to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      showNotification('Failed to add item to cart');
    }
  };
  const incrementQuantity = async (productId) => {
    try {
      const userId = localStorage.getItem('userid');
      if (userId) {
        // Make API call to increment quantity
        const response = await axios.patch(`http://localhost:8080/api/cartitems/${productId}/increment`, {
          amount: 1
        });
        
        // Update local state after success
        if (response.status === 200) {
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
          showNotification('Item quantity increased');
        } else {
          showNotification('Failed to increment item quantity');
        }
      }
    } catch (error) {
      console.error('Error incrementing item quantity:', error);
      showNotification('Failed to increment item quantity');
    }
  };
  
  const decrementQuantity = async (productId) => {
    try {
      const userId = localStorage.getItem('userid');
      if (userId) {
        // Make API call to decrement quantity
        const response = await axios.patch(`http://localhost:8080/api/cartitems/${productId}/decrement`, {
          amount: 1
        });
  
        // Update local state after success
        if (response.status === 200) {
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1,0) } : item
            )
          );
          showNotification('Item quantity decreased');
        } else {
          showNotification('Failed to decrement item quantity');
        }
      }
    } catch (error) {
      console.error('Error decrementing item quantity:', error);
      showNotification('Failed to decrement item quantity');
    }
  };
  const removeFromCart = async (productId) => {
    try {
      const userId = localStorage.getItem('userid');
      if (userId) {
        // Make API call to remove item
        const response = await axios.delete(`http://localhost:8080/api/cartitems/${productId}`);
        
        // Update local state after success
        if (response.status === 200) {
          setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
          showNotification('Item removed from cart');
        } else {
          showNotification('Failed to remove item from cart');
        }
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      showNotification('Failed to remove item from cart');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    localStorage.removeItem('cart');
    setCart([]); // Clear the cart from state
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        fetchCartFromBackend,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        handleLogout,
        notification,
        showNotification
      }}
    >
      {children}
      {notification.show && <div className="notification">{notification.message}</div>}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

