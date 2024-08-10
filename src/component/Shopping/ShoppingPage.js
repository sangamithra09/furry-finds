import React, { useState } from 'react';
import FilterOptions from './FilterOptions';
import ShoppingCard from './ShoppingCard';
import productsData from './ProductsData';
import './ShoppingPage.css'
import { useCart } from './Cart/CartContext';

const ShoppingPage = () => {
  const [filters, setFilters] = useState({ pets: [], categories: [] });
  const products = productsData;
  const { message } = useCart();

  const filteredProducts = products.filter((product) => {
    return (
      (filters.pets.length === 0 || filters.pets.includes(product.pet)) &&
      (filters.categories.length === 0 || filters.categories.includes(product.category))
    );
  });

  return (
    <div className="shopping-page">
      <div className="sidebar">
        <FilterOptions setFilters={setFilters} />
      </div>
      <div className="products-container">
      <div className='bannercard'>
        <div className='bannercard-content'>
        <p></p>
        <button className='shopbannerbutton'><h2>Shop Now</h2></button>
        </div>
      </div>
      {message && <div className="message">{message}</div>}
      <div className="products">
        {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
          <ShoppingCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShoppingPage;