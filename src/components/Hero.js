import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hearts">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="heart" />
        ))}
      </div>
        <div className="container">
          <h1 className="hero-title">Jaison 💜 Asha</h1>
          <p className="hero-subtitle">We're getting married!</p>
          <p className="hero-date">28 May 2025</p>
        </div>
      
    </section>
  );
};

export default Hero;
