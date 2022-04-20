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
import mtlInc from "../../Assets/imgs/import mtlInc from "../../Assets/imgs/montreal.png";
.png";
import montrealLogo from "../../Assets/imgs/montreal.png";

const Supporter = () => {
  return (
    <div className="supporter-section">
      <div>
        <Slider>
          <ul>
            <li>
              <img src={montrealLogo} alt="" />
            </li>
            <li>
              <img src={} alt="" />
            </li>
            <li>
              <img src={} alt="" />
            </li>
          </ul>
          
          
        </Slider>
      </div>
    </div>
  );
};

export default Supporter;
