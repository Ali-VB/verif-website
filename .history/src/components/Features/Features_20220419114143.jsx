import React from "react";
import "./Features.css";
const Features = () => {
  return (
    <div>
      <div className="features-title-section">
        <h1 className="features-title">Features</h1>
      </div>
      <div className="features-section">
        <div className="feature-table">
          <div><h4 className="display-3">CEO Impersonation</h4></div>
          <div><h4>Provider Impersonation</h4></div>
          <div><h4>Dangerous files detection</h4></div>
          <div><h4>Email Address Blacklist</h4></div>
          <div><h4>URL Blacklist</h4></div>
          <div><h4>DKIM/DMARC/SPF failure</h4></div>
          <div><h4>Language analysis using A.I.</h4></div>
          <div><h4>More ...</h4></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
