import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import swastik from "../assets/swastik.webp"
function Navbar() {
  const [click, setClick] = useState(false);

  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);






  return (
    <>
    <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram,Ram mandir, Ram bhagwan NFT</noscript>
      <nav className='navbar' >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <h2 className="hero " data-text="JAI SHRI RAM"><span>JAI SHRI RAM</span></h2>
            <img className='swastik-img' src={swastik} width="25px" height = "25px" alt="swastik" style={{paddingLeft:"2px"}}/>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/MINT'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MINT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/FAQ'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>

  
          </ul>
          
        </div>
      </nav>
    </>
  );
} 

export default Navbar;
