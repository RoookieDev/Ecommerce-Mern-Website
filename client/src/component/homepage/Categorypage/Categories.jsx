import React from 'react'
import { CatergoryCard } from './CatergoryCard'
import cat1 from '../../../assets/images/png/icon/computer.png'
import cat2 from '../../../assets/images/png/icon/iphone.png'
import cat3 from '../../../assets/images/png/icon/monitor.png'
import cat4 from '../../../assets/images/png/icon/console.png'
import cat5 from '../../../assets/images/png/icon/laptop.png'
import cat6 from '../../../assets/images/png/icon/network.png'
import cat7 from '../../../assets/images/png/icon/electric-appliance.png'

import { CateTitle } from './CateTitle'
// css import

import '../../../assets/css/CategoryStyle.css'

export const Categories = () => {
  let colSize = 'col-md-2'

 function nextSlide(){
  let sliderCon = document.querySelector(".sliderBox");
  let width = sliderCon.clientWidth;
  sliderCon.scrollLeft = width+sliderCon.scrollWidth;
 }

 function prevSlide(){
  let sliderCon = document.querySelector(".sliderBox");
  let width = sliderCon.clientWidth;
  sliderCon.scrollLeft = width - sliderCon.scrollWidth;
 }



  return (
    <div className='categories'>
       <div className="container-fluid">
       {/* <CateTitle event={nextSlide}/> */}
        <div className='CateTitle'>
        <div className="title">
        <h5><i className='fa-solid fa-list'></i> Categories</h5>
        <h2>Browse By Category</h2>
        </div>
        <div className="buttonBx">
            <button id='prev' onClick={prevSlide}><i className='fa-solid fa-arrow-left-long'></i></button>
            <button id='next' onClick={nextSlide}><i className='fa-solid fa-arrow-right-long'></i></button>
        </div>
    </div>
        <div className="sliderBox">
          <CatergoryCard colSize={colSize} icon = {cat2} title={'mobile'}/>
          <CatergoryCard colSize={colSize} icon = {cat1} title={'Accessories'}/>
          <CatergoryCard colSize={colSize} icon = {cat5} title={'Laptop'}/>
          <CatergoryCard colSize={colSize} icon = {cat3} title={'Monitor'}/>
          <CatergoryCard colSize={colSize} icon = {cat4} title={'Gaming'}/>
          <CatergoryCard colSize={colSize} icon = {cat7} title={'Home Appliance'}/>
          <CatergoryCard colSize={colSize} icon = {cat6} title={'Networking'}/>
        </div>
        {/* row end here */}
       </div>
       {/* container end here */}
    </div>
    // categories end here
  )

 
}


