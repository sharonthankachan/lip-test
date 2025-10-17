import React, { useState } from "react";
import "./FooterSection.css";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const MetaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function FooterSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for signing up!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="bottom">
      <section className="vip-section">
        <div className="vip-container">
          <div className="vip-content">
            <div className="vip-text">
              <h2 className="vip-title">GET ON THE VIP LIST</h2>
              <p className="vip-subtitle">
                Sign up for 15% off and be the first to know about our latest
                offers & news
              </p>
            </div>

            <div className="vip-form-container">
              <form onSubmit={handleSubmit} className="vip-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="form-input"
                  required
                />
              </form>
              <button
                onClick={handleSubmit}
                className="submit-btn"
                type="submit"
              >
                SIGN UP
              </button>
              <p className="privacy-text">
                *By signing up, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-heading">SHOP</h3>
              <ul className="footer-links">
                <li>
                  <a href="#lip">Lip</a>
                </li>
                <li>
                  <a href="#face">Face</a>
                </li>
                <li>
                  <a href="#kits">Kits</a>
                </li>
                <li>
                  <a href="#all">Shop All</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">ABOUT</h3>
              <ul className="footer-links">
                <li>
                  <a href="#story">Our Story</a>
                </li>
                <li>
                  <a href="#proven">Clinically Proven</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">HELP</h3>
              <ul className="footer-links">
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="footer-column social-column">
              <a href="#meta" className="social-link" aria-label="Facebook">
                <MetaIcon />
              </a>
              <a
                href="#instagram"
                className="social-link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a href="#tiktok" className="social-link" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
