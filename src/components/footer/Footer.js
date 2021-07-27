import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Footer.scss';
function Footer() {
  useEffect(() => {
    gsap.from('.footer', {
      y: 200,
      opacity: 0,
      duration: 2,
      ease: 'back.out(2)',
      delay: 1,
    });
  });
  return (
    <div className='footer'>
      <div className='container'>
        <p>EDAR &copy; 2021, All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
