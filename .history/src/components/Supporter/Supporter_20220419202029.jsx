import React from "react";
import "./Supporter.css";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import { Slider } from "@lifarl/react-scroll-snap-slider";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <div>
        <Slider>
          <ul>
            <li>
             1
            </li>
            <li>
              <img src={instantDeliveryImg} alt="" />
            </li>
            <li>
              <img src={instantDeliveryImg} alt="" />
            </li>
            <li>
              <img src={instantDeliveryImg} alt="" />
            </li>
            <li>
              <img src={instantDeliveryImg} alt="" />
            </li>
            <li>
              <img src={instantDeliveryImg} alt="" />
            </li>
          </ul>
        </Slider>
      </div>
    </div>
  );
};

export default Supporter;
