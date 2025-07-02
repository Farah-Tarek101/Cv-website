import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./skills.css";

const Skills = () => (
  <>
    <Navbar />
    <div className="app-content">
      <div className="skills-section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li><strong>Languages:</strong> C#, C++, Python, JavaScript, HTML/CSS, Node.js</li>
          <li><strong>Tools:</strong> GitHub, VSC, PyCharm, Android Studio, Power BI</li>
          <li><strong>Frameworks:</strong> Flutter, React, Dart</li>
          <li><strong>Back-end:</strong> Firebase, MongoDB, SQL, MySQL</li>
          <li><strong>Languages Spoken:</strong> Arabic (native), English (fluent), French (fluent)</li>
        </ul>
      </div>
    </div>
    <Footer />
  </>
);

export default Skills; 