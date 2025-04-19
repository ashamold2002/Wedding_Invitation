import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

const Gallery = () => {
  const slides = [
    { src: "/Images/Image.png" },
    { src: "/Images/Image2.png" },
    { src: "/Images/Image3.png" } 
  ];

  const [open, setOpen] = useState(false);

  return (
    <section id="gallery" className="gallery">
      <h3>Gallery</h3>
      <div className="image-thumbnails">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`Slide ${index}`}
            onClick={() => setOpen(true)}
            className="thumbnail"
          />
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </section>
  );
};

export default Gallery;
