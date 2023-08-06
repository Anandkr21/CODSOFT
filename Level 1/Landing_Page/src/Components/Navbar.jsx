import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://im.idiva.com/content/2020/Sep/Fast-Food-Chain-Logo_1_5f50d6242b804.jpg?w=1200&h=900&cc=1" alt="Logo" />
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
