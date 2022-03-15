import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import mandir from "../assets/mandir.png"
import ram from "../assets/ram.png"
function HeroSection() {
  return (
    <div className='hero-container'>
      <img class="temple" src={mandir} />
      <img src={ram} width="400px" style={{zIndex:"inherit"}} />
      <h1>Jai Shree Ram
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
