import React from 'react'
import './header.css'

const Header = () => {
  return (
    <section id='header' className='home_header_container'>
      <div className="home_header_left">
        <h2>Blockchain-based <br /> microfinance <br /> 
            platform that <br /> provides <br />
            access to financial <br /> services
        </h2>
      </div>
      <div className="home_header_right">
        <div className="home_header_banner_image"></div>
      </div>
    </section>
  )
}

export default Header
