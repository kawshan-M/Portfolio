import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="Projects." text="Some of my most recent works."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects