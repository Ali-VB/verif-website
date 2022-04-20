import React from "react";
import "./Header.css"
import TextTransition, { presets } from "react-text-transition";

export default function Header() {
  return (
    <div className="header-animated">
 <TextTransition
    text= {<h1 className=" header-first-text display-4">
    Cyber intrusion activity jumped 125% in 2021
  </h1>}
    springConfig={ presets.wobbly }
  />
      {/* <h1 className=" header-first-text display-4">
        Cyber intrusion activity jumped 125% in 2021
      </h1> */}
      {/* <h2 className=" header-second-text display-4">
        If a phishing attack reaches their inbox, 3.18% of employees will go as
        far as providing credentials!
      </h2> */}
    </div>
  );
}
