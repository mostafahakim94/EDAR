import React from 'react';
import './Intro.scss';

import l1 from '../../resources/l1.png';
import l2 from '../../resources/l2.png';
import l3 from '../../resources/l3.png';

function Intro() {
  return (
    <div className='intro'>
      <img src={l1} alt='' />
      <img src={l2} alt='' />
      <img src={l3} alt='' />
    </div>
  );
}

export default Intro;
