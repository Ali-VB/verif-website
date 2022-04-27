import React from "react";

const Test = () => {
  return (
    <div class="container mt-5 mb-5">
      <div class="row g-0">
        <div class="col-3">
          <div class="p-3 border-bottom border-end  border-2 ">
          CEO Impersonation
          </div>
        </div>
        <div class="col-3">
          <div class="p-3 border-bottom border-end  border-2 ">
          Provider Impersonation
          </div>
        </div>
        <div class="col-3">
          <div class="p-3 border-bottom border-end  border-2 ">
          Dangerous files detection
          </div>
        </div>
        <div class="col-3">
          <div class="p-3 border-bottom   border-2 ">Email Address Blacklist</div>
        </div>
      </div>

      <div class="row g-0">
        <div class="col-3">
          <div class="p-3  border-end  border-2 ">URL Blacklist</div>
        </div>
        <div class="col-3">
          <div class="p-3  border-end  border-2 ">
          DKIM/DMARC/SPF failure
          </div>
        </div>
        <div class="col-3">
          <div class="p-3  border-end  border-2 ">
          Language analysis using A.I.
          </div>
        </div>
        <div class="col-3">
          <div class="p-3  border-2 ">More ...</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
