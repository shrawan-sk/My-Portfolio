import React from 'react';
import './About.css';
import myImage from '../assets/myImage.jpg';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={myImage} alt="Me" className="profile-pic" />
      <p>Hi, I'm [Your Name]. I'm a [Your Profession].</p>
      <a href="/assets/resume.pdf" className="btn">Download Resume</a>
    </div>
  );
}

export default About;
