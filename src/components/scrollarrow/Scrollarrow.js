import React, { useEffect, useRef } from 'react';
import './Scrollarrow.scss';

import { gsap } from 'gsap';

function Scrollarrow() {
  let arrow = useRef(null);
  useEffect(() => {
    gsap.to(arrow, {
      y: 15,
      duration: 1,
      repeat: -1,
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className='scrollarrow'>
      <h3>Scroll Down</h3>
      <i ref={(el) => (arrow = el)} className='fas fa-angle-double-down'></i>
    </div>
  );
}

export default Scrollarrow;
