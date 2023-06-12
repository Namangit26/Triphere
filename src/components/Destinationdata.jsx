import React from 'react'
import "./Destination.css"
export const Destinationdata = (props) => {
  return (
    <>         
                <div className={props.class}>
                    <div className="descntntr">
                        <img src={props.image} width="300px " height="300px" alt="" />
                    </div>
                    <div className="descntntl">
                        <h2>{props.heading}</h2>
                        <br />
                        <p className='anipara'>{props.brief} </p>
                    </div>
                </div>
            
    
    </>
  )
}
