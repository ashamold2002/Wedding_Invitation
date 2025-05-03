import React, { useEffect, useState } from "react";
import "./Countdown.css";
import ScrollButton from "./ScrollButton";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-28T10:30:00"); // YYYY-MM-DDTHH:mm:ss format
    const now = new Date();
    const difference = targetDate - now;
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section id="countdown" className="countdown">
      <h3>Countdown to Our Big Day</h3>
      <div className="timer">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="time-box" key={unit}>
            <span>{value}</span>
            <small>{unit}</small>
          </div>
        ))}
      </div>
      {/* <ScrollButton targetId="map" /> */}
    </section>
  );
};

export default Countdown;