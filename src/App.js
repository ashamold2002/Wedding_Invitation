import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Map from "./components/Map";
import Footer from "./components/Footer";
import BackgroundMusic from "./components/BackgroundMusic";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BackgroundMusic/>
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <EventDetails />
      <Gallery />
      <RSVP />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
