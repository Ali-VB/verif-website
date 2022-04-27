import React from "react";
import "./Supporter.css";
import SupporterItem from "./SupporterItem";
import Marquee from "react-fast-marquee";

const Supporter = () => {
  return (
    <div>
    <div className="supporter-title-section">
    <h2 className="text-center">They support us</h2>
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
