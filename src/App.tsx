import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Demo />
    </div>
  )
}

export default App
