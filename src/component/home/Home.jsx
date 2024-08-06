import React from 'react'
import { Link } from 'react-router-dom'
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../home/Home.css';
import buy from '../../Assets/buy.jpg';
import adopt from '../../Assets/adopt.jpg';
export default function Home() {
  return (
    <body>
    <header id="header1" class="homeheader flex">
    
      <div class="homecontainer">
        <div class="header-content">
      
          <div class="para">
          "Discover your new best friend and all their must-have essentials—where finding pets and perfecting their care is just a click away!"
          </div>
        </div>
      </div>
    </header>
    <section className="gallery">
        <h2>What Are You Interested In?</h2>
        <div className="gallery-container">
          <div className="gallery-item">
           <Link to="/animals"><img Src ={buy} alt="Caption 1" /></Link>
            <div className="caption">Buy</div>
          </div>
          {/* <div className="gallery-item">
            <img src={sell} alt="Caption 2" />
            <div className="caption">Sell</div>
          </div> */}
          <div className="gallery-item">
            <img src={adopt} alt="Caption 3" />
            <div className="caption">Adopt</div>
          </div>
        </div>
      </section>
      <div className='home3'>
      <div class="card">
  <div class="card-content">
    <p>Discover the best products for your pets</p>
    <button class="card-button"><h2>Explore Now</h2></button>
  </div>
</div>
</div>


      <footer/>
      {/* <footer id = "footer" class = "py-7" >
            <div class = "footer-content" id="footer-content">
                <div>
                    <h3>FURRY FINDS</h3>
                </div>

                <div>
                    <ul class = "flex">
                    
                        <li><Link to>About Us</Link></li>
                        <li><Link to>Contact</Link></li>
                        <li><Link to>Social</Link></li>
                        
                    </ul>
                    <div className="social-icons">
    <FaFacebook />
    <FaTwitter />
    <FaInstagram />
    {/* Add more React Icons as needed */}
  {/* </div>
</div>
              </div>
        
    </footer> */} 
    
    
    </body>
    
  )
}
