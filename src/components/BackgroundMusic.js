import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./BackgroundMusic.css";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.volume = 0.4;
        audio.play();
        setShowHint(false); // Hide hint after playing
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-control">
      <audio ref={audioRef} src="music/Anbil-Avan.mp3" loop preload="auto" />

      {showHint && (
        <div className="music-hint">🎵 Click to play music</div>
      )}

      <div className="tooltip">
        <button
          onClick={toggleMusic}
          className={`music-btn ${isPlaying ? "playing" : ""}`}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <span className="tooltiptext">{isPlaying ? "Pause Music" : "Play Music"}</span>
      </div>
    </div>
  );
};

export default BackgroundMusic;
