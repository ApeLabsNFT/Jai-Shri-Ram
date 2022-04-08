import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' style={{ marginTop: '50px'}}>
      <img style={{ height: '100vh', width: '100vw' }} src={require('../assets/mountfooter.jpg')} alt='hello'/>
     </div>
  );
}

export default Footer;
