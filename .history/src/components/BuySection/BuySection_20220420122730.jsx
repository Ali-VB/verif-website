import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
const BuySection = () => {
  return (
    <div className="  BuySection">
        <div className="leftPart">
        <ul class=" fw-light display-6 text-secondary">
        <li >No lengthy demos </li>
        <li >No professional services</li>
        <li >No price quotation</li>
        <li >Instant pricing and implementation!</li>
      </ul>
      <button type="button" class="btn d-inline btn-secondary btn-lg">Buy</button>
      <button type="button" class="btn btn-outline-success">Buy</button>
        </div>
     
      <img src={instantDeliveryImg} alt="instantDeliveryImg" />
    </div>
  );
};

export default BuySection;