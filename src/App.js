import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Root';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route exact path='/home' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
