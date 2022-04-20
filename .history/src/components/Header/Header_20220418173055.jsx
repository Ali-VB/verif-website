import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-animated">
      <h1 className="h1">
        <span className="text-first-span">Cyber</span>
        <span className="text-first-span">intrusion</span>
        <span className="text-first-span">activity</span>
        <span className="text-first-span">jumped</span>
        <span className="text-first-span">125% in 2021</span>
      </h1>
      <h1 className="h3">
        <div className="text-second-span">reaches their inbox,</div>
        <div className="text-second-span">If a phishing attack</div>
        <div className="text-second-span">3.18% of employees</div>
        <div className="text-second-span">will go as far as providing credentials!</div>
      </h1>
    </div>
  );
}
