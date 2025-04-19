import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section id="map" className="map">
      <h3>Find Us Here</h3>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7117.539526269954!2d77.24021080662386!3d8.23265320124763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fefe5ca7cef9%3A0x428a2383bb72820f!2sCSI%20Home%20Church%2C%20Karungal!5e0!3m2!1sen!2sin!4v1745083005450!5m2!1sen!2sin" 
      width="100%" 
      height="300" 
     
      
      allowfullscreen=""
       loading="lazy"></iframe>
    </section>
  );
};

export default Map;