import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-animated">
      <h1 className=" header-first-text text-danger display-5">
        Cyber intrusion activity jumped 125% in 2021
      </h1>
      <h2 className=" header-first-text text-primary ">
        If a phishing attack reaches their inbox, 3.18% of employees will go as
        far as providing credentials!
      </h2>
    </div>
  );
}
