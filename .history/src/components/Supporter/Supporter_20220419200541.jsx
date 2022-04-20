import React from "react";
import "./Supporter.css";
import instantDeliveryImg from "../../Assets/imgs/instant-Delivery.png";
import { Slider } from "@lifarl/react-scroll-snap-slider";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <Slider>
        <div>Foo</div>
        <div>Bar</div>
        <div>Baz</div>
      </Slider>
    </div>
  );
};

export default Supporter;
