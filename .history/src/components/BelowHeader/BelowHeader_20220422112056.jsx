import React from "react";
import "../Header/Header.css"

const BelowHeader = () => {
  return (
    <div className="text-second">
      <span >
        If a phishing attack reaches their inbox,
      </span>
      <span >3.18% of employees</span>
      <span className="text-second-span">
        will go as far as providing credentials!
      </span>
      <button type="button" class="btn  btn-outline-success btn-lg">
          Try Verif.A.I
        </button> 
    </div>
  );
};

export default BelowHeader;
