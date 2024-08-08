import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container padding'>
          <div className='box-logo'>
            <h1>FURRY FINDS</h1>
            <p>"Explore our diverse selection of pets available for purchase—find your new furry friend and give them a loving home today!</p>
             <div className="icons">
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            </div>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li><Link to='/petpage'>Pets</Link></li>
              <li><Link to='/shop'>Products</Link></li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 9897875640
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                furryfinds@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer