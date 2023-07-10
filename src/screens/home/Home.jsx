import React, { useState } from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Testimonials from '../../components/testimonials/Testimonials'
import Experience from '../../components/experience/Experience'
import Footer from '../../components/footer/Footer'
import { useAuth } from '../../context/AppContext'

import * as fcl from '@onflow/fcl'

fcl.config()
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

function Home() {

  const {
    authUser, setAuthUser,
    isLoggedin, setIsLoggedin } = useAuth()
  
  const [user, setUser] = useState()

  const logIn =  () => {
    console.log("this is login fun")
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);

    setAuthUser({...user})
    if(authUser){
      if((JSON.parse(localStorage.getItem('user-wa') || '[]')).length === 0)
        localStorage.setItem('user-wa', JSON.stringify(user.addr))
    }
    // console.log(authUser)
    setIsLoggedin(true)
  }

  return (
    <div className=''>
      <Navbar logIn={logIn} user={user} />
      <Header />
      <Testimonials />
      <Experience />
      <Footer />
    </div>
  )
}

export default Home
