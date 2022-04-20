import React from "react";
import ReactDOM from 'react-dom';
import { Carousel } from "@trendyol-js/react-carousel";
import "./Supporter.css";
 import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import { Item } from "./instant-Delivery.png";
const Supporter = () => {
  return (
    <div className="supporter-section">
      <Carousel>
       <   <img className="d-inline" src={instantDeliveryImg} alt="" />>
          <img src={instantDeliveryImg} alt="" />
          <img src={instantDeliveryImg} alt="" />
          <img src={instantDeliveryImg} alt="" />
          <img src={instantDeliveryImg} alt="" />
          <img src={instantDeliveryImg} alt="" />
          <img src={instantDeliveryImg} alt="" />
          <img src={instantDeliveryImg} alt="" />
         
       
      </Carousel>
    </div>
  );
};

export default Supporter;
