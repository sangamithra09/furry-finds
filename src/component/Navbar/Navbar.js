import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import logo from '../../Assets/LOGO.png';
import logo3 from "../../Assets/logo3.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { useCart } from '../Shopping/Cart/CartContext';

// import { MdOutlinePets } from "react-icons/md";

function Navbar() {
    const { cartItems } = useCart();
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

                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/petpage'>Pet</Link></li>
                                    <li><Link to='/shop'>Products</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='nav-links2'>
                            <ul>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/wishlistpage'><IoMdHeart /></Link></li>
                            </ul>
                        </div>
                        <Link to='/cart'><span className='cart-icon'><FaShoppingCart /></span></Link>
                        <span className='cart-count'>{cartItems.length}</span>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Navbar
