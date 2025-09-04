import React from 'react'
import "./Login.css"
import phone from "../assets/phone.png"

function Login() {
  return (
    <div className='wid'><div className='borders'>
      <img className='imgm' src={phone} alt="" />
      <div className='acc'><h1 className=''>Log in to Exclusive</h1><p>Enter your details below</p>
      <input className='in' type="text" placeholder='Email or Phone Number'/>
      <input className='in' type="text" placeholder='Password'/>
      </div>

   </div> </div>
  )
}

export default Login
