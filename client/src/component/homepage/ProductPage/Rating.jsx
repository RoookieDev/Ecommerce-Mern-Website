import React from 'react'

export const Rating = ({rating}) => {
    
  return (
    <div className='ratingBx'>
        <h4>{rating} <i className='fa-solid fa-star'></i></h4>
    </div>
  )
}
