import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login Here</span>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="text" placeholder='Enter your email...' />
            <label>Password</label>
            <input className='loginInput' type="password" placeholder='Enter your password...' />
            <button className="loginButton">Login</button>
        </form>
        <Link className='link' to="/register">
            <button className="registerButton">
              Register
            </button>
         </Link>
    </div>
  )
}
