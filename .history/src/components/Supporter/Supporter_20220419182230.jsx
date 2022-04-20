import React from "react";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import './Supporter.css';
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <Carousel>
        <img  src={instantDeliveryImg}  alt="" />
        <img  src={instantDeliveryImg}  alt="" />
        <img  src={instantDeliveryImg}  alt="" />
        <img  src={instantDeliveryImg}  alt="" />
      
      </Carousel>
    </div>
  );
};

export default Supporter;
