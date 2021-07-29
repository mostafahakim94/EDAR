import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slider.scss';

function Slider() {
  const list = [
    {
      icon: 'fas fa-building fa-5x',
      text: 'Various types of contracting for building projects ',
    },
    {
      icon: 'fas fa-file-signature fa-5x',
      text: 'Contracting of transmission networks and distribution of water',
    },
    {
      icon: 'fas fa-road fa-5x',
      text: 'Contracting for main roads, streets and related projects ',
    },
    {
      icon: 'fas fa-industry fa-5x',
      text: 'Onshore and offshore oil and gas fields andfacilities services',
    },
    {
      icon: 'fas fa-tools fa-5x',
      text: 'Maintenance of all types of buildings',
    },
  ];
  const [pageno, setPageno] = useState(1);
  const nexpage = (e) => {
    pageno === list.length ? setPageno(1) : setPageno(pageno + 1);
  };
  const prevpage = (e) => {
    pageno === 1 ? setPageno(list.length) : setPageno(pageno - 1);
  };
  return (
    <div className='slider'>
      {list.length >= 1 && (
        <button type='button' className='btn slide' onClick={prevpage}>
          <i className='fas fa-chevron-circle-left'></i>
        </button>
      )}
      {list.map(
        (item, indx) =>
          pageno === indx + 1 && (
            <div key={indx} className='content'>
              <Link className='btn startnow' to='/contact'>
                Start Now
              </Link>
              <i className={item.icon}></i>
              <p className='bigtext'>{item.text}</p>
            </div>
          )
      )}
      {list.length >= 1 && (
        <button type='button' className='btn slide' onClick={nexpage}>
          <i className='fas fa-chevron-circle-right'></i>
        </button>
      )}
    </div>
  );
}

export default Slider;
