import React from 'react'
import "./Register.css"
import phone from "../assets/phone.png"
import google from "../assets/google.png"
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className='width'>
    <div className='border'>
      <img className='img' src={phone} alt="" />
      <div className='account'>
      <div className='acc1'>  <h1 className='l'>Create an account</h1>
        <p>Enter your details below</p></div>
        <div className='login'>
          <input className='input1' type="text" placeholder='Name'/>
          <hr />
          <input className='input2' type="text" placeholder='Email or Phone Number'/>
          <hr />
          <input className='input3' type="text" placeholder='Password'/>
          <hr />
        </div>
        <button className='btn5'>Create Account</button>
        <button className='btn6'><img src={google} alt="" /><p className='t'>Sign up with Google</p></button>
        <div className='but'>
          <p>Already have account?</p> <Link to="/login">Log in</Link>
        </div>
      </div>
    </div></div>
  )
}

export default Register
