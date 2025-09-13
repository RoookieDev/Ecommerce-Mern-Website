import React from 'react'

export const CateTitle = () => {
  return (
    <div className='CateTitle'>
        <div className="title">
        <h5><i className='fa-solid fa-list'></i> Categories</h5>
        <h2>Browse By Category</h2>
        </div>
        <div className="buttonBx">
            <button id='prev'><i className='fa-solid fa-arrow-left-long'></i></button>
            <button id='next'><i className='fa-solid fa-arrow-right-long'></i></button>
        </div>
    </div>
  )
}
