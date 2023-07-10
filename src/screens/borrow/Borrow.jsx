import React, { useEffect, useState } from 'react'
import './borrow.css'
import Navbar from '../../components/navbar/Navbar'
import { useAuth } from '../../context/AppContext'

const Borrow = () => {

  const {
    authUser, setAuthUser,
    isLoggedin, setIsLoggedin } = useAuth()

  const [user, setUser] = useState({
    amount: '', wallet_address: '', reason: ''
  })

  const handleSave =  ()=>{
    user.wallet_address =  JSON.parse(localStorage.getItem('user-wa') || "");
    const oldData = JSON.parse(localStorage.getItem('fintech-app') || '[]')
    localStorage.setItem('fintech-app', JSON.stringify([...oldData, user]))
    setUser({
      amount: '', wallet_address: '', reason: ''
    })
  }

  return (
    <div className='borrow_container'>
        <Navbar borrowpage={true} />
        <div className="borrow_container_box">
            <div className='borrow_container_heading' ><h5>Application for loan</h5></div>
            <div className='borrow_box_inpbtn'>
                <div>
                  <input id='amount_area' type="text" placeholder='Enter the loan amount you want' 
                    onChange={e=>setUser({...user, amount: e.target.value})}
                    value= {user.amount}
                  />
                </div>
                <div>
                  <textarea id='reason_area' type="textarea" placeholder='Explain you need for loan' 
                    onChange={e=>setUser({...user, reason: e.target.value })}
                    value={user.reason}
                  /> 
                </div>
                <button className='btn' onClick={handleSave} >SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Borrow
