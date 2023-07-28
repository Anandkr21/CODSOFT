import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/fast-fud.jpg" alt="Logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#gallery">Gallery</a></li>
        <li className="nav-item"><a href="#career">Career</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
