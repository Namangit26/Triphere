import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from './Hero'
import { Footer } from '../../Footer'
import "./Contact.css"
export const Contacts = () => {
  return (
    <>
    <Navbar/>
    
    <Hero
    class="about"
    img="./assets/4.png"
    heading="Experience the world like never before with our comprehensive travel services."
    url=""
    move="aboutmove contact"
    cname="hide"
    />
    <div className="contact">
        <h3>Contact Us </h3>
        <form action="" className='Form'>
          <input type="text"  placeholder='Name'/>
          <input type="email"  placeholder='Email'/>
          <input type="text"  placeholder='Subject'/>
          <textarea name="Message" id="" placeholder='Message'  rows="5"></textarea>
          <button>Send Here</button>
        </form>
    </div>
    <Footer/>
    
    </>
  )
}
