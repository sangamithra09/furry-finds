import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Shopping/Cart/CartContext'; // Adjust the import path

const Logout = () => {
  const { setCart } = useCart(); // Ensure you access setCart correctly
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    setCart([]); // Clear the cart state
    navigate('/login'); // Redirect to the login page
  };

  return <button onClick={handleLogout}
  style={{
    padding: '9px 15px', // Adjust the padding as needed
    backgroundColor: 'black', // Example background color
    color: '#fff', // Text color
    border: 'none', // Remove border
    borderRadius: '9px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
  }}>Logout</button>;
};

export default Logout;
