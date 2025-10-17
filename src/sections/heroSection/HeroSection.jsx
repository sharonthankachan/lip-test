import React from "react";
import personImg from "../../assets/heroPersonImg.webp";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="landing">
      <div className="top-bar">FREE UK SHIPPING ON ORDERS OVER £40</div>

      <nav className="navbar">
        <div className="nav-left">
          <button>SHOP</button>
          <button>ABOUT</button>
          <button>LEARN</button>
        </div>

        <div className="logo">PROJECT</div>

        <div className="nav-right">
          <button>SEARCH</button>
          <button className="cart-btn">
            <span>CART</span>
            <span className="cart-count">0</span>
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>
            BIG LIPS,
            <br />
            BIGGER ENERGY
          </h1>
          <p>
            Our famous lip liner lines, fills and plumps so you can cheat your
            way to an instant lip lift.
          </p>
          <button className="cta">SHOP PLUMP & FILL</button>
        </div>
        <img src={personImg} alt="" className="hero-image" />
      </header>
    </div>
  );
};

export default HeroSection;
