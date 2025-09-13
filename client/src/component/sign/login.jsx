import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg from '../../assets/images/jpg/bg_2.jpg'
import '../../assets/css/loginStyle.css'
import axios from 'axios'
export const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  // alert box state
  const [alertMsg,setAlertMsg] = useState({
    msg:'Aler Message',
    top:'0px',
    opacity:'0'
  });

  // Loading 
  const [loading,setLoading] = useState(false);

  // navigate state
  const navigate = useNavigate()


  function loginHandler(e){
    e.preventDefault()

    if(email==""||email==null||password==""||password==null){
     setAlertMsg(prev=>{
      return{...prev,msg:'Please Fill all input fields', top:'20px',opacity:'1'}
     }) 
    }

     else{
      setLoading(true)
      axios.post('http://localhost:3001/api/login',{email,password})
      .then(res=> {
        if(res.data.msg==0){
          setAlertMsg(prev=>{
            return{...prev,msg:'Incorrect Password',top:'20px',opacity:1}
          })
          setLoading(false)
        }
        else if(res.data.msg == 'E'){
           setAlertMsg(prev=>{
            return{...prev,msg:'Incorrect Email',top:'20px',opacity:1}
          })
          setLoading(false)
        }

        else{
          localStorage.setItem("token", res.data.tokenData)
          navigate('/homepage')
        }
      })

      .catch(err=> {
        console.log(err)
        setLoading(false)
      })
     }
  }


  const alertStyle = {
    top:alertMsg.top,
    opacity:alertMsg.opacity
  }

   function resetAlert(){
        setAlertMsg(prev =>{
          return {...prev, msg:'Alert Message', top:0, opacity:0}
        })
    }

 
  
  return (
    <div className='LoginPage'>
      <div className="row">
        <div className="col-md-8 imgBx">
          <img src={bg} alt=""/>
        </div>
        {/* ImgBox end here */}

        <div className="col-md-4 formBx">
          <h5>Welcome Back</h5>
          <h1>Login Back</h1>
          <form action="">
            <input type="email" 
            placeholder='Email Address'
            value={email}
            onChange={e=> setEmail(e.target.value)}
            />
            <input type="password" 
            placeholder='Enter Password'
            value={password}
            onChange={e=> setPassword(e.target.value)}
            />
            {
              loading?<button disabled onClick={loginHandler}>Loading <i className='fa-solid fa-spinner fa-spin'></i></button>:<button onClick={loginHandler}>Login Back<i className='fa-solid fa-sign-in'></i></button>
            }
            
          </form>
           <div className="linkBox">
              <p>If you are not registred as a Member then click on button to take and get your free account.</p>
                <Link to={'/register'}>Register Now</Link>
              </div>
            {/* linkBox end here */}
        </div>
        {/* formBx end here */}
      </div>
      {/* row end here */}

       <div className='alertBox' style={alertStyle}>
            <h5>{alertMsg.msg}</h5>
            <button onClick={resetAlert}>Okay</button>
        </div>
    </div>
    // loginPage end here
  )
}
