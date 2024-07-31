import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
// import logo from '../../Assets/LOGO.png';
import logo3 from "../../Assets/logo3.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
// import { MdOutlinePets } from "react-icons/md";

function Navbar() {
    return (
        <body>
        <div>
            <div className="NavBar">
        <div className="logo">
            <img src={logo3} className='logopic' alt='paw'></img>
            <h3>FURRY FINDS</h3>
        </div>
        <div className='top-row'>
        <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search search-icon"></i>
        </div>
        <div className="nav-links-container">
        <div className="nav-links1">
            <ul>
                
                <li><Link to= '/'>Home</Link></li>
                {/* <li><Link to='/animals'><MdOutlinePets /></Link></li> */}
                <li><Link to='/animals'>Pet</Link></li>
                <li><Link to='/shop'>Essentials</Link></li>
            </ul>
        </div>
        </div>
        <div className='nav-links2'>
          <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to=''><IoMdHeart /></Link></li>
                <li><Link to='/cartpage'><FaShoppingCart /></Link></li>
          </ul>
        </div>
        </div>
    </div>
        </div>
        </body>
    )
}

export default Navbar
