// src/components/ScrollButton.js
import React from 'react';
import './ScrollButton.css';

const ScrollButton = ({ targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator" onClick={scrollToSection}>
      <span className="mouse">
        <span className="scroll-wheel"></span>
      </span>
      <span className="arrow-down"></span>
    </div>
  );
};

export default ScrollButton;
