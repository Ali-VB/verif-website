import React from "react";
import Fade from "react-reveal/Fade";
import feature from "../../Assets/imgs/feature.png";
import image from "../../Assets/imgs/checked.png";
import "./Feature.css";
const Feature = () => {
  return (
    <div>

     <div className="feature-title-section">
        <img src={image} alt="checked " />
        <h1 className="feature-title">Features</h1>
      </div>
      <div className="feature-section">
       
        <div className="leftPart text-secondary fw-light display-6">
          <Fade delay={500} duration={1500} top cascade>
            <ul class=" fw-light display-6 text-secondary">
              <li>CEO Impersonation </li>
              <li>No professional services</li>
              <li>No price quotation</li>
              <li>Instant pricing and implementation!</li>
            </ul>
          </Fade>
        </div>

        <img src={feature} alt="feature" />
      </div>
      
    </div>
  );
};

export default Feature;
