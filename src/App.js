import logo from './logo.svg';
import './App.css';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' 
          element= {
            <>
              <Home/>
            </>
          } 
        />
        <Route exact path='/signin' 
          element= {
            <>
              <Login/>
            </>
          } 
        />
        <Route exact path='/signup' 
          element= {
            <>
              <Signup />
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
