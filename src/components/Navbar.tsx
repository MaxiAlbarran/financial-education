import React, { useState } from 'react';

import logo from '../images/logo.png';

import { FaBars, FaTimes } from 'react-icons/fa';

import '../styles/Navbar.css';

import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);

  const [color, setColor] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='Logo' />
        </a>

        <div className='hamburguer' onClick={() => setClick(!click)}>
          {click ? (
            <FaTimes size={30} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#fff' }} />
          )}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
              onClick={() => setClick(false)}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              duration={500}
              offset={20}
              onClick={() => setClick(false)}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='testimonials'
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setClick(false)}
            >
              Testimonials
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='demo'
              spy={true}
              smooth={true}
              duration={500}
              offset={-140}
              onClick={() => setClick(false)}
            >
              Demo
            </Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
