import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className="hovering">Home</li>
        <li className="hovering">Rooms</li>
        <li className="hovering">Location</li>
        <li className="hovering">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
