import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faUniversity, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
  <>
    <Navbar />
    <div className="app-content">
      <section className="hero-section" style={{background: "linear-gradient(120deg, #1a73e8 0%, #000016 100%)", color: "#fff", padding: "60px 0 40px 0", textAlign: "center"}}>
        <img src="/cs.jpg" alt="Farah Tarek" style={{width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "4px solid #fff", marginBottom: 24}} />
        <h1 style={{fontSize: "2.5rem", margin: "16px 0 8px 0"}}>Farah Tarek Ali El-Askalany</h1>
        <h2 style={{fontWeight: 400, fontSize: "1.3rem", margin: 0}}>Computer Science Student & Full-Stack Developer</h2>
        <p style={{margin: "18px auto 0 auto", maxWidth: 500, fontSize: "1.1rem"}}>
          Passionate about building modern web and mobile applications. Experienced in MERN stack, Flutter, and AI-powered solutions. Always eager to learn and take on new challenges.
        </p>
      </section>
      <section className="about-section" style={{maxWidth: 700, margin: "40px auto", background: "#fff", color: "#2d3a4b", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", padding: 32}}>
        <h2 className="section-title" style={{color: "#1a73e8"}}>About Me</h2>
        <p style={{fontSize: "1.1rem"}}>
          I am a Computer Science student at October University for Modern Sciences and Arts (MSA), expected to graduate in 2025. I have a strong background in web and mobile development, with hands-on experience in the MERN stack, Flutter, and AI projects. I enjoy solving problems, collaborating with teams, and continuously improving my skills.
        </p>
        <p style={{fontSize: "1.1rem"}}>
          My projects range from full-stack booking platforms to AI-powered study tools and clinical decision support systems. I am fluent in Arabic, English, and French, and have experience working in both technical and recruitment roles.
        </p>
      </section>
      <section className="cards" id="Experiences">
        <h2 className="section-title">Experiences</h2>
        <div className="cards-content">
          <div className="card experience-card">
            <div className="icons">
              <Link to="/languages"><FontAwesomeIcon icon={faLanguage} size="2x" /></Link>
            </div>
            <div className="info">
              <h3>Languages</h3>
              <p>The languages I can speak, write, and understand fluently</p>
            </div>
          </div>
          <div className="card experience-card">
            <div className="icons">
              <Link to="/university"><FontAwesomeIcon icon={faUniversity} size="2x" /></Link>
            </div>
            <div className="info">
              <h3>University</h3>
              <p>Graduated from Computer Science, Software Engineering section</p>
            </div>
          </div>
          <div className="card experience-card">
            <div className="icons">
              <Link to="/programming"><FontAwesomeIcon icon={faLaptopCode} size="2x" /></Link>
            </div>
            <div className="info">
              <h3>Programming Abilities</h3>
              <p>The programming languages I have learned, my proficiency level in each one, and the programming topics I have studied</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
            <img src="/webdev.jfif" alt="webdev" />
          </div>
          <div className="project-info">
            <p className="project-category">web development</p>
            <strong className="project-title">
              <span>Dev Books</span>
              <a href="#" className="more-details">More details</a>
            </strong>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="/game dev.jfif" alt="game dev" />
          </div>
          <div className="project-info">
            <p className="project-category">simple games</p>
            <strong className="project-title">
              <span>Dev Books</span>
              <a href="#" className="more-details">More details</a>
            </strong>
          </div>
        </div>
      </div>
    </section>
    <section className="contact" id="contact">
      <h2 className="title">Let's work together</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="info">
            <h3>Phone</h3>
            <p>+201012241088</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="info">
            <h3>Email</h3>
            <p>farahtarek707@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
    <section className="certificates" id="certificates">
      <h2 className="title">Certificates</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <a href="https://www.credly.com/badges/533fe056-8ac5-48d9-ad68-196e059cf05f?source=linked_in_profile"> <i className="fa-solid fa-certificate"></i></a>
          </div>
          <div className="info">
            <h3>Microsoft Certified: Azure AI Fundamentals</h3>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <a href="https://www.credly.com/badges/acfb8271-cdf8-4a00-849a-70a7f4325240/linked_in_profile"> <i className="fa-solid fa-certificate"></i></a>
          </div>
          <div className="info">
            <h3>Microsoft Certified: Azure Data Fundamentals</h3>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Home; 