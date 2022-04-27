import React from "react";
import Features from "./Features/Features";
import Header from "./Header/Header";
import AiSection from "../AiSection/AiSection";
import BuySection from "./BuySection/BuySection";
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
