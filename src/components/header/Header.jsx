import React from 'react'
import './header.css'

const Header = () => {
  return (
    <section id='header' className='home_header_container'>
      <div className="home_header_left">
        <h1>Blockchain-based microfinance <br /> 
            platform that provides <br />
            access to financial services
        </h1>
        <button className='btn'>GET STARTED</button>
      </div>
      <div className="home_header_right">
        <div className="home_header_banner_image"></div>
      </div>
    </section>
  )
}

export default Header
