// PetPage.js
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

  // No need to export, just use this within PetPage
  // const featuredProducts = filteredProducts.slice(0, 3);

  return (
    <div className="petshopping-page">
      <div className="petsidebar">
        <PetFilter setFilters={setFilters} />
      </div>
      <div className="products-container">
        <div className='petbannercard'>
          <div className='petbannercard-content'>
            <p></p>
            <button className='petbannerbutton'><h2>Find Now</h2></button>
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
