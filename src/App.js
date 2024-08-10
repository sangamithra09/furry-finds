// src/App.js
import React from 'react';
import WebRouter from './router/WebRouter';
import { CartProvider } from './component/Shopping/Cart/CartContext';
import { WishlistProvider } from './component/Shopping/Wishlist/WishlistContext';
// import './App.css';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
      <div className="app">
        <WebRouter />
      </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
