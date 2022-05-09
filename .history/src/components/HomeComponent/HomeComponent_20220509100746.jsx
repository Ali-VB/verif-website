import React from "react";
import Features from "../Features/Features";
import Feature from "../Features/Feature";
import Header from "../Header/Header";
import AiSection from "../AiSection/AiSection";
import BuySection from "../BuySection/BuySection";
import Supporter from "../Supporter/Supporter";
import Footer from "../Footer/Footer";
import BelowHeader from "../BelowHeader/BelowHeader"
import { Helmet } from "react-helmet-async";
const HomeComponent = () => {
  return (
    <div>
      <Helmet>
        <title>

        </title>
        <meta name="" descr />
      </Helmet>
      <Header />
      <BelowHeader />
      <Feature />
      <AiSection />
      <BuySection />
      <Supporter />
      <Footer />
    </div>
  );
};

export default HomeComponent;
