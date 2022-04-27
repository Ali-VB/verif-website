import React from "react";
import "./Supporter.css";
import SupporterItem from "./SupporterItem";
import Marquee from "react-fast-marquee";

const Supporter = () => {
  return (
    <div>
    <div className="aiSection-title-section">
  
    <h1 className="text-center">They support us</h1>
  </div>

    <div className="supporter-section">
      <Marquee>
        <SupporterItem />
        <SupporterItem />
        <SupporterItem />
      </Marquee>
    </div>

    </div>
  );
};

export default Supporter;
