import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h3>Our Love Story</h3>
      <p>
        Two hearts, one journey. Jaison and Asha met, fell in love, we are
        now ready to start a new chapter together. We are so excited to
        celebrate this special day with you.
      </p>
      <div className="heart-animation">
        {/* Animated hearts floating in the background */}
        {[...Array(10)].map((_, index) => (
          <div className="heart" key={index}></div>
        ))}
      </div>
    </section>
  );
};

export default About;
