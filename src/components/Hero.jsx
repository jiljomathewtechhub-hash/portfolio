import React from 'react';
import myPhoto from '../assets/jiljo.jpg'; // Adjust the path if needed

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={myPhoto} alt="Jiljo Mathew" className="hero-image"/>
        <h1>Hi, I'm Jiljo Mathew</h1>
        <p>Junior Front End Developer passionate about building responsive, interactive, and user-focused web applications.</p>
        <a href="#projects" className="btn">View My Projects</a>
      </div>
    </section>
  );
};

export default Hero;