import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.scss';

import header from '../resources/header.jpg';
import Scrollarrow from '../components/scrollarrow/Scrollarrow';
import Slider from '../components/slider/Slider';

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  let home = useRef(null);
  let text = useRef(null);
  let btn1 = useRef(null);
  let btn2 = useRef(null);
  useEffect(() => {
    // gsap.from('.services', {
    //   opacity: 0,
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: services,
    //     start: 'top 90%',
    //     // scrub: true,
    //     // markers: true,
    //   },
    // });
    tl.from(home, { scale: 3, ease: 'expo.inOut', duration: 2.5 })
      .to(
        '.lt',
        { y: 0, x: 0, scale: 1, ease: 'expo.inOut', duration: 2.5 },
        0.2
      )
      .from(text, { y: 50, opacity: 0, duration: 1 }, 1.5)
      .from(btn1, { opacity: 0, duration: 1.5 }, 2)
      .from(btn2, { opacity: 0, duration: 1.5, delay: 0.3 }, 2);
    // eslint-disable-next-line
  }, []);
  return (
    <div
      ref={(element) => (home = element)}
      className='home'
      style={{
        background: `url(${header}) no-repeat center center/cover`,
      }}
    >
      <div className='header container  cpadding'>
        <h1 className='bigtitle font2'>
          <span className='dark lt'>E</span>
          <span className='lt'>D</span>
          <span className='lt'>A</span>
          <span className='lt'>R</span>
        </h1>
        <p ref={(el) => (text = el)} className='bigtext'>
          Contractiong {'&'} General Maintenance Company.
        </p>
        <div className='links'>
          <Link ref={(el) => (btn1 = el)} to='/about' className='btn'>
            Learn More
          </Link>
          <Link ref={(el) => (btn2 = el)} to='/contact' className='btn'>
            Contact Us
          </Link>
        </div>
        <Scrollarrow className='arrow' />
      </div>

      <div className='services'>
        <div className='container cpadding'>
          <h1 className='sectitle'>
            Our <span>Services</span>
          </h1>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Home;
