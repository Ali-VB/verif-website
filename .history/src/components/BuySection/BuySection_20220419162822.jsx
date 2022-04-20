import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import './BuySection.css';
const BuySection = () => {
  return (
    <div className="BuySection">
      <img src={instantDeliveryImg} alt="instantDeliveryImg" />
      <ul>
          <li>No lengthy demos
No professional services
No price quotation
Instant pricing and implementation!</li>
li*3
      </ul>
    </div>
  );
};

export default BuySection;
