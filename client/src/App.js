import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Languages from './Languages';
import Programming from './Programming';
import University from './University';
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Publications from "./Publications";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/university" element={<University />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
