import React from "react";
import "./programing.css";

const Programming = () => (
  <>
    <header>
      <a href="#" className="logo">Farah</a>
      <nav className="navigation">
        <a href="/">Experiences</a>
        <a href="/">projects</a>
        <a href="/">contacts</a>
        <a href="/">certificates</a>
      </nav>
    </header>
    <section className="cards" id="Experiences">
      <h2 className="title">Experiences</h2>
      <div className="content">
        <div className="card">
          <div className="icons">
            <a href="#"><i className="fas fa-laptop-code"></i></a>
          </div>
          <div className="info">
            <h3>Programming Abilities</h3>
            <p>The programming languages I have learned, my proficiency level in each one, and the programming topics I have studied</p>
          </div>
        </div>
        <div className="card2">
          <div className="icons">
            <a href="#"><i className="fas fa-laptop-code"></i></a>
          </div>
          <div className="info">
            <em>
              <h3>Skills in Microsoft services</h3>
              <p>Basic Microsoft knowledge: excellent skills using Word as well as Excel and PowerPoint presentation (PPT)</p>
            </em>
          </div>
        </div>
        <div className="card2">
          <div className="icons">
            <a href="#"><i className="fas fa-laptop-code"></i></a>
          </div>
          <div className="info">
            <h3>Programming languages</h3>
            <em>
              <ul>
                <li>Javascript — still learning</li>
                <li>C++ — intermediate to professional</li>
                <li>C# — intermediate to professional</li>
                <li>HTML — professional</li>
                <li>CSS — professional</li>
                <li>C# — intermediate to professional</li>
              </ul>
            </em>
          </div>
        </div>
      </div>
    </section>
    <section className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Farah Tarek</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  </>
);

export default Programming; 