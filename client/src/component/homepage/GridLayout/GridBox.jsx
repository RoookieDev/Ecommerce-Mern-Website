import React from 'react'

export const GridBox = ({imgSrc,title,para,model}) => {
  return (
    <div className='gridBox'>
        <img src={imgSrc} alt="" width={100}/>
        <div className="textBx">
            <h1>{title} <span>{model}</span></h1>
            {/* <h5>{model}</h5> */}
            <p>{para}</p>
            <button>Buy Now <i className='fa-solid fa-shopping-cart'></i></button>
        </div>
    </div>
  )
}
