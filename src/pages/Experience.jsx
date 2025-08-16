import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "CI/CD and DevOps",
      period: "September 2024 – November 2024",
      description: "Designed and implemented CI/CD pipelines for multiple projects, reducing deployment time by 70%."
    },
    {
      id: 2,
      title: "Three tier application",
      period: "August 2025 – November 2025",
      description: "Architected and deployed a scalable three-tier application on AWS using Terraform and Kubernetes."
    },
    {
      id: 3,
      title: "Cloud Infrastructure and Web Application",
      period: "January 2025 – July 2025",
      description: "Migrated legacy infrastructure to cloud-native architecture with zero downtime."
    },
    {
      id: 4,
      title: "E-commerce Website",
      period: "January 2025 – July 2025",
      description: "Implemented DevOps practices for a high-traffic e-commerce platform, improving reliability and scalability."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="date">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;