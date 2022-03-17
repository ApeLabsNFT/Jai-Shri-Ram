import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import swastik from "../assets/swastik.png"
import PopUp from './pages/popup';
import { SolletWalletAdapter } from '@solana/wallet-adapter-wallets';
function Navbar() {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
    {show && <PopUp/>}
      <nav className='navbar' >
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Ram Mandir
            <img src={swastik} width="25px" height = "25px" style={{paddingLeft:"2px"}}/>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <button
                className='nav-links-mobile'
                onClick={()=>{
                  closeMobileMenu()
                setShow(true)
                }
                }
              >
                Connect Wallet
              </button>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={()=>{setShow(true);closeMobileMenu(false)}}>Connect Wallet</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
