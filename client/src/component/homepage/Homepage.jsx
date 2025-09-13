import React, { useEffect, useState } from 'react'
import '../../assets/css/homepageStyle.css'
import { Navbar } from './navbar/Navbar'
import { ContentPage } from './ContentPage/ContentPage'
import { Categories } from './Categorypage/Categories'
import { Posterpage } from './PosterPage/Posterpage'
import { ProductPage } from './ProductPage/ProductPage'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SliderPage } from './Slider/SliderPage'
import { ServicePage } from './service/ServicePage'
import { GridLayout } from './GridLayout/GridLayout'
export const Homepage = () => {
  const [userName, setUserName] = useState()
  // get token from localstorage
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  useEffect(()=>{
    axios.post("https://ecommerce-mern-website-backend-rigl.onrender.com/api/JWTToken", {token},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=> {
      let name = res.data.name.split(' ')
      setUserName(name[0])
    })
    .catch(err=> {
     
      if(err.response.data.msg=='Invalid'){
        navigate('/login')
      }
    })
  },[])

  return (
    <div className='homepage'>
      <Navbar active_user = {userName}/>
      <ContentPage/>
      <Categories/>
      <Posterpage/>
      <ProductPage/>
      <SliderPage/>
      <GridLayout/>
      <ServicePage/>
    </div>
  )
}
