import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './component/sign/register'
import './assets/css/MainStyle.css'
import { Login } from './component/sign/login'
import { Homepage } from './component/homepage/Homepage'


function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
      
     
    </Routes>
   </BrowserRouter>
  
)
}

export default App
