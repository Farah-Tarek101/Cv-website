import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => (
  <>
    <Navbar />
    <div className="app-content">
      <section className="contact-section" style={{maxWidth: 600, margin: "40px auto", background: "#fff", color: "#2d3a4b", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32}}>
        <h2 className="section-title" style={{color: "#1a73e8"}}>Contact Me</h2>
        <ul style={{listStyle: "none", padding: 0, fontSize: "1.1rem"}}>
          <li style={{marginBottom: 18}}>
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#1a73e8", marginRight: 12}} />
            <a href="https://www.linkedin.com/in/farah-tarek-ali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li style={{marginBottom: 18}}>
            <FontAwesomeIcon icon={faGithub} style={{color: "#222", marginRight: 12}} />
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li style={{marginBottom: 18}}>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#1a73e8", marginRight: 12}} />
            <a href="mailto:farahtarek707@gmail.com">farahtarek707@gmail.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} style={{color: "#1a73e8", marginRight: 12}} />
            <span>+201012241088</span>
          </li>
        </ul>
      </section>
    </div>
    <Footer />
  </>
);

export default Contact; 