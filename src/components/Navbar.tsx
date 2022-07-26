import React, { useState } from 'react'

import logo from '../images/logo.png'

import {FaBars, FaTimes} from 'react-icons/fa';

import '../styles/Navbar.css'

const Navbar:React.FC = () => {

  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="header">
      <div className="navbar">

        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className="hamburguer" onClick={()=>setClick(!click)}>
          {click ? 
            <FaTimes size={30} style={{color: '#fff'}}/> 
          : 
            <FaBars size={30} style={{color: '#fff'}} /> }          
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
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