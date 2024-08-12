import React, { useState, useEffect } from 'react';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data from backend (replace with actual API call)
    const fetchOrders = async () => {
      // Mock data
      const mockOrders = [
        { id: 1, customer: 'John Doe', total: 1399, status: 'Shipped' },
        { id: 2, customer: 'Jane Smith', total: 1200, status: 'Pending' }
      ];
      setOrders(mockOrders);
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-management">
      <h2>Order Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>₹{order.total}</td>
              <td>{order.status}</td>
              <td>
                <button className="btn-view">View</button>
                <button className="btn-update">Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
