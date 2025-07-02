import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./projects.css";

const Projects = () => (
  <>
    <Navbar />
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      <ul className="projects-list">
        <li>
          <strong>MERN Stack Trip Booking and Souvenir Shop</strong> <br/>
          <em>MERN Stack (MongoDB, Express.js, React.js, Node.js), VSC, MongoDB</em>
          <ul>
            <li>Developed a full-stack website using the MERN Stack for a trip booking website and souvenir shop.</li>
            <li>Implemented admin and user panels with features for trip booking, tour guide assignment, and souvenir purchase.</li>
          </ul>
        </li>
        <li>
          <strong>Online Trips Booking Website and Souvenir Shop</strong> <br/>
          <em>HTML, CSS, PHP, JavaScript, Bootstrap, VSC, WAMP, Manual Testing</em>
          <ul>
            <li>Developed a trip booking website and souvenir shop with admin and user panels.</li>
            <li>Implemented features such as trip booking, assignment of tour guides, and souvenir purchase.</li>
          </ul>
        </li>
        <li>
          <strong>MERN Stack Clinic Website</strong> <br/>
          <em>MERN Stack (MongoDB, Express.js, React.js, Node.js), JWT, VSC, MongoDB</em>
          <ul>
            <li>Developed a clinic website where patients can book appointments with specified doctors.</li>
            <li>Implemented user authentication, doctor and admin panels, appointment scheduling, and medical record management.</li>
            <li>Integrated chatbot support for symptom analysis and personalized recommendations.</li>
          </ul>
        </li>
        <li>
          <strong>AI-Powered Study Companion</strong> <br/>
          <em>LLM, Productivity Tools</em>
          <ul>
            <li>Designed an AI-powered study companion to enhance time management, track progress, and prepare for exams.</li>
            <li>Implemented features like dynamic to-do lists, oral test simulations, and personalized learning support.</li>
            <li><strong>Project Link:</strong> <a href="https://lnkd.in/dKy_Aq3w" target="_blank" rel="noopener noreferrer">https://lnkd.in/dKy_Aq3w</a></li>
          </ul>
        </li>
        <li>
          <strong>Medication Reminder App</strong> <br/>
          <em>Flutter, Dart, Android Studio, Firebase, Manual Testing</em>
          <ul>
            <li>Designed a mobile application to manage health data and medication reminders, doctor's appointment reminders.</li>
          </ul>
        </li>
        <li>
          <strong>Expense Tracking App</strong> <br/>
          <em>Flutter, Dart, Visual Studio Code, Firebase, Manual Testing</em>
          <ul>
            <li>Developed a mobile application for tracking expenses and categorizing them.</li>
          </ul>
        </li>
        <li>
          <strong>Text Similarity Checker</strong> <br/>
          <em>Python, Visual Studio Code, Manual Testing</em>
          <ul>
            <li>Developed a text similarity checker that checks if the text you input is similar to another one.</li>
          </ul>
        </li>
        <li>
          <strong>Websites Scraper</strong> <br/>
          <em>Python, BeautifulSoup, Tkinter, Pandas, Power BI, Visual Studio Code, Manual Testing</em>
          <ul>
            <li>Developed a scraping program that scrapes a website and retrieves its information in a CSV file and analyzes the scrapped info using Power BI.</li>
          </ul>
        </li>
        <li>
          <strong>NLP Translation Project</strong> <br/>
          <em>Python, T5 Transformer, Llama2, Visual Studio Code, Manual Testing</em>
          <ul>
            <li>Developed an NLP project that translates text from English to Roman based on data from Hugging Face using T5 Transformer and Llama2.</li>
          </ul>
        </li>
      </ul>
    </div>
    <Footer />
  </>
);

export default Projects; 