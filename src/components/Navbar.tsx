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
            <a href="#hero" onClick={()=>setClick(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={()=>setClick(false)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={()=>setClick(false)}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={()=>setClick(false)}>Demo</a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar