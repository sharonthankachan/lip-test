import React from "react";
import "./BestSellersSection.css";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.webp";
import shopAll from "../../assets/shopAll.jpg";

export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Plump Juice",
      description: "Plumping & hydrating lip oil",
      price: "£18.00",
      image: product1,
      colors: ["#ddddddff","#ffc0cb", "#ff69b4"],
    },
    {
      id: 2,
      name: "Extreme Matte Plumping Primer",
      description: "Extreme plumping lip primer",
      price: "£16.00",
      image: product2,
      colors: [],
    },
    {
      id: 3,
      name: "Plump & Fill",
      description: "Plumping lip liner",
      price: "£16.00",
      image: product3,
      colors: ["#d4a5a5", "#c9a18c", "#a68a75", "#8b7265", "#6b5446", "#ff5000"],
      moreColors: 3,
    },
    {
      id: 4,
      name: "Plump & Fill",
      description: "Plumping lip liner",
      price: "£16.00",
      image: product3,
      colors: ["#d4a5a5", "#c9a18c", "#a68a75", "#8b7265", "#6b5446", "#ff5000"],
      moreColors: 3,
    },
  ];

  return (
    <section className="bestsellers">
      <div className="bestsellers-container">
        <div className="section-header">
          <h2 className="section-title">BEST IN PLUMP</h2>
          <a href="#" className="arrow-right" aria-label="Next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff5000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="products-grid">
          <div className="shop-all-card">
            <img src={shopAll} alt="Shop all products" />
            <button className="shop-all-btn">SHOP ALL</button>
          </div>

          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-shade">{product.description}</p>
                <p className="product-price">{product.price}</p>
                {product.colors.length > 0 && (
                  <div className="color-swatches">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="color-swatch"
                        style={{ backgroundColor: color }}
                        title={`Color ${index + 1}`}
                      />
                    ))}
                    {product.moreColors && (
                      <span className="color-count">+{product.moreColors}</span>
                    )}
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