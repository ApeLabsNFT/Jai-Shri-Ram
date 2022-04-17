import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import MINT from './components/pages/MINT.js';
import Home from './components/pages/home';
import Faq from './components/pages/faq';
import Loader from './components/loader';


function App() {
  return (
    <>
    <Router> 
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<Loader/>} />
          <Route exact path='/MINT' element={<MINT/>} />
          <Route path='/FAQ' element={<Faq/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
