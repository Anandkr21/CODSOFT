import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-content">
        <h1 className="headline">Welcome to Our Landing Page</h1>
        <p className="subheadline">We have an amazing product for you!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
