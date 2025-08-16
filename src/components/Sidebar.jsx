import React from 'react';
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaProjectDiagram, 
  FaCode, 
  FaEnvelope 
} from 'react-icons/fa';

const Sidebar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-links">
          <button onClick={() => scrollToSection('home')} className="sidebar-link">
            <FaHome className="sidebar-icon" />
            <span>Home</span>
          </button>
          <button onClick={() => scrollToSection('about')} className="sidebar-link">
            <FaUser className="sidebar-icon" />
            <span>About</span>
          </button>
          <button onClick={() => scrollToSection('experience')} className="sidebar-link">
            <FaBriefcase className="sidebar-icon" />
            <span>Experience</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="sidebar-link">
            <FaProjectDiagram className="sidebar-icon" />
            <span>Projects</span>
          </button>
          <button onClick={() => scrollToSection('skills')} className="sidebar-link">
            <FaCode className="sidebar-icon" />
            <span>Skills</span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="sidebar-link">
            <FaEnvelope className="sidebar-icon" />
            <span>Contact</span>
          </button>
        </div>
        <div className="sidebar-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:shahzaib@example.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;