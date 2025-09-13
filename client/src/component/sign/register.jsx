import React, { useState } from 'react'
import '../../assets/css/registerStyle.css'
import { Link, useNavigate } from 'react-router-dom'
import vid from '../../assets/video/man.mp4'
import bg from '../../assets/images/jpg/bg.jpg'

import axios from 'axios'
import { Loader } from './Loader'

export const Register = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    // navigation hook
    const navigate = useNavigate();
    
    // alertBox state
    const [alertStyle, setAlertStyle] = useState({
        msg:"Alert Message Box",
        top:0,
        opacity:0
    });

    // loading hook
    const [isLoading, setIsLoading] = useState(false);

    // client-side validation
    function submitHandler(e){
        e.preventDefault()
        if(name==""||name==null||email==""||email==null||password==""||password==null){
            setAlertStyle(prev => {
                return {...prev, msg:"Input Fields are empty", top:'20px',opacity:'1'}
            })
           
            
        }
        else if(name.length < 4){
            setAlertStyle(prev => {
                return {...prev, msg:"Please Enter Valid Name", top:'20px',opacity:'1'}
            })
      
            
        }
        else{
            setIsLoading(true)
            axios.post("https://ecommerce-mern-website-backend-rigl.onrender.com/api/register", {name, email,password})
            .then(res=> {
                if(res.data.msg =='d'){
                setAlertStyle(prev => {
                    return {...prev, msg : "Email Already Taken", top:'20px', opacity:'1'}
                })
                setIsLoading(false)
                }
                
                else{
                   navigate('/login')
                     setIsLoading(false)
                }
            })
            .catch(err=> {
                console.log(err)
                setIsLoading(false)
            })   

            }
    }
    
    
    
    // CSS Properties
    const alertCSS = {
        top:alertStyle.top,
        opacity : alertStyle.opacity
    }

   

   

    function resetStyle(){
          setAlertStyle(prev => {
                return {...prev, top:'0px',opacity:'0'}
            })
    }
    
    
  return (
    <div className='registerPage'>
        <div className="row">
            <div className="col-md-4 formBx">
                <h5>Get Your</h5>
                <h1>Free Membership</h1>
                <form action="" onSubmit={submitHandler}>
                    <input type="text" 
                    placeholder='Full Name'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                    <input 
                    type="email" 
                    placeholder='Email Address'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    placeholder='Create Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    {
                        isLoading?<button disabled>Loading.. <i className='fa-solid fa-spinner fa-spin'></i></button> : <button >Take Membership<i className='fa-solid fa-arrow-right-long'></i></button>
                 
                    }
                    
                    
                </form>
                <div className="linkBox">
                    <p>If you are already taken Membership then click on button to login and access your account.</p>
                    <Link to={'/login'}>Login Now</Link>
                </div>
                {/* linkBox end here */}
            </div>
            {/* FormBx end here */}

            <div className="col-md-8 videoBox">
                {/* <video src={vid} muted autoPlay loop></video> */}
                <img src={bg} alt="" />
            </div>
        </div>
        {/* row end here */}
        <div className='alertBox' style={alertCSS}>
            <h5>{alertStyle.msg}</h5>
            <button onClick={resetStyle}>Okay</button>
        </div>
    </div>
    // registerPage
  )
}
