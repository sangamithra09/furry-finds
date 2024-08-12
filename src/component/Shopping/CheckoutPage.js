import React from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { cart = [], total = 0 } = location.state || {};
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    alert(`Payment method: ${paymentMethod}\nOrder Total: ₹${total}`);
    // Implement checkout logic here
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="product-item">
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ₹{product.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Total Amount: ₹{total.toFixed(2)}</h3>
          </div>
        </div>
        <div className="payment-methods">
          <h2>Payment Method</h2>
          <div className="payment-option">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={() => handlePaymentMethodChange('creditCard')}
            />
            <label htmlFor="creditCard">Credit/Debit Card</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => handlePaymentMethodChange('upi')}
            />
            <label htmlFor="upi">UPI</label>
          </div>
          <button onClick={handleCheckout} className="pay-now-button">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
