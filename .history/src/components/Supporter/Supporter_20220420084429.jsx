import React from "react";
import "./Supporter.css";
import SupporterItem from "./SupporterItem";
import Marquee from "react-fast-marquee";

const Supporter = (props) => {
  return (
    <div className="supporter-section">
         <Marquee >
         <SupporterItem  />
         <SupporterItem pauseOnHover={props.pauseOnHover=}/>
         <SupporterItem pauseOnHover="true"/>
    
         </Marquee>
    </div>
  );
};

export default Supporter;
