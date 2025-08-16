import React from 'react';
import TypingText from '../components/TypingText';
import pfp from '../assets/PIC.png';
// import CloudDisk from '../components/CloudDisk';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Shahzaib Munir</h1>
          <TypingText />
          <div className="quick-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:shahzaib@example.com">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file"></i> Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={pfp} alt="Shahzaib Munir" />
        </div>
      </div>
      {/* <div className="cloud-disk-section">
        <CloudDisk />
      </div> */}
    </section>
  );
};

export default Home;