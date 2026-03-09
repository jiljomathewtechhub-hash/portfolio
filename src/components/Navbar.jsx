import React from 'react';
import myPhoto from '../assets/jiljo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="profile">
          <img src={myPhoto} alt="Profile" className="profile-image" />
          <h1>Jiljo Mathew</h1>
          <p>Junior Front End Developer</p>
        </div>

        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;