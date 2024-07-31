// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageSrc || item.imageUrl} alt={item.name || item.breed} />
              <div className="cart-item-details">
                <h2>{item.name || item.breed}</h2>
                <p>{item.description}</p>
                {/* <p>Age: {item.age}</p> */}
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="quantity-buttons">
                <button onClick={() => decrementQuantity(item.id)} className="decrement-button">
                    <FaMinus />
                  </button>
                  <button onClick={() => incrementQuantity(item.id)} className="increment-button">
                    <FaPlus />
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
