import React from "react";
import "./Features.css";
import image from "../../Assets/imgs/checked.png";
const Features = () => {
  return (
    <div>
      <div className="features-title-section">
        <img src={image} alt="checked " />
        <h1 className="features-title">Features</h1>
      </div>
      <div className="features-section">
        {/* <div className="feature-table">
          <div><h2 className="display-6 fs-3" >CEO Impersonation</h2></div>
          <div><h2 className="display-6 fs-3">Provider Impersonation</h2></div>
          <div><h2 className="display-6 fs-3">Dangerous files detection</h2></div>
          <div><h2 className="display-6 fs-3">Email Address Blacklist</h2></div>
          <div><h2 className="display-6 fs-3">URL Blacklist</h2></div>
          <div><h2 className="display-6 fs-4">DKIM/DMARC/SPF failure</h2></div>
          <div><h2 className="display-6 fs-4">Language analysis using A.I.</h2></div>
          <div><h2 className="display-6 fs-3">More ...</h2></div>
        </div> */}
        <div class="container ">
          <div class="row g-0">
            <div class="col-sm-6 col-md-6 col-lg-3 ">
              <div class="p-3 border-bottom border-end  border-2 display-6 text-center text-secondary">
                CEO Impersonation
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 ">
              <div class="p-3 border-bottom border-end  border-2 display-6 text-center text-secondary">
                Provider Impersonation
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 ">
              <div class="p-3 border-bottom border-end  border-2 display-6 text-center text-secondary">
                Dangerous files detection
              </div>
            </div>
            <div class="col-sm-6 col-md-6  col-lg-3 ">
              <div class="p-3 border-bottom   border-2 display-6 text-center text-secondary">
                Email Address Blacklist
              </div>
            </div>
          </div>

          <div class="row g-0">
            <div class="col-sm-6 col-md-6  col-lg-3 ">
              <div class="p-4   border-end text-center border-2 display-6 text-secondary">
                URL Blacklist
              </div>
            </div>
            <div class=" col-sm-6 col-md-4 col-lg-3 ">
              <div class="p-3  border-end  border-2 display-6 text-center fs-2 text-secondary">
                DKIM/DMARC/SPF failure
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div class="p-3  border-end  border-2 display-6 text-center fs-2 text-secondary">
                Language analysis using A.I.
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 ">
              <div class="p-3  border-2 display-6 text-center text-secondary">
                More ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
