import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./experience.css";

const Experience = () => (
  <>
    <Navbar />
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <strong>ITI Bootcamp</strong> <span>July 2023 – Aug 2023</span>
          <div>Web Dev Trainee (PHP)</div>
          <ul>
            <li>Built websites using PHP; intro to Laravel.</li>
          </ul>
        </div>
        <div className="experience-item">
          <strong>Mosla Pioneers Agency</strong> <span>June 2024 – August 2024</span>
          <div>Recruiter & French Language Validator</div>
          <ul>
            <li>Screened and recruited candidates for various positions.</li>
            <li>Conducted French language proficiency interviews to assess candidate fluency.</li>
            <li>Collaborated with hiring teams to match candidates with suitable roles based on qualifications and language skills.</li>
          </ul>
        </div>
        <div className="experience-item">
          <strong>Mosla Pioneers Agency</strong> <span>August 2024 – February 2025</span>
          <div>Team Leader – Recruitment Department & French Language Validator/Interviewer</div>
          <ul>
            <li>Led a team of recruiters in sourcing and evaluating candidates.</li>
            <li>Oversaw interview processes and ensured quality standards in candidate selection.</li>
            <li>Trained new recruiters on evaluation criteria and language assessment procedures.</li>
            <li>Conducted advanced French language interviews and validated linguistic proficiency of shortlisted candidates.</li>
          </ul>
        </div>
        <div className="experience-item">
          <strong>Freelance (Clinic Website)</strong> <span>Dec 2024 – Feb 2025</span>
          <div>Full-Stack Developer</div>
          <ul>
            <li>MERN-based clinic website with chatbot and patient/doctor panels.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Experience; 