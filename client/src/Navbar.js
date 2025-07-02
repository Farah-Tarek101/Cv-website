import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Farah</div>
      <button className="navbar-hamburger" onClick={handleMenuToggle} aria-label="Toggle navigation">
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </button>
      <div className={`navbar-links${menuOpen ? " open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined} end onClick={handleLinkClick}>Home</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Education</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Projects</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Skills</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Experience</NavLink>
        <NavLink to="/certificates" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Certificates</NavLink>
        <NavLink to="/publications" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Publications</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined} onClick={handleLinkClick}>Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar; 