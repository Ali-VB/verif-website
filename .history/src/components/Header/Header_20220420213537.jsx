import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-animated">
      <div className="text-first">
        <span className="text-first-span">Cyber</span>
        <span className="text-first-span">intrusion</span>
        <span className="text-first-span">activity</span>
        <span className="text-first-span">jumped</span>
        <span className="text-first-span">125% in 2021</span>
        <span className="text-first-span fs-">--Accenture--</span>
      </div>
      <div className="text-second">
        <span className="text-second-span ">If a phishing attack reaches their inbox,</span>
        <span className="text-second-span">3.18% of employees</span>
        <span className="text-second-span">
          will go as far as providing credentials!
        </span>
      </div>
    </div>
  );
}
