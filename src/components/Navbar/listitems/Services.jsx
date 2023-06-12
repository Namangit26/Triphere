import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from './Hero'
import { Trip } from '../../Trip'
import { Footer } from '../../Footer'
export const Services = () => {
  return (
    <>
    <Navbar/>
    <Hero
    class="about "
    img="./assets/3.png"
    heading="Experience the world like never before with our comprehensive travel services."
    url=""
    move="ser"
    />
    <Trip/>
    <Footer/>
    
    </>
  )
}
