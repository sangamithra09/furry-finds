import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <div className="quantity-controls">
        <button onClick={() => decrementQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQuantity(item.id)}>+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="remove-item">✖</button>
    </div>
  );
};

export default CartItem;


// import React from 'react';
// import { useCart } from './CartContext';
// // import './CartItem.css'; // Define styles as needed

// const CartItem = ({ item }) => {
//   const { id, name, price, quantity } = item;
//   const { incrementQuantity, decrementQuantity, removeItem } = useCart();

//   return (
//     <div className="cart-item">
//       <div className="cart-item-details">
//         <h4>{name}</h4>
//         <p>${price.toFixed(2)}</p>
//         <p>Quantity: {quantity}</p>
//       </div>
//       <div className="cart-item-actions">
//         <button onClick={() => incrementQuantity(id)}>+</button>
//         <button onClick={() => decrementQuantity(id)}>-</button>
//         <button onClick={() => removeItem(id)}>Remove</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
