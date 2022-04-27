import React from "react";
import "../Header/Header.css"

const BelowHeader = () => {
  return (
    <div className="text-second">
      <div >
        If a phishing attack reaches their inbox,
      </div>
      <div className="employee">3.18% of employees</div>
      <div >
        will go as far as providing credentials!
      </div>
      <button type="button" class="btn  btn-outline-success btn-lg">
          Try Verif.A.I
        </button> 
    </div>
  );
};

export default BelowHeader;
