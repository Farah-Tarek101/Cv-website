import React from "react";
import "./languages.css";

const Languages = () => (
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
            <a href="#"><i className="fas fa-language"></i></a>
          </div>
          <div className="info">
            <h3>Languages</h3>
            <p>The languages I can speak, write, and understand fluently</p>
          </div>
        </div>
        <div className="card2">
          <div className="icons">
            <a href="#"><i className="fas fa-language"></i></a>
          </div>
          <div className="info">
            <em>
              <p>I am native arabic speaker and I have two other languages, English and French, and I am fluent in both of them.</p>
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

export default Languages; 