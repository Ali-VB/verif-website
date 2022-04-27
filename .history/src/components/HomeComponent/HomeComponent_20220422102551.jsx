import React from "react";
import Features from "../Features/Features";
import Header from "../Header/Header";
import AiSection from "../AiSection/AiSection";
import BuySection from "../BuySection/BuySection";
import Supporter from "../Supporter/Supporter";
import Footer from "../Footer/Footer";
import BelowHeader from
const HomeComponent = () => {
  return (
    <div>
      <Header />
      <BelowHeader />
      <Features />
      <AiSection />
      <BuySection />
      <Supporter />
      <Footer />
    </div>
  );
};

export default HomeComponent;
