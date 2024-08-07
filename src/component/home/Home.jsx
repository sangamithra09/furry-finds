import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css';
import buy from '../../Assets/buy.jpg';
import adopt from '../../Assets/adopt.jpg';
import about from '../../Assets/aboutus.png'
import PetCard from '../pets/PetCard'; // Import PetCard component
import Petdata from '../pets/Petdata'; // Import Petdata

export default function Home() {
  // Get the first three products from Petdata
  // const featuredProducts = Petdata.slice(0, 3);

  return (
    <div>
      <header id="header1" className="homeheader">
        <div className="homecontainer">
          <div className="header-content">
            <div className="para">
              "Discover your new best friend and all their must-have essentials—where finding pets and perfecting their care is just a click away!"
            </div>
          </div>
        </div>
      </header>
      <section className="gallery">
        <h2>What Are You Interested In?</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <Link to="/animals"><img src={buy} alt="Buy" /></Link>
            <div className="caption">Buy</div>
          </div>
          <div className="gallery-item">
            <Link to="/animals"><img src={adopt} alt="Adopt" /></Link>
            <div className="caption">Adopt</div>
          </div>
        </div>
      </section>
      <div className='home3'>
        <div className="card">
          <div className="card-content">
            <p>Discover the best products for your pets</p>
            <button className="card-button"><h2><Link to="/shop">Explore Now</Link></h2></button>
          </div>
        </div>
      </div>
      <div className='about'>
        <img src={about}></img>
      </div>
      {/* <section className="featured-pets">
        <h2>Featured Pets</h2>
        <div className="featured-pets-container">
          {featuredProducts.map(product => (
            <PetCard key={product.id} product={product} showAddToCartButton={false} />
          ))}
        </div>
      </section> */}
      <footer />
    </div>
  );
}
