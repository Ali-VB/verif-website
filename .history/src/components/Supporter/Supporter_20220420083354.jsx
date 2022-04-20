import React from "react";
import "./Supporter.css";
import SupporterItem from "./SupporterItem";
import Marquee from "react-fast-marquee";

const Supporter = () => {
  return (
    <div className="supporter-section">
         <Marquee>
         <SupporterItem pa/>
         <SupporterItem />
         <SupporterItem />
    
         </Marquee>
    </div>
  );
};

export default Supporter;
