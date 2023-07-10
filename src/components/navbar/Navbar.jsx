import React from 'react'
import './navbar.css'

import * as fcl from '@onflow/fcl'
import { useAuth } from '../../context/AppContext'
import { Link } from 'react-router-dom'

fcl.config()
 .put("app.detail.title", "Finterest")
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

const Navbar = ({user, logIn, borrowpage, landpage}) => {
  
  const { 
    authUser, setAuthUser,
    isLoggedin, setIsLoggedin } = useAuth()

  return (
    <nav className='home_nav_container'>
      <div className="home_nav_left">
        <div className="home_nav_logo"></div>
        <h2 className="home_nav_heading">Fintrust</h2>
      </div>
      <div className="home_nav_right">
        {
          isLoggedin 
          ? borrowpage == true || landpage == true ? "" : 
          <>
          <Link to='/lend'> <button className='btn' onClick={logIn} > LEND  </button> </Link>
          <Link to='/borrow'> <button className='btn' onClick={logIn} > BORROW  </button> </Link>
          </>
          :  <button className='btn' onClick={logIn} user={user}>LOG IN</button> 
        }
        
      </div>
    </nav>
  )
}

export default Navbar
