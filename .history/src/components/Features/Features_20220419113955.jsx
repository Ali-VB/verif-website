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
          <div><h3>CEO Impersonation</h3></div>
          <div><h3>Provider Impersonation</h3></div>
          <div><h3>Dangerous files detection</h3></div>
          <div><h3>Email Address Blacklist</h3></div>
          <div><h3>URL Blacklist</h3></div>
          <div><h3>DKIM/DMARC/SPF failure</h3></div>
          <div><h3></h3>Language analysis using A.I.</div>
          <div><h3>More ...</h3></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
