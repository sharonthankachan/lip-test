import React, { useState } from "react";
import "./TestimonialSection.css";
import img1 from "../../assets/testimonial/1.png";
import img2 from "../../assets/testimonial/2.png";
import img3 from "../../assets/testimonial/3.png";
import img4 from "../../assets/testimonial/4.png";
import img5 from "../../assets/testimonial/5.png";

export default function TestimonialSection() {
  const testimonialImages = [img1, img2, img3, img4, img5, img3];

  return (
    <div className="cosmetics-landing">
      <header className="header">
        <h1 className="logo">@PROJECT_COSMETICS</h1>
        <button className="follow-btn">FOLLOW US</button>
      </header>

      <section className="gallery-section">
        <div className="testimonial-grid">
          {testimonialImages.map((img, idx) => (
            <div key={idx} className="testimonial-card">
              <img
                src={img}
                alt={`Customer testimonial ${idx + 1}`}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
