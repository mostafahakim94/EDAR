import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Contactform.scss';

function Contactform() {
  let tl = gsap.timeline();
  useEffect(() => {
    tl.from('.sectitle', { opacity: 0, y: 50, duration: 1 }, 0.5);
    tl.from('.cleanin', { opacity: 0, y: 50, duration: 1 }, 0.5);
    tl.from('.btn', { opacity: 0, duration: 1 }, 1);
    // eslint-disable-next-line
  }, []);
  // const [alert, setalert] = useState(false);

  return (
    <div className='form'>
      <h2 className='sectitle'>
        Contact <span>Form</span>
      </h2>
      <form
        name='contact'
        method='POST'
        action='/contact-thanks'
        data-netlify-honeypot='bot-field'
        data-netlify='true'
      >
        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />

        <input type='text' className='cleanin' name='name' placeholder='Name' />
        <input
          type='email'
          className='cleanin'
          name='email'
          placeholder='Email'
        />
        <input
          type='number'
          className='cleanin'
          name='phone'
          placeholder='Phone'
        />
        <input
          type='text'
          className='cleanin'
          name='subject'
          placeholder='Subject'
        />
        <textarea
          name='message'
          className='cleanin'
          placeholder='Message'
        ></textarea>
        <div data-netlify-recapcha='true'></div>
        <button type='submit' className='btn'>
          <i className='fas fa-paper-plane'></i> Send
        </button>
      </form>
    </div>
  );
}

export default Contactform;
