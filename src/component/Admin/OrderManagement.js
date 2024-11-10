import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/orders'); // Update with the correct endpoint for fetching orders
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <div className="order-list">
        <h3>Orders</h3>
        {orders.length > 0 ? (
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Order Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.userId}</td>
                  <td>{order.totalAmount}</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.orderDate).toLocaleString()}</td>
                  <td>
                    <button className="action-btn">View</button>
                    <button className="action-btn">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
