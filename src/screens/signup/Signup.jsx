import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <section className='signup__container'>
      <div className="signup_boxes">
        <div className="signup_fintrust_logo"></div>
        <div className="signup_box signup_box1">
          <h2>Sign up</h2>
          <div className="signup__name">
            <input 
                type="text" 
                placeholder='first name'          
            />
            <input 
                type="text" 
                placeholder='last name'          
            />
           </div>
          <input 
            type="email" 
            placeholder='email'
          />
          <input 
            type="password" 
            placeholder='password'
          />
          <br />
          <Link to='/signin'
            className='signup_signup_btn'
          >SIGN UP</Link>
        </div>

        <div className="signup_box signup_box2">
          <h2 className=''>Create A Free <br /> Account</h2>
          <div>
            <p style={{marginBottom: '1rem'}}>Already have an account?</p>
            <Link to='/signin'> <div className='signup__singup__btn'>SIGN IN</div> </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Signup
