import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./education.css";

const Education = () => (
  <>
    <Navbar />
    <div className="app-content">
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <strong>October University for Modern Sciences and Arts (MSA)</strong> <span>Graduated June 2025</span>
            <div>B.S. Computer Science</div>
          </div>
          <div className="education-item">
            <strong>Dar El Tarbiah IGCSE</strong> <span>Graduated 2021</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Education; 