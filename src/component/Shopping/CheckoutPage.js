import React from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { cart = [], total = 0 } = location.state || {};
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [cardDetails, setCardDetails] = React.useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiDetails, setUpiDetails] = React.useState({
    upiId: '',
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    // Clear details when changing payment methods
    if (method !== 'creditCard') setCardDetails({ cardNumber: '', expiryDate: '', cvv: '' });
    if (method !== 'upi') setUpiDetails({ upiId: '' });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpiChange = (e) => {
    const { name, value } = e.target;
    setUpiDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    alert(`Payment method: ${paymentMethod}\nOrder Total: ₹${total}\nCard Details: ${JSON.stringify(cardDetails)}\nUPI Details: ${JSON.stringify(upiDetails)}`);
  
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
            {paymentMethod === 'creditCard' && (
              <div className="payment-form">
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </label>
                <label>
                  Expiry Date:
                  <input
                    type="text"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardChange}
                    placeholder="MM/YY"
                    required
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                    placeholder="123"
                    required
                  />
                </label>
              </div>
            )}
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
            {paymentMethod === 'upi' && (
              <div className="payment-form">
                <label>
                  UPI ID:
                  <input
                    type="text"
                    name="upiId"
                    value={upiDetails.upiId}
                    onChange={handleUpiChange}
                    placeholder="example@upi"
                    required
                  />
                </label>
              </div>
            )}
          </div>
          <button onClick={handleCheckout} className="pay-now-button">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
