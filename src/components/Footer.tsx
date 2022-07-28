import '../styles/Footer.css'

import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">

      <ul>
          <li className='nav-item'>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
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
              offset={-60}
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
            >
              Demo
            </Link>
          </li>
        </ul>
        
        <div className="bottom">
          <span className="line"></span>
          <p>2021 Execute Inc. All rights reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer