// src/App.js
import React from 'react';
import WebRouter from './router/WebRouter';
import { CartProvider ,useCart} from './component/Shopping/Cart/CartContext';
import { WishlistProvider } from './component/Shopping/Wishlist/WishlistContext';
import Logout from './component/login/Logout';
import './App.css';

function App() {
  return (
    <CartProvider>
      {/* <Logout/> */}
      <WishlistProvider>
      <div className="app">
        <WebRouter />
      </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
