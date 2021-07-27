import React from 'react';
import './Logo.scss';

import layer1 from '../../resources/Layer1.png';
import layer2 from '../../resources/Layer2.png';
function Logo() {
  return (
    <div className='logo'>
      <img className='rt' src={layer1} alt='p1' />
      <img src={layer2} alt='p2' />
    </div>
  );
}

export default Logo;
