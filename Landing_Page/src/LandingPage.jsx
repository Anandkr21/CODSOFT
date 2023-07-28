import React from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import MainContent from './Components/MainContent';
import Testimonials from './Components/Testimonials';
import ContactSection from './Components/ContactSection';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <MainContent />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
