import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem'; 
import './Cart.css'

const Cart = () => {
  const { cart = [], totalAmount = 0, notification = {} } = useCart();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {notification.show && <p className="cart-message">{notification.message}</p>}
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>
      <h3>Total: ₹{calculateTotalAmount().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;


// import React from 'react';
// import { useCart } from './CartContext';
// import CartItem from './CartItem'; // Adjust the import if needed
// import './Cart.css';

// const Cart = () => {
//   const { cart = [], notification = {} } = useCart();

//   // Calculate total amount
//   const calculateTotalAmount = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {notification.show && <p className="cart-message">{notification.message}</p>}
//       <div className="cart-items">
//         {cart.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           cart.map((item) => (
//             <CartItem key={item.id} item={item} />
//           ))
//         )}
//       </div>
//       <h3>Total: ${calculateTotalAmount().toFixed(2)}</h3>
//     </div>
//   );
// };

// export default Cart;
