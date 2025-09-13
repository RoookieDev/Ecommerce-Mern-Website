import React from 'react'
// Image importing
import jbl_1  from '../../../assets/images/png/headphone/jbl_b1.png'
import jbl_2  from '../../../assets/images/png/headphone/jbl_b2.png'
import jbl_3  from '../../../assets/images/png/headphone/jbl_b3.png'
import { ImageBox } from './ImageBox'
import { TextBox } from './TextBox'

export const SliderBoxNew = () => {
    let textBx = document.querySelector(".sliderTop .sliderBoxTop .textBx");
    let imgBx = document.querySelector(".sliderTop .sliderBoxTop .imgBx")    
    function nextTopSlide(){
        let textBoxes= document.querySelectorAll('.sliderTop .sliderBoxTop .textBx')
        let height = textBx.clientHeight
        let width = imgBx.clientWidth
        imgBx.scrollLeft=imgBx.scrollLeft+width
        textBoxes.forEach((box)=>{
            box.scrollTop=textBx.scrollTop + height
        })
        
      
        
    }
    function prevTopSlide(){
        let textBoxes= document.querySelectorAll('.sliderTop .sliderBoxTop .textBx')
        let height = textBx.clientHeight
         let width = imgBx.clientWidth
        imgBx.scrollLeft=imgBx.scrollLeft-width
        textBoxes.forEach((box)=>{
            box.scrollTop=textBx.scrollTop - height
        })
    }
  return (
    <div className='sliderBoxTop'>
        <div className="textBx">
        <TextBox text={'JBL Wave'}/>
        <TextBox text={'JBL Tune'}/>
        <TextBox text={'JBL Live'}/>
       </div>
       <div className="imgBx">
         <ImageBox img={jbl_1}/>
          <ImageBox img={jbl_2}/>
           <ImageBox img={jbl_3}/>
       </div>
       <div className="textBx">
        <TextBox text={'JBL Wave'}/>
        <TextBox text={'JBL Tune'}/>
        <TextBox text={'JBL Live'}/>
       </div>
       
       <div className='navigateBtn'>
            <button onClick={prevTopSlide}><i className='fa-solid fa-arrow-left-long'></i></button>
            <button onClick={nextTopSlide}><i className='fa-solid fa-arrow-right-long'></i></button>
        </div>
    </div>
  )
}
