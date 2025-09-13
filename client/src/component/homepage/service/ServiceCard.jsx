import React from 'react'

export const ServiceCard = ({title,para,icon}) => {
  return (
    <div className='card col-md-4'>
        <i className={icon}></i>
        <h4>{title}</h4>
        <p>{para}</p>
    </div>
  )
}
