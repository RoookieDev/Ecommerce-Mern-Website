import React, { useState } from 'react'
import { ProductImage } from './ProductImage'
import { ProductText } from './ProductText'
import { ProductButton } from './ProductButton'

export const ProductCard = (props) => {
    const {col_size, name, price,rating, img,index,id} = props
    const companyName = name.split(',')

    // Paging

    
    
  return (
    <div className={`cardHolder ${col_size}`}>
       <div className="card">
        <div className="prdData">
         
          <ProductImage prdImg={img}/>
          <ProductText price={price} companyName={companyName[0]} rating={rating}/>
          <button>Buy Now <i className='fa-solid fa-shopping-cart'></i></button>
        
        </div>

        {/* prdData end here */}
       <ProductButton id={id}/>

       </div>
       {/* card end here */}

    </div>
    // cardholder end here
  )
}
