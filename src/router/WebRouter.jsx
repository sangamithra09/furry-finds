// src/router/WebRouter.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../component/home/Home';
import Login from '../component/login/Login';
import Signup from '../component/signup/Signup';
import AnimalsPage from '../component/animals/AnimalsPage';
import Navbar from '../component/Navbar/Navbar';
import ShopPage from '../component/essentials/ShopPage';
import CartPage from '../component/essentials/CartPage';
import Footer from '../component/Footer/Footer';

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/animals" element={<AnimalsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default WebRouter;
