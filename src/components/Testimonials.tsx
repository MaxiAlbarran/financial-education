import React from 'react'

import '../styles/Testimonials.css'

import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>

        <div className="content">

          <div className="card">
            <img src={user1} alt="User 1" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, necessitatibus culpa possimus debitis praesentium exercitationem.</p>
            <p><span>Maximiliano Albarran</span></p>
            <p>Director of "Financial times"</p>
          </div>

          <div className="card">
            <img src={user2} alt="User 2" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, necessitatibus culpa possimus debitis praesentium exercitationem.</p>
            <p><span>Carol Harper</span></p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>

          <div className="card">
            <img src={user3} alt="User 3" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, necessitatibus culpa possimus debitis praesentium exercitationem.</p>
            <p><span>Javier Snow</span></p>
            <p>Managing director of BPW Global</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Testimonials