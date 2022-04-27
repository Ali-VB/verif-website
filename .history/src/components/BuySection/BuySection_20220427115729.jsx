import React from "react";
import { Link } from "react-router-dom";
import noDemoImg from "../../Assets/imgs/noDemoImg.png";
import "./BuySection.css";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
const BuySection = () => {
  return (
    // <Pulse delay={700} right>

    <div className=" BuySection">
      <div className="leftPart text-secondary fw-light ">
        <Fade delay={500} duration={1500} top cascade>
        <ul class="">
          <li>No lengthy demos </li>
          <li>No professional services</li>
          <li>No price quotation</li>
          <li>Instant pricing and implementation!</li>
        </ul>
        </Fade >
        <Link   className="link"to="/contact"> 
         <button type="button" class="btn d-inline btn-outline-success btn-lg">
          Buy
        </button> 
         </Link>
       
      </div>
      
        <img src={noDemoImg} alt="noDemoImg" />
     
    </div>

    // </Pulse>
  );
};

export default BuySection;
