import React from 'react';
import './AdminNavbar.css'; // Import the corresponding CSS file
import { FaBell, FaUserCircle, FaSun, FaMoon, FaBars } from 'react-icons/fa'; // Import icons
import { useState } from 'react';

const AdminNavbar = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme between dark and light mode
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Add your theme toggle logic here, like applying a class or using a context
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="brand">
          <h2>Furry Finds</h2>
        </div>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="asearch-bar"
          placeholder="Search..."
        />
      </div>
      <div className="navbar-right">
        <div className="theme-toggle" onClick={handleThemeToggle}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
        <div className="notifications">
          <FaBell />
        </div>
        <div className="profile-dropdown">
          <FaUserCircle />
          <div className="dropdown-menu">
            <ul>
              <li>Profile Settings</li>
              <li>Help Center</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
