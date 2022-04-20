import React from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import './Supporter.css';
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <Carousel>
        <img className="width-3" src={instantDeliveryImg} alt="" />
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Carousel>
    </div>
  );
};

export default Supporter;
