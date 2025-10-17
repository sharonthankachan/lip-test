import React from "react";
import "./TrendingSection.css";
import trendingImage from "../../assets/lips2.png";
import productImage from "../../assets/plump_juice_product.png";

export default function TrendingSection() {
  return (
    <section className="trending-product">
      <div className="trending-container">
        {/* Left Side - Trending Image */}
        <div className="trending-left">
          <div className="trending-badge">TRENDING ON TIKTOK</div>
          <h2 className="trending-title">
            YOUR LIPS
            <br />
            BUT JUICIER
          </h2>
          <div className="trending-image-wrapper">
            <img
              src={trendingImage}
              alt="Juicy lips close up"
              className="trending-image"
            />
          </div>
        </div>

        {/* Right Side - Product Card */}
        <div className="trending-right">
          <div className="product-display">
            <img
              src={productImage}
              alt="Plump Juice product"
              className="product-main-image"
            />
            <button className="arrow-next" aria-label="Next product">
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
            </button>
          </div>

          <div className="product-details">
            <h3 className="product-title">PLUMP JUICE</h3>
            <p className="product-variant">Coconut • Clear</p>
            <p className="product-price">£18.00</p>
            <button className="add-to-cart-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
}