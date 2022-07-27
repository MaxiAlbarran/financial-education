import '../styles/About.css'

import john from '../images/john-doe.png'

const About = () => {
  return (
    <div className="about" id="about">

      <div className="container">
        <img src={john} alt="Profile picture" />

        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam ipsa minus voluptate ratione illum debitis, alias, asperiores libero, sunt commodi nulla facere hic aliquam?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa modi excepturi, odit maxime laborum!</p>

          <button className="button">Explore more</button>

        </div>
      </div>
      
    </div>
  )
}

export default About