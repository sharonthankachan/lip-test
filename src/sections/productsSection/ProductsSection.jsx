import React from "react";
import "./ProductsSection.css";
import productsImage from "../../assets/background.webp";

export default function ProductsSection() {
  return (
    <section className="products-proven">
      <div className="products-proven-container">
        <div className="products-image-wrapper">
          <img
            src={productsImage}
            alt="Product swatches showing different textures"
            className="products-image"
          />
        </div>

        <div className="products-content">
          <h2 className="products-title">
            PRODUCTS PROVEN
            <br />
            TO PLUMP
          </h2>

          <p className="products-description">
            Clean, conscious and clinically proven, our plumpers deliver real
            results so you can plump up your beauty, naturally.
          </p>

          <button className="see-results-btn">SEE THE RESULTS</button>
        </div>
      </div>
    </section>
  );
}
