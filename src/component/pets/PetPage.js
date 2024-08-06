import React, { useState } from 'react';
import PetFilter from './PetFilter';
import PetCard from './PetCard';
import Petdata from './Petdata';
import './PetPage.css';
import { useCart } from '../Shopping/Cart/CartContext';

const PetPage = () => {
  const [filters, setFilters] = useState({ pets: [], breeds: {} });
  const products = Petdata;
  const { message } = useCart();

  const filteredProducts = products.filter((product) => {
    return (
      (filters.pets.length === 0 || filters.pets.includes(product.pet)) &&
      (Object.keys(filters.breeds).length === 0 || 
       (filters.breeds[product.pet] || []).includes(product.breed))
    );
  });

  return (
    <div className="shopping-page">
      <div className="sidebar">
        <PetFilter setFilters={setFilters} />
      </div>
      <div className="products-container">
        <div className='bannercard'>
          <div className='bannercard-content'>
            <p></p>
            <button className='bannerbutton'><h2>Shop Now</h2></button>
          </div>
        </div>
        {message && <div className="message">{message}</div>}
        <div className="products">
          {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
            <PetCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetPage;
