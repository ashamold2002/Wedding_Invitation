import React from 'react';
import './Hero.css';
import ScrollButton from './ScrollButton';

const Hero = () => {
  return (
    <section className="hero" id='hero'>
      <div className="hearts">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="heart" />
        ))}
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">Jaison 💜 Asha</h1>
        <p className="hero-subtitle">We're getting married!</p>
        <p className="hero-date">28 May 2025</p>
        {/* <div className="scroll-btn" onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }}>
        <span>Scroll</span>
        <div className="arrow"></div>
      </div> */}
      </div>
      <ScrollButton targetId="map" />
      
    </section>
  );
};

export default Hero;
