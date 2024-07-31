// src/App.js
import React from 'react';
import WebRouter from './router/WebRouter';
import { CartProvider } from './component/essentials/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <WebRouter />
      </div>
    </CartProvider>
  );
}

export default App;
