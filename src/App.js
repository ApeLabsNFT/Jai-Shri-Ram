import React from 'react';
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
import Loading from './components/loading';
import Contact from './components/contactus';

function App() {
  return (
    <>
    <Router> 
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<Loading/>} />
        <Route exact path='/Contact' element={<Contact/>} />
          <Route exact path='/MINT' element={<MINT/>} />
          <Route path='/FAQ' element={<Faq/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
