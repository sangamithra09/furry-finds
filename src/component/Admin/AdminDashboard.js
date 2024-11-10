import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import './AdminNavbar.js'
import AdminFooter from './AdminFooter.js';
import UserManagement from './UserManagement';
import OrderManagement from './OrderManagement';
import ProductManagement from './Productmanagement.js';
import AdminNavbar from './AdminNavbar.js';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const isAdmin = localStorage.getItem('isAdmin');
  //   if (!isAdmin) {
  //     navigate('/login'); // Redirect to login if not admin
  //   }
  // }, [navigate]);

  return (
    <div className="admin-dashboard">
      <div className="asidebar">
      {/* <AdminNavbar/> */}
        {/* <h2>Admin Dashboard</h2> */}
        <ul>
          <li
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </li>
          <li
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            Order Management
          </li>
          <li
            className={activeTab === 'products' ? 'active' : ''}
            onClick={() => setActiveTab('products')}
          >
            Product Management
          </li>
        </ul>
      </div>
      <div className="main-content">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'orders' && <OrderManagement />}
        {activeTab === 'products' && <ProductManagement />} 
      </div>
      <AdminFooter/>
    </div>
  );
};

export default AdminDashboard;
