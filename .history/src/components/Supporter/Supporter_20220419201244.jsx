import React from "react";
import "./Supporter.css";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import { Slider } from "@lifarl/react-scroll-snap-slider";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <Slider>
          <ul>
              li
          </ul>
        <img src={instantDeliveryImg} alt="" />
        <img src={instantDeliveryImg} alt="" />
        <img src={instantDeliveryImg} alt="" />
       
      </Slider>
    </div>
  );
};

export default Supporter;