import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Navbar.scss';

import Logo from '../logo/Logo';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <h1>
          <Link className='logo' to='/'>
            <Logo />
          </Link>
        </h1>

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
