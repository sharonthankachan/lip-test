import React from "react";
import "./FeaturedSection.css";
import logo1 from "../../assets/featured_logo1.png";
import logo2 from "../../assets/featured_logo2.png";
import logo3 from "../../assets/featured_logo3.png";
import logo4 from "../../assets/featured_logo4.png";
import logo5 from "../../assets/featured_logo5.png";
import logo6 from "../../assets/featured_logo6.png";

const logos = [
  { id: 1, src: logo1, alt: "Brand 1" },
  { id: 2, src: logo2, alt: "Brand 2" },
  { id: 3, src: logo3, alt: "Brand 3" },
  { id: 4, src: logo4, alt: "Brand 4" },
  { id: 5, src: logo5, alt: "Brand 5" },
  { id: 6, src: logo6, alt: "Brand 6" },
];

export default function FeaturedSection() {
  return (
    <section className="featured-in">
      <div className="featured-container">
        <h2 className="featured-title">FEATURED IN</h2>

        <div className="logos-grid">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
