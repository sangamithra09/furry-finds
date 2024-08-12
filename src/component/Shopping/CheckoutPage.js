import React, { useState, useEffect } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [orderDetails, setOrderDetails] = useState({ products: [], total: 0 });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    // Mock data to simulate order details. Replace with actual data fetching logic.
    const mockOrderDetails = {
      products: [
        { id: 1, name: 'Grain-Free Cat Food', description: 'Description 1', quantity: 2, price: 1399, image: 'https://images.meesho.com/images/products/208053140/00zrc_1200.jpg' },
        { id: 2, name: 'Trixie 1 Capri Transport Box', description: 'Description 2', quantity: 1, price: 1200, image: 'https://m.media-amazon.com/images/I/417ioWIRIKS._SY300_SX300_QL70_FMwebp_.jpg' }
      ],
      total: 2599
    };
    setOrderDetails(mockOrderDetails);
  }, []);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleCheckout = () => {
    alert(`Payment method: ${paymentMethod}\nOrder Total: ₹${orderDetails.total}\nDeliver to: ${JSON.stringify(deliveryInfo)}`);
    // Implement checkout logic here
  };

  const { products, total } = orderDetails;

  // Ensure total is defined
  const totalAmount = total || 0;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {products.map((product) => (
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
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
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
      <div className="delivery-info">
        <h2>Deliver To:</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={deliveryInfo.name} onChange={handleDeliveryChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={deliveryInfo.address} onChange={handleDeliveryChange} required />
          </label>
          <label>
            City:
            <input type="text" name="city" value={deliveryInfo.city} onChange={handleDeliveryChange} required />
          </label>
          <label>
            State:
            <input type="text" name="state" value={deliveryInfo.state} onChange={handleDeliveryChange} required />
          </label>
          <label>
            ZIP Code:
            <input type="text" name="zip" value={deliveryInfo.zip} onChange={handleDeliveryChange} required />
          </label>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
