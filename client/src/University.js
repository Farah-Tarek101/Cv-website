import React from "react";
import "./university.css";

const University = () => (
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
            <a href="#"><i className="fas fa-university"></i></a>
          </div>
          <div className="info">
            <h3>University</h3>
            <p>The university I am studying in, my major, and my expected graduation date</p>
          </div>
        </div>
        <div className="card2">
          <div className="icons">
            <a href="#"><i className="fas fa-university"></i></a>
          </div>
          <div className="info">
            <em>
              <p>I go to October University for Modern Sciences and Arts (MSA). Faculty of computer sciences and the major is to be decided next year which is going to be my third university year and I am going to graduate in 2025.</p>
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

export default University; 