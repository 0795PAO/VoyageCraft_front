import React, { useState } from 'react';
import logo from "../../../assets/logo/logo.svg"
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="VoyageCraft Logo" className="logo" />
        <h1>VoyageCraft</h1>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Itinerary</a></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
