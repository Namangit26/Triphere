import React from 'react'
import "./Herostyle.css"
import { Link } from 'react-router-dom';

export const Hero = (props) => {
  return (
    <>
    <div className={props.class}>
        <img src={props.img} alt="" />
    </div>
        
    <div className={props.move}>
      <div className="herotext">
      <h2 >
        {props.hed}
      </h2>
          <h1 className='animated-heading'>
          {props.heading}
          </h1>
          <p className='anipara'>{props.cntent}</p>
          <Link to="/services" className="links"><a href={props.url} className={props.cname}>{props.btntext}</a></Link>
          
      </div>

    </div>
    </>
  )
}
