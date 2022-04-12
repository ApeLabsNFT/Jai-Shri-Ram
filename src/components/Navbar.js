import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Wallet } from './walletapdater';
import swastik from "../assets/swastik.png"
function Navbar() {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showDropDown, setDropDown] = useState(false);
  const [mobileDropDown, setMobileDropDown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar' >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <h2 class="hero glitch layers" data-text="JAI SHRI RAM"><span>JAI SHRI RAM</span></h2>
            <img className='swastik-img' src={swastik} width="25px" height = "25px" style={{paddingLeft:"2px"}}/>
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
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MINT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>

            <li>
              <button
                className='nav-links-mobile'
                onClick={()=>{
                  // closeMobileMenu()
                // setShow(true)
                setMobileDropDown(true)
                }
                }
              >
                CONNECT WALLET
              </button>
              {mobileDropDown &&<div style={{ padding: '10px' ,minWidth: '60px', maxWidth: '200px', borderRadius: '20px',backgroundColor: 'black' ,color: 'white', position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -20%)', zIndex: 999}}>
              <div style={{ textAlign: 'end', marginBottom: '20px', cursor: 'pointer'}} onClick={() => setMobileDropDown(false)}>X</div>
              <Wallet/>
            </div>}
            </li>
          </ul>
          <div>
            <div>
              {button && <Button buttonStyle='btn--outline' onClick={()=>{setShow(true);closeMobileMenu(false); setDropDown(true)}}>Connect Wallet</Button>}
            </div>
            {showDropDown && <div style={{ padding: '5px' ,minWidth: '60px', maxWidth: '200px', borderRadius: '20px',backgroundColor: 'rgba(0,0,0,0.7)' ,color: 'white', position: 'absolute'}}>
              <div style={{ textAlign: 'end', marginBottom: '20px', cursor: 'pointer'}} onClick={() => setDropDown(false)}>X</div>
              <Wallet/>
            </div>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
