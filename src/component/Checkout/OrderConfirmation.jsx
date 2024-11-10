import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { orderId } = state;

  // Fetch order details from backend if needed

  return (
    <div className="order-confirmation">
      <h2>Thank You for Your Order!</h2>
      <p>Your order ID is {orderId}</p>
      {/* You can add more details here like shipping address, order items, etc. */}
    </div>
  );
};

export default OrderConfirmation;
