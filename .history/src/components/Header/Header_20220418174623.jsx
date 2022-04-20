import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-animated">
      <h1 className="text-first">
        <span className="text-first-span">Cyber</span>
        <span className="text-first-span">intrusion</span>
        <span className="text-first-span">activity</span>
        <span className="text-first-span">jumped</span>
        <span className="text-first-span">125% in 2021</span>
      </h1>
      <h1 className="text-second">
       <span className="text-second-span">If a phishing attack</span>
        <span className="text-second-span">reaches their inbox,</span>
        <span className="text-second-span">3.18% of employees</span>
        <span className="text-second-span">will go as far as providing credentials!</span>
      </h1>
    </div>
  );
}
