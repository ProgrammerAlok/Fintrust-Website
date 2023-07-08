import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='home_nav_container'>
      <div className="home_nav_left">
        <div className="home_nav_logo"></div>
        <div className="home_nav_heading">Fintrust</div>
      </div>
      <div className="home_nav_right">
        <button className='btn'>SIGN IN</button>
        <button className='btn'>SIGN UP</button>
      </div>
    </nav>
  )
}

export default Navbar
