import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

import c1 from '../../resources/c1.jpg';
import c2 from '../../resources/c2.jpg';
import c3 from '../../resources/c3.jpg';
import c4 from '../../resources/c5.jpg';
import c5 from '../../resources/c6.jpg';
import c6 from '../../resources/c7.jpg';

import team from '../../resources/team.jpg';
import Infoboxs from '../../components/infoboxs/Infoboxs';
import Scrollarrow from '../../components/scrollarrow/Scrollarrow';
function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from('.title1', {
      opacity: 0,
      y: 50,
      ease: 'back.out(1.7)',
      duration: 1,
    })
      .from('.tx1', { opacity: 0, y: 50, duration: 0.7 }, 0.2)
      .from('.tx2', { opacity: 0, y: 50, duration: 0.7 }, 0.3)
      .from('.sec2', {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: '.sec2',
          start: '-50% 90%',
          end: '50% 90%',
          scrub: 1,
        },
      })
      .from(
        '.tx3',
        {
          opacity: 0,
          y: 200,
          duration: 1,
          scrollTrigger: {
            trigger: '.sec2',
            start: 'top 90%',
            end: 'center 90%',
            scrub: 1,
            // markers: true,
          },
        },
        1
      )
      .from(
        '.tx4',
        {
          opacity: 0,
          y: 200,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: '.sec2',
            start: 'top 90%',
            end: '+100% 90%',
            scrub: 1,
            // markers: true,
          },
        },
        1
      )
      .from('.sec3', {
        opacity: 0,
        x: 400,
        duration: 1,
        scrollTrigger: {
          trigger: '.sec3',
          start: 'top 90%',
          end: '50% center',
          toggleActions: 'restart none none none',
          scrub: 0.8,
          // markers: true,
        },
      });
    const panels = gsap.utils.toArray('.panel');
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec3',
        pin: true,
        start: 'top top',
        scrub: 2,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.1, max: 0.1 },
        },
        // end: () => '+=' + ('.sec3'.offsetWidth - '.sec3'.innerWidth),
      },
    });
  }, []);
  return (
    <div className='about'>
      <div className='section sec1'>
        <div className='container cpadding'>
          <h1 className='sectitle title1'>
            <span>About</span> EDAR
          </h1>
          <ul>
            <li className='ntext tx1'>
              We are a construction company based in Al Ain, with projects
              throughout all of the United Arab Emirates.
            </li>
            <li className='ntext tx2'>
              We are proud to say that since EDAR establishment in 2018, we have
              successfully Completed various construction projects and developed
              a reputation as a trustworthy, Competent contractor.
            </li>
          </ul>
        </div>
      </div>

      <div className='section sec2'>
        <div className='container'>
          <div
            className='photo'
            style={{
              background: `url(${team}) no-repeat center center /cover`,
            }}
          ></div>
          <h1 className='sectitle title2'>
            Our <span>Values</span>
          </h1>
          <ul>
            <li className='ntext tx3'>
              We are committed to deliver value enhanced construction services
              with the aim of enhancing client, consultants, employees and
              stakeholders’ satisfaction and adopting safe working practices.
            </li>
            <li className='ntext tx4'>
              Collaborative teamwork is one of the best factors of EDAR success.
            </li>
          </ul>
        </div>
      </div>

      <div className='section sec3'>
        <div className='panel'>
          <h2 className='sectitle'>
            Our <span>Certificates</span>
            <Scrollarrow />
          </h2>
        </div>
        <div className='panel'>
          <img src={c1} alt='' />
        </div>
        <div className='panel'>
          <img src={c2} alt='' />
        </div>
        <div className='panel'>
          <img src={c3} alt='' />
        </div>
        <div className='panel'>
          <img src={c4} alt='' />
        </div>
        <div className='panel'>
          <img src={c5} alt='' />
        </div>
        <div className='panel'>
          <img src={c6} alt='' />
        </div>
      </div>

      <div className='sec4'>
        <Infoboxs />
      </div>
    </div>
  );
}

export default About;
