import React from 'react'
import { Rating } from './Rating'

export const ProductText = ({companyName,price,rating}) => {
  return (
    <div className='textBx'>
        <h6>{companyName}</h6>
      
        <h3>{price}</h3>

          {/* <Rating rating={rating}/> */}
    </div>
  )
}
