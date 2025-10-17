import React from "react";
import "./App.css";
import HeroSection from "./sections/heroSection/HeroSection";
import CategorySection from "./sections/categorySection/CategorySection";
import BestSellers from "./sections/bestSellersSection/BestSellersSection";
import ProductsSection from "./sections/productsSection/productsSection";
import TrendingSection from "./sections/trendingSection/TrendingSection";
import FeaturedSection from "./sections/featuredSection/FeaturedSection";
import PlumpingKitsSection from "./sections/plumpingKitsSection/PlumpingKitsSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BestSellers/>
      <ProductsSection/>
      <TrendingSection/>
      <FeaturedSection/>
      <PlumpingKitsSection/>
    </>
  );
}
