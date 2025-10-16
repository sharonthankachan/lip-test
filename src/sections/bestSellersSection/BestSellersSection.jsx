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
      name: "Plump & Fill Lip Liner",
      price: "£18",
      image: product1,
      badge: "BESTSELLER",
      shade: "Berry",
    },
    {
      id: 2,
      name: "Hydrating Lip Oil",
      price: "£22",
      image: product2,
      badge: "NEW",
      shade: "Clear",
    },
    {
      id: 3,
      name: "Velvet Matte Lipstick",
      price: "£20",
      image: product3,
      badge: "TRENDING",
      shade: "Nude",
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
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff5000"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-right"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m12 16 4-4-4-4" />
              <path d="M8 12h8" />
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
                <button className="quick-add-btn">QUICK ADD</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-shade">{product.shade}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
