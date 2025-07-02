import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./publications.css";

const Publications = () => (
  <>
    <Navbar />
    <div className="publications-section">
      <h2 className="section-title">Publications</h2>
      <ul className="publications-list">
        <li>
          <strong>AI-Driven Clinical Decision Support for Personalized Musculoskeletal Care: A Retrieval-Augmented Generation Approach</strong> <br/>
          <em>Accepted at IMSA 2025</em>
          <ul>
            <li>Published paper proposing an AI-based clinical decision support system using Retrieval-Augmented Generation (RAG) to enhance diagnosis and treatment planning for musculoskeletal disorders.</li>
            <li>Utilized BERT-based classification and BioGPT generation, achieving strong performance (Precision: 0.87, Recall: 0.85, F1-score: 0.86).</li>
          </ul>
        </li>
      </ul>
    </div>
    <Footer />
  </>
);

export default Publications; 