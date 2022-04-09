import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import swastik from "../assets/swastik.png"
import PopUp from './popup';
function Navbar() {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showDropDown, setDropDown] = useState(false);

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
          <h2 class="hero glitch layers" data-text="JAI SHREE RAM"><span>JAI SHREE RAM</span></h2>
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
                  closeMobileMenu()
                setShow(true)
                }
                }
              >
                CONNECT WALLET
              </button>
            </li>
          </ul>
          <div>
            <div>
              {button && <Button buttonStyle='btn--outline' onClick={()=>{setShow(true);closeMobileMenu(false); setDropDown(true)}}>Connect Wallet</Button>}
            </div>
            {showDropDown && <div style={{ padding: '10px' ,minWidth: '60px', maxWidth: '200px', borderRadius: '20px',backgroundColor: 'black' ,color: 'white', position: 'absolute'}}>
              <div style={{ textAlign: 'end', marginBottom: '20px', cursor: 'pointer'}} onClick={() => setDropDown(false)}>X</div>
              <span>Select Wallet</span>
            </div>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
