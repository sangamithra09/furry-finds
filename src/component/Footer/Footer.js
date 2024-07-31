import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer id = "footer" class = "py-7" >
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
  </div>
</div>
              </div>
        
    </footer>
        </div>
    )
}

export default Footer
