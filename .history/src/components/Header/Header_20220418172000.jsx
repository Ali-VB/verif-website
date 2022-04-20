import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-animated">
      <h1 className="h">
        <span className="span">Cyber</span>
        <span className="span">intrusion</span>
        <span className="span">activity</span>
        <span className="span">jumped</span>
        <span className="span">125% in 2021</span>
      </h1>
      <h1 className="h3">
        <div className="div">If a phishing attack</div>
        <div className="div">reaches their inbox,</div>
        <div className="div">3.18% of employees</div>
        <div className="div">will go as far as providing credentials!</div>
      </h1>
    </div>
  );
}
