import React from 'react'
import logo from '../images/logo.png'

import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar:React.FC = () => {
  return (
    <div className="header">
      <div className="navbar">

        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className="hamburguer">
          <FaBars />
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar