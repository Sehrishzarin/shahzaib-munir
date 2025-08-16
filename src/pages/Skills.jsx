import React from 'react';

const Skills = () => {
  const codingSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 70 },
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 }
  ];

  const cloudSkills = [
    "Terraform", "Kubernetes", "AWS", "Docker", 
    "Ansible", "Jenkins", "GitLab", "Linux", 
    "Openstack", "Shell Scripting"
  ];

  const softSkills = [
    { icon: "💬", name: "Effective communication" },
    { icon: "🤝", name: "Teamwork" },
    { icon: "🧩", name: "Problem Solving" },
    { icon: "🔄", name: "Adaptability" },
    { icon: "🎨", name: "Creativity" }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      
      <div className="skills-category">
        <h3>Coding Skills</h3>
        <div className="skills-list">
          {codingSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div 
                  className="skill-level" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-category">
        <h3>Cloud Skills</h3>
        <div className="cloud-skills-grid">
          {cloudSkills.map((skill, index) => (
            <div key={index} className="cloud-skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div className="skills-category">
        <h3>Soft Skills</h3>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-item">
              <span className="soft-skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;