import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className=" container header-animated">
      <div className="text-first">
        <span className="text-first-span">Cyber</span>
        <span className="text-first-span">intrusion</span>
        <span className="text-first-span">activity</span>
        <span className="text-first-span">jumped</span>
        <br />
        <span className="text-first-span">125% in 2021</span>
        <br />
        <span className="text-first-span">
          <a
            className="text-monospace"
            target="_blank"
            href="https://newsroom.accenture.com/news/global-cyber-intrusion-activity-more-than-doubled-in-first-half-of-2021-according-to-accentures-cyber-incident-response-update.htm"
          >
            - accenture -
          </a>
        </span>
      </div>
    </div>
  );
}
