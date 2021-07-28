import React, { useEffect, useState } from 'react';
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
  const [contactform, setContactform] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [alert, setalert] = useState(false);

  const { name, email, phone, subject, message } = contactform;
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name === '' &&
      email === '' &&
      phone === '' &&
      subject === '' &&
      message === ''
    ) {
      setalert(true);
      setTimeout(() => setalert(false), 2000);
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ contact: 'contact', contactform }),
      })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));

      e.preventDefault();
    }
  };
  const onChange = (e) => {
    setContactform({ ...contactform, [e.target.name]: e.target.value });
  };

  return (
    <div className='form'>
      <form
        name='contact'
        action='POST'
        data-netlify='true'
        onSubmit={onSubmit}
      >
        <h2 className='sectitle'>
          {/* <i className='far fa-address-card'></i> */}
          Contact <span>Form</span>
        </h2>
        {alert && <p className='alertbox'>Please fill down all fields below</p>}{' '}
        <input
          type='text'
          className='cleanin'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='Name'
        />
        <input
          type='email'
          className='cleanin'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Email'
        />
        <input
          type='number'
          className='cleanin'
          name='phone'
          value={phone}
          onChange={onChange}
          placeholder='Phone'
        />
        <input
          type='text'
          className='cleanin'
          name='subject'
          value={subject}
          onChange={onChange}
          placeholder='Subject'
        />
        <textarea
          name='message'
          className='cleanin'
          value={message}
          onChange={onChange}
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
