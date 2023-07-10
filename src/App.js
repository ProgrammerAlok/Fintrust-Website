import logo from './logo.svg';
import './App.css';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';

import { AppProvider } from './context/AppContext';

import * as fcl from '@onflow/fcl'
import Borrow from './screens/borrow/Borrow';
import Lend from './screens/lend/Lend';

fcl.config()
.put("app.detail.title", "Finterest")
.put("accessNode.api", "https://rest-testnet.onflow.org")
.put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")

function App() {


  return (
    <AppProvider childern={<>   
    
      <BrowserRouter>
        <Routes>
          <Route exact path='/' 
            element= {
              <>
                <Home/>
              </>
            } 
          />
          <Route exact path='/borrow' 
            element= {
              <>
                <Borrow  />
              </>
            } 
          />
          <Route exact path='/lend' 
            element= {
              <>
                <Lend  />
              </>
            } 
          />
        </Routes>
      </BrowserRouter>
      </>} />
    // </AppProvider>
  );
}

export default App;
