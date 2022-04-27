import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const BelowHeader = () => {
  return (
    <div className="text-second">
      <div>If a phishing attack reaches their inbox,</div>
      <div className="employee-class">3.18% of employees</div>
      <div>will go as far as providing credentials!</div>
      <Link className="link" to="/contact">
        <button type="button" class="btn btn-outline-success btn-lg">
          Try Verifa.i.
        </button>
      </Link>
    </div>
  );
};

export default BelowHeader;
