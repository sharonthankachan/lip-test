import React from "react";
import "./CategorySection.css";
import lipImg from "../../assets/category1.webp";
import faceImg from "../../assets/category2.webp";
import kitsImg from "../../assets/category3.webp";

export default function CategorySection() {
  const categories = [
    { title: "LIP", label: "SHOP", img: lipImg, alt: "Lip Products" },
    { title: "FACE", label: "SHOP", img: faceImg, alt: "Face Products" },
    { title: "KITS", label: "SHOP", img: kitsImg, alt: "Product Kits" },
  ];

  const features = [
    "CLINICALLY PROVEN TO PLUMP",
    "100% NATURAL",
    "VEGAN",
    "CRUELTY-FREE",
    "CERTIFIED",
  ];

  return (
    <div className="container">
      {/* Product Category Cards */}
      <section className="product-cards">
        {categories.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.alt} />
            <div className="card-overlay">
              <span className="card-label">{item.label}</span>
              <h2 className="card-title">{item.title}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* Features Marquee */}
      <div className="features-marquee">
        <div className="marquee-content">
          {Array(2)
            .fill(features)
            .flat()
            .map((text, index) => (
              <div key={index}>
                <span>{text}</span>
                <span className="dot">•</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
