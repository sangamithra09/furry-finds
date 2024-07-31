// src/pages/ShopPage.js
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import products from './ProductsData';
import './ShopPage.css';

const ShopPage = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('Dog');

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="shop-page">
      <h1>Shop by Pet</h1>
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('Dog')}>Dog</button>
        <button onClick={() => setSelectedCategory('Cat')}>Cat</button>
        <button onClick={() => setSelectedCategory('Birds')}>Birds</button>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
