import React from "react";
import "./Supporter.css";
import SupporterItem from "./SupporterItem";
import Marquee from "react-fast-marquee";

const Supporter = () => {
  return (
    <div>
    <div className="aiSection-title-section">
  
    <h1 className="text-center">Artificial Intelligence (NLP)</h1>
    <h2 className="text-center">
      allows us to detect suspicious sentences
    </h2>
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
