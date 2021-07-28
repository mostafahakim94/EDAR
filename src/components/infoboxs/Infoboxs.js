import React from 'react';
import './Infoboxs.scss';

function Infoboxs() {
  return (
    <div className='infoboxs'>
      <div className='box b1'>
        <i className='fas fa-check-circle fa-4x'></i>
        <h2 className='sectitle'>Vision</h2>
        <p>
          To be a leader in the construction industry and stay responsible
          towards the environment and the world.
        </p>
      </div>
      <div className='box b2'>
        <i className='fas fa-chart-line fa-6x'></i>
        <h2 className='sectitle'>Sustainability</h2>
        <p>
          By promoting safety and environment awareness in daily activities and
          assigning responsibility for all aspects of the company QHSE policy,
          we successfully manage to ensure overall safe performance and high
          quality outcomes.
        </p>
      </div>
      <div className='box b3'>
        <i className='fab fa-phoenix-framework fa-4x'></i>
        <h2 className='sectitle'>Mission</h2>
        <p>
          To build stronger, better and safer structures in a process that
          increases efficiency within the limits of time and cost.
        </p>
      </div>
    </div>
  );
}

export default Infoboxs;
