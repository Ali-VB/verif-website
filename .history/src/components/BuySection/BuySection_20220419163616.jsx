import React from "react";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import "./BuySection.css";
const BuySection = () => {
  return (
    <div className="BuySection">
      <ul class="lead">
        <li >No lengthy demos </li>
        <li >No professional services</li>
        <li >No price quotation</li>
        <li >Instant pricing and implementation!</li>
      </ul>
      {/* <p class="lead">No lengthy demos </p>
      <p>No professional services </p>
      <p>No price quotation </p>
      <p>Instant pricing and implementation!</p> */}
      <img src={instantDeliveryImg} alt="instantDeliveryImg" />
    </div>
  );
};

export default BuySection;
