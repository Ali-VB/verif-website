import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
const BuySection = () => {
  return (
    <Pulse right>

    <div className="  BuySection">
      <div className="leftPart">
        <ul class=" fw-light display-6 text-secondary">
          <li>No lengthy demos </li>
          <li>No professional services</li>
          <li>No price quotation</li>
          <li>Instant pricing and implementation!</li>
        </ul>
        <button type="button" class="btn d-inline btn-outline-success btn-lg">
          Buy
        </button>
      </div>
      
        <img src={instantDeliveryImg} alt="instantDeliveryImg" />
     
    </div>

    </Pulse>
  );
};

export default BuySection;
