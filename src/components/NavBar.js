import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
