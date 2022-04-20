import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
const BuySection = () => {
  return (
    <div className=" container BuySection">
        
      <ul class=" fw-lighter text-secondary">
        <li >No lengthy demos </li>
        <li >No professional services</li>
        <li >No price quotation</li>
        <li >Instant pricing and implementation!</li>
      </ul>
      <button type="button" class="btn btn-secondary btn-lg">Large button</button>
      <img src={instantDeliveryImg} alt="instantDeliveryImg" />
    </div>
  );
};

export default BuySection;
