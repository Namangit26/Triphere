import React from 'react'

export const Tripdata = (props) => {
  return (
    <>
    <div className="card">
      <div className="cardimg">
        <img src= {props.image}alt="" />
      </div>
      <h2>{props.hed}</h2>
      <p className='anipara'>{props.para}</p>

    </div>
    </>
  )
}
