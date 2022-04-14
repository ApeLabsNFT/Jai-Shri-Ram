import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import mandir from "../assets/ramji.png"
import jaishreeram from "../assets/jaishreeram.png"
function HeroSection() {
  return (
    <div className='hero-container'>
      <img class="temple" src={mandir} alt="Ram Mandir" />
      
      <h1>
        <img className="main-header-text" src={jaishreeram} alt="Jai Shri Ram"/>
      </h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
