import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Root from './components/pages/Root';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Services from './components/pages/Services';
import Home from './components/pages/home';
import Faq from './components/pages/faq';

function App() {
  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Root />} />
          <Route exact path='/services' element={<Services/>} />
          <Route path='/FAQ' element={<Faq/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
