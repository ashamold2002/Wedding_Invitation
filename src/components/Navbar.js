// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { FaHeart, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "mobile" : ""}`}>
      <div className="navbar-logo"> Jaison ❤️ Asha</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <IoMdClose /> : <FaBars />}
      </div>
      {/* <ul className="navbar-links">
        <li><a href="#home"><FaHeart className="nav-icon" /> Home</a></li>
        <li><a href="#about"><FaHeart className="nav-icon" />About</a></li>
        <li><a href="#details"><FaHeart className="nav-icon" /> Details</a></li>
        <li><a href="#countdown"><FaHeart className="nav-icon" /> Countdown</a></li>
        <li><a href="#gallery"><FaHeart className="nav-icon" /> Gallery</a></li>
        <li><a href="#rsvp"><FaHeart className="nav-icon" /> RSVP</a></li>
        <li><a href="#map"><FaHeart className="nav-icon" /> Location</a></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
