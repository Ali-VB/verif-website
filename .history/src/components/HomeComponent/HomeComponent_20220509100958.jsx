import React from "react";
import Features from "../Features/Features";
import Feature from "../Features/Feature";
import Header from "../Header/Header";
import AiSection from "../AiSection/AiSection";
import BuySection from "../BuySection/BuySection";
import Supporter from "../Supporter/Supporter";
import Footer from "../Footer/Footer";
import BelowHeader from "../BelowHeader/BelowHeader";
import { Helmet } from "react-helmet-async";
const HomeComponent = () => {
  return (
    <div>
      <Helmet>
        <title> Home </title>
        <meta
          name="description"
          content="If a phishing attack reaches their inbox,
3.18% of employees
will go as far as providing credentials. Try verifa.i. "
        />
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
