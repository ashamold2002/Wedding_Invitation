import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./BackgroundMusic.css";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.volume = 0.4;
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-control">
      <audio ref={audioRef} src="/music/Anbil-Avan.mp3" loop />
      <button onClick={toggleMusic} className="music-btn">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
