import React from 'react'
import { Link } from 'react-router-dom'

export const Textpage = () => {
  return (
    <div className='textBx col-md-6'>
        <h5><i className='fa-solid fa-headset'></i> AirDrop</h5>
        <h1>Apple wireless headphone</h1>

        <div className="btnBx">
            <Link><i className='fa-solid fa-shopping-cart'></i> Shop Now</Link>
            <label htmlFor="">
             <h4><i className='fa-solid fa-star'></i> 100+</h4>
              <span>Total Reviews</span>
              </label>
        </div>

    </div>
  )
}
