import "./Hero.css";
import React from 'react';
import FristImg from "../Assests/Intro.jpg";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="introimg" src={FristImg} alt="Image1"/>
        </div>
        <div className="content">
            <h1>Maleesha Kawshan Mendis.</h1>
            <p>Hi,I'm a Fullstack Developer.</p>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero