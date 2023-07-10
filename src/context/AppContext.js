import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext();

export const useAuth = () => { return useContext(AppContext); }

export const AppProvider = ({ childern }) => {
  const [authUser, setAuthUser] = useState(null)
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [sendTokenVar, setSendTokenVar] = useState(()=>{console.log("i am free")})

  // useEffect(() => {
  //   const subscribe = AuthService.subscribe((user) => {
  //     if(user){
  //       setAuthUser(user)
  //       setIsLoggedin(true)
  //     }
  //     else{
  //       setAuthUser(null)
  //       setIsLoggedin(false)
  //     }
  //   })
  //   return subscribe
  // }, [])

  const value = {
    authUser, setAuthUser,
    isLoggedin, setIsLoggedin,
    isTimerOn, setIsTimerOn,
    sendTokenVar, setSendTokenVar

  }

  return (
    <AppContext.Provider value={value}>
      {childern}
    </AppContext.Provider>
  )
}

