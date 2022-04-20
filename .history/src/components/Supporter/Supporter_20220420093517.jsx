import React from "react";
import "./Supporter.css";
import SupporterItem from "./SupporterItem";
import {Marquee,pauseOnHover} from "react-fast-marquee";

const Supporter = (pauseOnHover) => {
  return (
    <div className="supporter-section">
         <Marquee >
         <SupporterItem  />
         <SupporterItem />
         <SupporterItem pauseOnHover="true"/>
    
         </Marquee>
    </div>
  );
};

export default Supporter;
