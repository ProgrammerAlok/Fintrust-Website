import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='login__container'>
      <div className="boxes">
        <div className="signin_fintrust_logo"></div>
        <div className="box box1">
          <h2>Sign in</h2>
          <input 
            type="text" 
            placeholder='username'          
          />
          <input 
            type="password" 
            placeholder='password'
          />
          <br />
          <Link to='/signin'
            className='signin_btn'
          >SIGN IN</Link>
        </div>

        <div className="box box2">
          <h2 className=''>Welcome  <br /> Back</h2>
          <div>
            <p>Simply Create A Free Account By Clicking The Signup Button</p>
            <Link to='/signup'> <div className='login__singup__btn'>SIGN UP</div> </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Login
