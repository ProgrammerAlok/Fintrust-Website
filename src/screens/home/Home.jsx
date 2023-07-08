import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Testimonials from '../../components/testimonials/Testimonials'
import Experience from '../../components/experience/Experience'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className=''>
      <Navbar />
      <Header />
      <Testimonials />
      <Experience />
      <Footer />
    </div>
  )
}

export default Home
