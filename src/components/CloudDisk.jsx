import React from 'react';
import { FaAws, FaDocker, FaLinux, FaJenkins } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiAnsible, SiGitlab } from 'react-icons/si';

const CloudDisk = () => {
  const cloudSkills = [
    { icon: <FaAws size={40} />, name: 'AWS' },
    { icon: <SiTerraform size={40} />, name: 'Terraform' },
    { icon: <SiKubernetes size={40} />, name: 'Kubernetes' },
    { icon: <FaDocker size={40} />, name: 'Docker' },
    { icon: <SiAnsible size={40} />, name: 'Ansible' },
    { icon: <FaJenkins size={40} />, name: 'Jenkins' },
    { icon: <SiGitlab size={40} />, name: 'GitLab' },
    { icon: <FaLinux size={40} />, name: 'Linux' },
  ];

  return (
    <div className="cloud-disk-container">
      <div className="cloud-disk">
        {cloudSkills.map((skill, index) => (
          <div 
            key={index} 
            className="cloud-skill" 
            style={{ transform: `rotate(${index * 45}deg) translateY(-100px)` }}
          >
            <div style={{ transform: `rotate(-${index * 45}deg)` }}>
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudDisk;