import React from "react";
import "./Supporter.css";
import { Slider } from "@lifarl/react-scroll-snap-slider";
import montrealLogo from "../../Assets/imgs/montreal.png";
import bankNational from "../../Assets/imgs/bank-national.png";
import bmo from "../../Assets/imgs/bmo.png";
import cent from "../../Assets/imgs/cent.png";
import google from "../../Assets/imgs/google.png";
import fondation from "../../Assets/imgs/logo-fondation-jab-1.png";
import microsoft from "../../Assets/imgs/microsoft.png";
import mtlInc from "../../Assets/imgs/mtlInc.png";
import startUp from "../../Assets/imgs/startUp.png";
import nextai from "../../Assets/imgs/nextai.png";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <div>
        <Slider>
        <img src={montrealLogo} alt="" />
        <img src={startUp} alt="" />
        <img src={bmo} alt="" />
          {/* <ul>
            <li>
              <img src={montrealLogo} alt="" />
            </li>
            <li>
              <img src={startUp} alt="" />
            </li>
            <li>
              <img src={bmo} alt="" />
            </li>
            <li>
              <img src={nextai} alt="" />
            </li>
          </ul> */}
        </Slider>
      </div>
    </div>
  );
};

export default Supporter;
