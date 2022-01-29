import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartScreen } from '../components/cart/CartScreen';
import { ContactScreen } from '../components/ecommerce/ContactScreen';
import { EcommerceScreen } from '../components/ecommerce/EcommerceScreen';

export const DasboardRoutes = () => {
  return <>
  <Routes>
      <Route path="/" element={<EcommerceScreen/>}/>
      <Route path="/cart" element={<CartScreen/>}/>
      <Route path="/contact" element={<ContactScreen/>}/>
  </Routes>
  </>
};
