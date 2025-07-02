import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./certificates.css";

const Certificates = () => {
  const [showItiCert, setShowItiCert] = useState(false);
  const [showDeepMinds, setShowDeepMinds] = useState(false);

  return (
    <>
      <Navbar />
      <div className="certificates-section">
        <h2 className="section-title">Certificates</h2>
        <ul className="certificates-list">
          <li>
            <strong>Microsoft Certified:</strong> <a href="https://www.credly.com/badges/acfb8271-cdf8-4a00-849a-70a7f4325240/linked_in_profile" target="_blank" rel="noopener noreferrer">Azure Data Fundamentals (DP-900)</a>
            <div>Achieved certification for foundational knowledge in core data concepts and how they are implemented using Microsoft Azure data services.</div>
          </li>
          <li>
            <strong>Microsoft Certified:</strong> <a href="https://www.credly.com/badges/533fe056-8ac5-48d9-ad68-196e059cf05f?source=linked_in_profile" target="_blank" rel="noopener noreferrer">Azure AI Fundamentals (AI-900)</a>
            <div>Earned certification demonstrating knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.</div>
          </li>
          <li>
            <strong>ITI Certified:</strong> <span style={{cursor: 'pointer', color: '#1a73e8', textDecoration: 'underline'}} onClick={() => setShowItiCert(v => !v)}>ITI BootCamp For Web Development Using PHP</span>
            {showItiCert && (
              <div style={{marginTop: 16, textAlign: 'center'}}>
                <img src="/iti cert.jpg" alt="ITI PHP Certificate" style={{maxWidth: '100%', maxHeight: 400, borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.12)'}} />
              </div>
            )}
          </li>
          <li>
            <strong>Deep Minds University Event:</strong> <span style={{cursor: 'pointer', color: '#1a73e8', textDecoration: 'underline'}} onClick={() => setShowDeepMinds(v => !v)}>Participant / 1st Place</span>
            <div>Participated in the best projects of the semester showcase twice. First participation in June 2024, followed by a 1st-place win in January 2025 for 4th-year projects, recognized for outstanding project execution and innovation.</div>
            {showDeepMinds && (
              <div style={{marginTop: 16, textAlign: 'center'}}>
                <img src="/deepminds.jpg" alt="Deep Minds University Event Certificate" style={{maxWidth: '100%', maxHeight: 400, borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.12)'}} />
              </div>
            )}
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Certificates; 