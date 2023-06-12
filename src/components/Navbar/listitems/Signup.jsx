import React from 'react'
import { Navbar } from '../Navbar'
import "./Signup.css"
import { Footer } from '../../Footer'
export const Signup = () => {
  return (
    <>
    <Navbar/>
    <div className="signup">
        <h3>Sign Up </h3>
        <form action="" className='Form'>
          <input type="text"  placeholder='First Name'/>
          <input type="text"  placeholder='Last Name'/>
          <input type="tel"  placeholder='Phone no'/>
          <input type="text"  placeholder='Place ypou love'/>
          <input type="email" name="" id="" placeholder='Email'/>
          <input type="password" id="password" placeholder="password"></input>
          <button>Sign Up</button>
        </form>
    </div>
    <Footer/>
    </>
  )
}
