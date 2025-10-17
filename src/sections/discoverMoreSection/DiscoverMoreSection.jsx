import React from "react";
import "./DiscoverMoreSection.css";
import diverseModelsImage from "../../assets/discover_more_img.png"; // <-- PUT YOUR IMAGE HERE

export default function DiscoverMoreSection() {
  return (
    <section className="made-to-plump">
      <div className="made-to-plump-container">
        <div className="image-section">
          <div className="orange-stripe">
            <span className="stripe-text top">YOU ARE YOU</span>
            <span className="stripe-text middle">
              YOU ARE YOUR BEST PROJECT
            </span>
            <span className="stripe-text bottom">
              YOU ARE YOUR BEST PRODUCT
            </span>
          </div>
          <img
            src={diverseModelsImage}
            alt="Diverse models with plump lips"
            className="models-image"
          />
        </div>

        <div className="content-section">
          <h2 className="main-title">
            MADE TO PLUMP,
            <br />
            MADE FOR
            <br />
            EVERYONE
          </h2>

          <p className="description">
            We're here to empower you to celebrate your natural beauty and have
            fun while doing it. That's why we've created derm-approved, clean
            and conscious plumpers that you can actually feel good about
            obsessing over.
          </p>

          <button className="discover-btn">DISCOVER MORE</button>
        </div>
      </div>
    </section>
  );
}
