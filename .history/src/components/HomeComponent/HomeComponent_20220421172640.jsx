import React from "react";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import AiSection from "../AiSection";
import BuySection from "./components/BuySection/BuySection";
import Supporter from "./components/Supporter/Supporter";
import Footer from "./components/Footer/Footer";
const HomeComponent = () => {
  return (
    <div>
      <Header />
      <Features />
      <AiSection />
      <BuySection />
      <Supporter />
      <Footer />
    </div>
  );
};

export default HomeComponent;
