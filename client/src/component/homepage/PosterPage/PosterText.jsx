import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export const PosterText = () => {
  const[days,setDays]=useState(15);
  const[hour,setHour]=useState(24);
  const[min,setMin]=useState(60);
  const[sec,setSec]=useState(60);
 

useEffect(()=>{
  // dayDec()
  // hourDec()
  // minDec()
  secDec()
  return ()=> {
    // clearInterval(dayHandler.current)
    // clearInterval(hourHandler.current)
    // clearInterval(minHandler.current)
    clearInterval(secHandler.current)
  }
})  
let dayHandler = useRef()

// function dayDec(){
//   dayHandler.current = setInterval(()=>{
//     setDays(prevDay=> prevDay-1)
//   },1000*24*60*60)
// }
// let hourHandler = useRef()
// function hourDec(){
//   hourHandler.current = setInterval(()=>{
//     setHour(prevHour=> prevHour-1)
//   },1000*60*60)
// }

// let minHandler = useRef()
// function minDec(){
//   minHandler.current = setInterval(()=>{
//     setMin(prevMin=> prevMin-1)
//   },1000*60)
// }

let secHandler = useRef()
function secDec(){
  secHandler.current = setInterval(()=>{
    setSec(prevsec=> prevsec-1)
  },1000)
}

if(sec==0){
  setSec(60)
  setMin(prevMin=> prevMin-1)
}
if(min==0){
  setMin(60)
  setHour(prevHour=> prevHour-1)
}
if(hour==0){
  setHour(24)
  setDays(prevDay => prevDay-1)
}
  return (
    <div className='col-md-5 textBx'>
        <h6><i className='fa-solid fa-fire'></i> Trending Product</h6>
        <h1>Enhance your music experience</h1>
        <h5>Get Best Discount on boat headset</h5>
        <div className="timeBox">
            <label htmlFor=""><span>{days}</span> <span>Day</span></label>
            <label htmlFor=""><span>{hour}</span> <span>Hours</span></label>
            <label htmlFor=""><span>{min}</span> <span>Minutes</span></label>
            <label htmlFor=""><span>{sec}</span> <span>Second</span></label>
        </div>
        <button><i className='fa-solid fa-shopping-basket'></i> Shop Now</button>
    </div>
  )
}
