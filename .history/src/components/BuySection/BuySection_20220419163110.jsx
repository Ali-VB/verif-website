import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
const BuySection = () => {
  return (
    <div className="BuySection">
      <ul>
        <li class="lead">No lengthy demos </li>
        <li class="lead">No professional services</li>
        <li>No price quotation</li>
        <li>Instant pricing and implementation!</li>
      </ul>
      <img src={instantDeliveryImg} alt="instantDeliveryImg" />
    </div>
  );
};

export default BuySection;
