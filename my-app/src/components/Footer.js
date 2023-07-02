import "./Footer.css";
import React from 'react';
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>No.306, Hegoda, Boossa,</p>
                        <p>Galle,</p>
                        <p>Sri Lanka.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    +94 787655057</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    kawshanmaleesha0@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer