import React from "react";
import heroImg from "../../assets/heroPersonImg.webp";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="header">
      <div className="text-content">
        <h1>BIG LIPS, <br />BIGGER ENERGY</h1>
        <p>Our famous lip liner lines, fills and plumps so you can cheat your way to an instant lip lift.</p>
      </div>
      <div className="image-container">
        <img src={heroImg} alt="Person" />
      </div>
    </header>
  );
};

export default HeroSection;
