import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <img src={project1} alt="Project 1" />
          <p>Project 1: Description of the project.</p>
        </div>
        <div className="project-item">
          <img src={project2} alt="Project 2" />
          <p>Project 2: Description of the project.</p>
        </div>
        <div className="project-item">
          <img src={project3} alt="Project 3" />
          <p>Project 3: Description of the project.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
