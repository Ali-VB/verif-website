import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
const BuySection = () => {
  return (
    <div className="BuySection">
      <img src={instantDeliveryImg} alt="instantDeliveryImg" />
      <ul>
        <li>No lengthy demos Instant pricing and implementation!</li>
        <li>No professional services</li>
        <li>No price quotation</li>
        
      </ul>
    </div>
  );
};

export default BuySection;