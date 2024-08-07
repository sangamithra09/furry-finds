// src/router/WebRouter.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../component/home/Home';
import Login from '../component/login/Login';
import Signup from '../component/signup/Signup';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Cart from '../component/Shopping/Cart/Cart';
import WishlistPage from '../component/Shopping/Wishlist/WishlistPage';
import ShoppingPage from '../component/Shopping/ShoppingPage';
import PetPage from '../component/pets/PetPage';
import ProductDetail from '../component/Shopping/ProductDetailPage';

const WebRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petpage" element={<PetPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlistpage" element={<WishlistPage/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}></Route>
      </Routes>
      <Footer/>
      </>}
      />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
