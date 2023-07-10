import React from 'react'
import './testimonials.css'

function Testimonials() {
  return (
    <section id='testimonials' className='home_testimonials_container' >
      <div className='home_testimonials_heading'>
        <h2>Small loans, peer-to-peer lending, and secure digital transactions </h2>
        <h2>to foster financial inclusion.</h2>
      </div>
      <div className="home_testimonials_cards">
        <div className="home_testimonials_card"> Reduced barriers to entry for borrowers, enabling them to obtain small loans quickly and efficiently</div>
        <div className="home_testimonials_card"> Opportunities for individuals to act as lenders and earn returns on their investments </div>
        <div className="home_testimonials_card"> Improved transparency and security in financial transactions, reducing the risks of fraud and corruption</div>
        <div className="home_testimonials_card">  scoring mechanism that assesses the credit worthiness of borrowers based on  relevant factors</div>
      </div>
    </section>
  )
}

export default Testimonials
