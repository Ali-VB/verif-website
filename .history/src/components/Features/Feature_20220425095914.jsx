import React from "react";
import Fade from 'react-reveal/Fade';
const Feature = () => {
  return (
    <div>
      <div className="  BuySection">
        <div className="leftPart text-secondary fw-light display-6">
          <Fade delay={500} duration={1500} top cascade>
            <ul class=" fw-light display-6 text-secondary">
              <li>No lengthy demos </li>
              <li>No professional services</li>
              <li>No price quotation</li>
              <li>Instant pricing and implementation!</li>
            </ul>
          </Fade>
        
        </div>

        <img src={instantDeliveryImg} alt="instantDeliveryImg" />
      </div>
    </div>
  );
};

export default Feature;
