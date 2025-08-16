import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CI/CD and DevOps",
      period: "September 2024 – November 2024",
      description: "Implemented a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes for a microservices architecture.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS"]
    },
    {
      id: 2,
      title: "Three tier application",
      period: "August 2025 – November 2025",
      description: "Developed and deployed a three-tier web application with Terraform provisioning and Ansible configuration.",
      technologies: ["Terraform", "Ansible", "AWS", "MySQL"]
    },
    {
      id: 3,
      title: "Cloud Infrastructure and Web Application",
      period: "January 2025 – July 2025",
      description: "Designed cloud infrastructure for a web application with auto-scaling and load balancing capabilities.",
      technologies: ["AWS", "Terraform", "Kubernetes", "Docker"]
    },
    {
      id: 4,
      title: "E-commerce Website",
      period: "January 2025 – July 2025",
      description: "Containerized and deployed an e-commerce platform with CI/CD pipeline and monitoring.",
      technologies: ["Docker", "Kubernetes", "Prometheus", "Grafana"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <span className="project-period">{project.period}</span>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;