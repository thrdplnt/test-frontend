import React from 'react';
import './navbar.css';
import Logo from '/logo.png'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} className="navbar-icon" alt="logo" />
        <h1 className="navbar-title">US Population Data</h1>
      </div>
    </nav>
  );
}