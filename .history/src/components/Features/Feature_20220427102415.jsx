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
        <div className="row">
          <div className="col-lg-6 col-md-12" >
            
          </div>
          <div className="col-lg-6 col-md-12" >

          </div>
        </div>
      

        <img src={feature} alt="feature" />
      </div>
    </div>
  );
};

export default Feature;
