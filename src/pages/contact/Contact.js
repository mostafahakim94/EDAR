import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Contact.scss';

import Contactform from '../../components/contactform/Contactform';
function Contact() {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from('.contact', {
      opacity: 0.7,
      rotateX: 30,
      ease: 'sine.out',
      duration: 0.8,
    })
      .from(
        '.head',
        { opacity: 0, y: -200, duration: 1, ease: 'expo.inOut' },
        0.2
      )
      .from('.contactdetails', { opacity: 0, y: 50, duration: 1 }, 0.5);
  }, []);
  const onSubmit = (e) => {
    console.log('submit');
  };
  return (
    <div className='contact'>
      <h2 className='head'>Start your project with us now</h2>
      <div className='container'>
        <div className='contactdetails'>
          <h2 className='bigtext'>
            <i className='fas fa-map-marker-alt'></i> UAE.Abu Dhabi.Al-Ain
          </h2>
          <h2 className='bigtext'>
            <i className='fas fa-phone-alt'></i> 00971545252959
          </h2>
          <h2 className='bigtext'>
            <i className='fab fa-whatsapp'></i> 00971555725504
          </h2>
          <h2 className='bigtext'>
            <i className='fas fa-envelope'></i> Edaruae20@gmail.com
          </h2>
        </div>

        <div className='contactform'>
          <Contactform onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
