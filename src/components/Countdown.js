import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-05-28") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
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
    </section>
  );
};

export default Countdown;