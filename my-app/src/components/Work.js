import "./Work.css";
import pro1 from "../Assests/pro1.png";
import pro2 from "../Assests/pro2.png";
import pro3 from "../Assests/pro3.png";
import pro4 from "../Assests/pro4.png";
import pro5 from "../Assests/pro5.png";
import pro7 from "../Assests/pro7.png";
import pro9 from "../Assests/pro9.png";
import pro8 from "../Assests/pro8.png";
import React from 'react';
import {NavLink} from "react-router-dom";

const Work = () => {
  return (
    <div className="Wocontainer">
        <h1 className="heading">My Projects.</h1>
        <div className="Procontainer">
        <div className="projectcard">
                <img src={pro4} alt="img1"/>
                <h2 className="title">Westminister-Skin-consultation-manager</h2>
                <div className="details">
                    <p>This was a coursework which I did in L5, at the IIT. It contains a project that can be implemented
                         a console system and Graphical User Interface (GUI) to manage a Skin Consultation Centre.</p>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/Westminister-Skin-consultation-manager" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/Westminister-Skin-consultation-manager" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro2} alt="img1"/>
                <h2 className="title">easyMeal</h2>
                <div className="details">
                    <p>This was a Native Android Mobile Application using Kotlin and SQL Room Library, for helping users 
                        with meal preparation which was developed as a easymeal in IIT-L5-SEM2.<br></br> <br></br> .Kotlin .SQL Room Library</p>
                    <br></br>
                    <br></br>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/easyMeal" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/easyMeal" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro3} alt="img1"/>
                <h2 className="title">whatchflix</h2>
                <div className="details">
                    <p>This is a movie recommended web app using detect user's facial expression and user's social meadia 
                        behaviour the project belongs to CoiCON , year 2 university project of 
                        Informatics Institute of Technology<br></br> <br></br> .HTML .CSS .JS<br></br>.MySQL<br></br>.Python .Tensorflow .Flask</p>
                        <br></br>
                        <br></br>
                        <br></br>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/whatchflix" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/whatchflix" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro5} alt="img1"/>
                <h2 className="title">Bingo</h2>
                <div className="details">
                    <p>This was a Dice game Native Android Mobile Application which was developed as a Bingo in IIT-L5-SEM1.</p>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/Bingo" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/Bingo" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro1} alt="img1"/>
                <h2 className="title">Animated-WeatherApp</h2>
                <div className="details">
                    <p>Build a weather app with scroll and text animations from a fully custom design using SwiftUI</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/Animated-WeatherApp" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/Animated-WeatherApp" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro7} alt="img1"/>
                <h2 className="title">Fashion Castle</h2>
                <div className="details">
                    <p>A simple iOS Application for E-Commerce Shop                                                                                      </p>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/FashionCastleApp" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/FashionCastleApp" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro8} alt="img1"/>
                <h2 className="title">Serendib Tours</h2>
                <div className="details">
                    <p>A website for travel agency using HTML, CSS, JS                                                                                      </p>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/serendib-tours" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/serendib-tours" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="projectcard">
                <img src={pro9} alt="img1"/>
                <h2 className="title">QuickCurrency</h2>
                <div className="details">
                    <p>A simple iOS Application for real time currency convert.                                                                                      </p>
                    <div className="pbtn">
                        <NavLink to="https://github.com/kawshan-M/QuickCurrency" className="btn">View</NavLink>
                        <NavLink to="https://github.com/kawshan-M/QuickCurrency" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work