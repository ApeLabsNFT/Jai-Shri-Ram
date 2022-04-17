import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import Services from './components/pages/Services';
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
          <Route exact path='/services' element={<Services/>} />
          <Route path='/FAQ' element={<Faq/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
