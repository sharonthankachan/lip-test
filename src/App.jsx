import React from "react";
import "./App.css";
import HeroSection from "./sections/heroSection/HeroSection";
import CategorySection from "./sections/categorySection/CategorySection";
import BestSellers from "./sections/bestSellersSection/BestSellersSection";
import ProductsSection from "./sections/productsSection/productsSection";
import TrendingSection from "./sections/trendingSection/TrendingSection";
import FeaturedSection from "./sections/featuredSection/FeaturedSection";
import PlumpingKitsSection from "./sections/plumpingKitsSection/PlumpingKitsSection";
import DiscoverMoreSection from "./sections/discoverMoreSection/DiscoverMoreSection";
import TestimonialSection from "./sections/testimonialSection/TestimonialSection";
import FooterSection from "./sections/footerSection/FooterSection";

export default function App() {
  return (
    <>
      <div className="sections">
        <HeroSection />
        <CategorySection />
        <BestSellers />
        <ProductsSection />
        <TrendingSection />
        <FeaturedSection />
        <PlumpingKitsSection />
        <DiscoverMoreSection />
        <TestimonialSection />
      </div>
      <FooterSection />
    </>
  );
}
