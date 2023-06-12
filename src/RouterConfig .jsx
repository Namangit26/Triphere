import React from 'react'
import {  Routes, Route } from 'react-router-dom';
import { Home } from './components/Navbar/listitems/Home';
import { Signup } from './components/Navbar/listitems/Signup';
import { Contacts } from './components/Navbar/listitems/Contacts';
import { Services } from './components/Navbar/listitems/Services';
import { About } from './components/Navbar/listitems/About';

export const RouterConfig  = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
    
  )
}
