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
        <div className="leftPart text-secondary fw-light ">
          <Fade delay={500} duration={1500} top cascade>
            <ul class=" fw-light  text-secondary">
              <li><span>CEO Impersonation</span> </li>
              <li><span>Provider Impersonation</span></li>
              <li><span>Dangerous files detection</span></li>
              <li><span>Email Address Blacklist</span></li>
              <li><span>URL Blacklist</span></li>
              <li><span>DKIM/DMARC/SPF failure</span></li>
              <li><span>AI section</li>
            </ul>
          </Fade>
        </div>

        <img src={feature} alt="feature" />
      </div>
    </div>
  );
};

export default Feature;
