import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">

        <ul>
          <li className="nav-item">
            <a href="#hero">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Demo</a>
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