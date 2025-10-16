import React from "react";
import "./App.css";
import personImg from "./assets/heroPersonImg.webp"; // your no-bg person image

export default function App() {
  return (
    <div className="landing">
      {/* Top Bar */}
      <div className="top-bar">
        FREE UK SHIPPING ON ORDERS OVER £40
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <button>SHOP</button>
          <button>ABOUT</button>
          <button>LEARN</button>
        </div>

        <div className="logo">PROJECT</div>

        <div className="nav-right">
          <button>SEARCH</button>
          <button><p>CART</p> <button className="cart-count">0</button></button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>BIG LIPS,<br />BIGGER ENERGY</h1>
          <p>
            Our famous lip liner lines, fills and plumps so you can cheat your
            way to an instant lip lift.
          </p>
          <button className="cta">SHOP PLUMP & FILL</button>
        </div>

        <div className="hero-image">
          <img src={personImg} alt="Person" />
        </div>
      </header>
    </div>
  );
}
