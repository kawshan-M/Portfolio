import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Aboutcontent from '../components/Aboutcontent'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="About." text="Some of my most recent works."/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About