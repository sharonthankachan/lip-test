import React from "react";
import "./App.css";
import HeroSection from "./sections/heroSection/HeroSection";
import CategorySection from "./sections/categorySection/CategorySection";
import BestSellers from "./sections/bestSellersSection/BestSellersSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BestSellers/>
    </>
  );
}
