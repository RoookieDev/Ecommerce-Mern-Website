import React from 'react'

// CSS import
import '../../../assets/css/serviceStyle.css'
import { ServiceCard } from './ServiceCard'

export const ServicePage = () => {
  return (
    <div className='servicePage'>
        <div className="container">
            <ServiceCard 
            title={'fast devliver'} 
            icon={'fa-solid fa-truck-fast'} 
            para={'We provide fast delivery guaranteed without extra cost.'}
            />
            <ServiceCard 
            title={'Easy Return'} 
            icon={'fa-solid fa-right-left'} 
            para={'We provide fast delivery guaranteed without extra cost.'}
            />
            <ServiceCard 
            title={'Quality Assured'} 
            icon={'fa-regular fa-square-check'} 
            para={'We provide fast delivery guaranteed without extra cost.'}
            />
        </div> 
    </div>
  )
}
