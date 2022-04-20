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
          <div><h2 className="display-6 fs-2">Provider Impersonation</h2></div>
          <div><h2 className="display-6 fs-2">Dangerous files detection</h2></div>
          <div><h2 className="display-6 fs-2">Email Address Blacklist</h2></div>
          <div><h2 className="display-6 fs-2">URL Blacklist</h2></div>
          <div><h2 className="display-6 fs-3">DKIM/DMARC/SPF failure</h2></div>
          <div><h2 className="display-6 fs-3">Language analysis using A.I.</h2></div>
          <div><h2 className="display-6 fs-2">More ...</h2></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
