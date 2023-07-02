import { Link } from "react-router-dom";
import "./Aboutcontent.css";
import React from 'react'
import img1 from "../Assests/pro5.jpeg";
import img2 from "../Assests/pro6.webp";


const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I’m Maleesha Kawshan and I’m currently undertaking the bachelor’s degree in Software Engineering 
                at Informatics Institute of Technology affiliated with University of Westminster(UK)</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>   
        </div>
        <div className="right">
            <div className="container">
                <div className="imgtop">
                    <img src={img1} className="image" alt="trye"/> 
                </div>
                <div className="imgbottom">
                    <img src={img2} className="image" alt="trye"/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent