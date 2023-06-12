import React from 'react'
import { Navbar } from '../Navbar'
import { Hero } from './Hero'
import { Footer } from '../../Footer'
import "./About.css"
export const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        class="about"
        img="./assets/2.png"
        heading="We're here to turn your wanderlust into reality."
        url=""
        move="aboutmove"
        cname="hide"
        btntext="Travel Plan"
      />
      <div className="aboutcntnt">
        <h1>History</h1>
        <p >Our company was founded in 2010 with the goal of making travel easier and more accessible for everyone. We saw a need for a platform that could help people find the best deals on flights, hotels, and activities, while also providing them with useful information and resources to make their trips as enjoyable as possible.
         Over the years, we've grown into one of the leading travel websites in the industry, with millions of users around the world relying on us to plan their trips. Our team of experts is constantly working to improve our platform and make it even easier for people to find the perfect vacation package or destination.
          Thank you for choosing us as your go-to travel resource, and we look forward to helping you plan your next amazing trip!</p>
        <h1>Our Mission</h1>
        <p >Our mission is to make travel easier, more affordable, and more enjoyable for everyone. We believe that travel is one of the most rewarding experiences a person can have, and we want to help as many people as possible experience all the amazing things the world has to offer.
          To achieve this mission, we work hard to provide our users with the best deals on flights, hotels, and activities, while also providing them with useful information and resources to help plan their trips. We are committed to transparency and honesty in all our dealings, and we strive to always put our customers first.</p>
        <h1>Our Vision</h1>
        <p >Our vision is to become the go-to platform for all travelers around the world. We want to be the first place people turn to when planning a trip, whether it's a quick weekend getaway or a month-long adventure.
          To achieve this, we aim to provide the most comprehensive and user-friendly travel platform possible, with all the tools and resources travelers need to plan their perfect trip. We're always looking for ways to improve our platform, and we're committed to staying at the forefront of technological innovation in the travel industry.
          We also believe that travel should be accessible to everyone, regardless of budget or experience. We want to empower people to explore the world on their own terms, and we're dedicated to making that as easy and affordable as possible.</p>
      </div>
      <Footer />
    </>
  )
}
