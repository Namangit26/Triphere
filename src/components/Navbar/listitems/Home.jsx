import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from './Hero'
import { Destination } from '../../Destination'
import { Footer } from '../../Footer'
import { Trip } from '../../Trip'
export const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero
    class="home"
    img="./assets/1.png"
    heading="Explore the world, one adventure at a time."
    move="homemove"
    url=""
    cname="homebtnclass"
    btntext="Travel Plan"
    />
   
   <p className='paras'> Welcome to our travel website, where you can discover and plan your next adventure with ease. Whether you're looking for a tropical beach vacation, a romantic getaway, or an adventurous backpacking trip, we've got you covered. Our site features a user-friendly search bar that allows you to input your desired location, travel dates, and budget to find the best deals available</p>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
    
  )
}
