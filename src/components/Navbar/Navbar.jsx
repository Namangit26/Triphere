import React from 'react'
import "./Style.css";
import { Link } from 'react-router-dom';
import  { useState } from 'react';

export const Navbar = () => {
  const [togglemenu,settogglemenu]= useState(false);
  return (
    <>
    <nav className="navbaritems">
        <h1 className="logo">Triphere</h1>
        
        <ul className="list">
            <li className="listitems">
            <i class="fa-solid fa-house"></i>
            <Link to="/" className="links">Home</Link>
            </li>
            <li className="listitems">
            <i class="fa-sharp fa-solid fa-circle-info"></i>
            <Link to="/about" className="links">About</Link>
            </li>
            <li className="listitems">
            <i class="fa-solid fa-address-book"></i>
            <Link to="/contacts" className="links">Contacts</Link>
            </li>
            <li className="listitems">
            <i class="fa-solid fa-briefcase"></i>
            <Link to="/services" className="links">Services</Link>
            </li>
            <li className="listitems">
            <i class="fa-sharp fa-solid fa-user-plus"></i>
             <Link to="/signup" className="links">Signup</Link>
            </li>
        </ul>
        
        <div className="app__navbar-smallscreen">
               
               <div className="hamburger" color="#fff" fontsize={27} onClick={()=>settogglemenu(true)}>
                 <i className="fas fa-bars"></i>
                </div>
               {togglemenu &&(
                  <div className="app__navbar-smallscreen_overlay flex slide-bottom">
                    <div className="close overlay__close" fontsize={27} onClick={()=>settogglemenu(false)}>
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                    </div>
                     <div className="cntr">
                        <ul className="appsmallscreenlink">
                                <li className="listitems">
                                <i class="fa-solid fa-house"></i>
                                <Link to="/" className="links"onClick={()=>settogglemenu(false)}>Home</Link>
                                </li>
                                <li className="listitems">
                                <i class="fa-sharp fa-solid fa-circle-info"></i>
                                <Link to="/about" className="links"onClick={()=>settogglemenu(false)}>About</Link>
                                </li>
                                <li className="listitems">
                                <i class="fa-solid fa-address-book"></i>
                                <Link to="/contacts" className="links"onClick={()=>settogglemenu(false)}>Contacts</Link>
                                </li>
                                <li className="listitems">
                                <i class="fa-solid fa-briefcase"></i>
                                <Link to="/services" className="links"onClick={()=>settogglemenu(false)}>Services</Link>
                                </li>
                                <li className="listitems">
                                <i class="fa-sharp fa-solid fa-user-plus"></i>
                                <Link to="/signup" className="links"onClick={()=>settogglemenu(false)}>Signup</Link>
                                </li>
                        </ul>
                     </div>
                  </div>
               )}

            </div>

        
        

    </nav>
    </>
  )
}
