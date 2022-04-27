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
        <br></br>
        <span className="text-first-span">125% in 2021</span>
        <br></br>
        <span className="text-first-span">
          <a
            className=" font-monospace"
            href="https://newsroom.accenture.com/news/global-cyber-intrusion-activity-more-than-doubled-in-first-half-of-2021-according-to-accentures-cyber-incident-response-update.htm"
          >
            - Accenture -
          </a>
        </span>
      </div>
    </div>
  );
}
