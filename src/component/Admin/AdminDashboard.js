import React, { useState } from 'react';
import './AdminDashboard.css';
import UserManagement from './UserManagement';
import OrderManagement from './OrderManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="admin-dashboard">
      <div className="asidebar">
        <h2>Admin Dashboard</h2>
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
        </ul>
      </div>
      <div className="main-content">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'orders' && <OrderManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
