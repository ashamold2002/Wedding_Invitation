import React, { useState } from "react";
import "./RSVP.css";

const RSVP = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}! RSVP recorded.`);
  };

  return (
    <section id="rsvp" className="rsvp">
      <h3>Please Let Us Know if You’ll Be Part of Our Special Day</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
          />
          I will be attending
        </label>
        <button type="submit">Reserve Your Place in Our Hearts</button>
      </form>
    </section>
  );
};

export default RSVP;