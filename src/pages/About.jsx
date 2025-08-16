import React from 'react';
import pic2 from '../assets/PIC2.png';
const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Shahzaib Munir, a passionate DevOps Engineer with hands-on expertise in designing and automating cloud-native infrastructures. 
            Skilled in Kubernetes, Terraform, Ansible, Docker, and AWS, I specialize in building scalable, secure, and highly available systems. 
            My approach blends Infrastructure as Code, CI/CD automation, and container orchestration to streamline deployments and optimize performance. 
            Driven by curiosity and continuous learning, I thrive on delivering solutions that bridge development and operations for faster, 
            more reliable software delivery.
          </p>
          <div className="about-tags">
            <span>Cloud</span>
            <span>DevOps</span>
            <span>IAC</span>
            <span>AWS</span>
            <span>Kubernetes</span>
            <span>CI/CD</span>
            <span>Automation</span>
            <span>Software Development</span>
          </div>
        </div>
        <div className="about-image">
          <img src={pic2} alt="About Shahzaib" />
        </div>
      </div>
    </section>
  );
};

export default About;