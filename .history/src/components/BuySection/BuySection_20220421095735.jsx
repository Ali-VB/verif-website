import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
const BuySection = () => {
  return (
    // <Pulse delay={700} right>

    <div className="  BuySection">
      <div className="leftPart">
      <Fade delay={500} duration={1500} top cascade>
        <ul class=" fw-light display-6 text-secondary">
          <li>No lengthy demos </li>
          <li>No professional services</li>
          <li>No price quotation</li>
          <li>Instant pricing and implementation!</li>
        </ul>
        </Fade >
        <button type="button" class="btn d-inline btn-outline-success btn-lg">
          Buy
        </button>
      </div>
      
        <img src={instantDeliveryImg} alt="instantDeliveryImg" />
     
    </div>

    // </Pulse>
  );
};

export default BuySection;
