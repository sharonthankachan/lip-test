import React from "react";
import "./PlumpingKitsSection.css";
import kit1 from "../../assets/plumpingKits/kit1.png";
import kit2 from "../../assets/plumpingKits/kit2.png";
import kit3 from "../../assets/plumpingKits/kit3.png";
import kit4 from "../../assets/plumpingKits/kit4.png";

export default function PlumpingKitsSection() {
  const kits = [
    {
      id: 1,
      discount: "22% OFF",
      image: kit1,
      title: "THE FULL WORKS",
      description: "Buff, prep & plump kit",
      currentPrice: "£42.00",
      originalPrice: "£54.00",
      colors: [],
    },
    {
      id: 2,
      discount: "18% OFF",
      image: kit2,
      title: "FILTER FREE",
      description: "Smooth, plump & prep kit",
      currentPrice: "£35.00",
      originalPrice: "£42.00",
      colors: [],
    },
    {
      id: 3,
      discount: "27% OFF",
      image: kit3,
      title: "PLUMP & FILL LINER BUNDLES",
      description: "Plumping lip liner kit",
      currentPrice: "£35.00",
      originalPrice: "£48.00",
      colors: ["#c4a5a5", "#8b7265", "#ff0000"],
    },
    {
      id: 4,
      discount: "20% OFF",
      image: kit4,
      title: "PREP & PLUMP",
      description: "Prime, hydrate & plump kit",
      currentPrice: "£24.00",
      originalPrice: "£30.00",
      colors: [],
    },
    {
      id: 5,
      discount: "27% OFF",
      image: kit3,
      title: "PLUMP & FILL LINER BUNDLES",
      description: "Plumping lip liner kit",
      currentPrice: "£35.00",
      originalPrice: "£48.00",
      colors: ["#c4a5a5", "#8b7265", "#ff0000"],
    },
  ];

  return (
    <section className="plumping-kits">
      <div className="kits-container">
        <div className="kits-header">
          <h2 className="kits-title">PLUMPING KITS</h2>
          <button className="shop-all-kits-btn">SHOP ALL KITS</button>
        </div>

        <div className="kits-grid">
          {kits.map((kit) => (
            <div key={kit.id} className="kit-card">
              <div className="kit-image-wrapper">
                <span className="discount-badge">{kit.discount}</span>
                <img src={kit.image} alt={kit.title} className="kit-image" />
              </div>

              <div className="kit-info">
                <h3 className="kit-title">{kit.title}</h3>
                <p className="kit-description">{kit.description}</p>
                <div className="kit-pricing">
                  <span className="current-price">{kit.currentPrice}</span>
                  <span className="original-price">{kit.originalPrice}</span>
                </div>

                {kit.colors.length > 0 && (
                  <div className="kit-colors">
                    {kit.colors.map((color, index) => (
                      <div
                        key={index}
                        className="color-dot"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
