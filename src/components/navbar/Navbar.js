import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  logo: 'States-Migrates',
};

Navbar.propTypes = {
  logo: propTypes.string.isRequired,
};
export default Navbar;
