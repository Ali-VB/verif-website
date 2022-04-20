import React from "react";
import "./Features.css";
import image from "../../Assets/imgs/checked.png"
const Features = () => {
  return (
    <div>
      <div className="features-title-section">
        <img src={image} alt="checked "   />
        <h1 className="features-title">Features</h1>
      </div>
      <div className="features-section">
        <div className="feature-table">
          <div><h2 className="display-6 fs-4" >CEO Impersonation</h2></div>
          <div><h2 className="display-6 fs-4">Provider Impersonation</h2></div>
          <div><h2 className="display-6 fs-4">Dangerous files detection</h2></div>
          <div><h2 className="display-6 fs-4">Email Address Blacklist</h2></div>
          <div><h2 className="display-6 fs-4">URL Blacklist</h2></div>
          <div><h2 className="display-6 fs-5">DKIM/DMARC/SPF failure</h2></div>
          <div><h2 className="display-6 fs-5">Language analysis using A.I.</h2></div>
          <div><h2 className="display-6 fs-4">More ...</h2></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
