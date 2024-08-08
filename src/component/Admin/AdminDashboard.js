import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    
    <div className="dashboard">
      <aside className="adminsidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#orders">Orders</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#customers">Customers</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="adminheader">
          <h1>Dashboard</h1>
          <input type="search" placeholder="Search..." />
        </header>
        <section id="overview" className="overview">
          <div className="admincard">
            <h3>Total Sales</h3>
            <p>$23,456</p>
          </div>
          <div className="admincard">
            <h3>New Orders</h3>
            <p>120</p>
          </div>
          <div className="admincard">
            <h3>Products</h3>
            <p>85</p>
          </div>
          <div className="admincard">
            <h3>Customers</h3>
            <p>432</p>
          </div>
        </section>
        <section id="orders" className="orders">
          <h2>Recent Orders</h2>
          {/* Orders table */}
        </section>
        <section id="products" className="adminproducts">
          <h2>Product Management</h2>
          {/* Products table */}
        </section>
        <section id="customers" className="customers">
          <h2>Customer Management</h2>
          {/* Customers table */}
        </section>
        <section id="reports" className="reports">
          <h2>Reports</h2>
          {/* Reports */}
        </section>
        <section id="settings" className="settings">
          <h2>Settings</h2>
          {/* Settings */}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
