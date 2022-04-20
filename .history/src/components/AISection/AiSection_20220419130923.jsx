import React from "react";
import "./AiSection.css";
import image from "../../Assets/imgs/VERIF_icon.png";
import {screenShotOne} from "../../Assets/imgs/"
const AiSection = () => {
  return (
    <div>
      <div className="aiSection-title-section">
        <img className="mb-2" src={image} alt="verif-icon " />
        <h1 className="text-center">Artificial Intelligence (NLP)</h1>
        <h2 className="text-center">
          allows us to detect suspicious sentences
        </h2>
      </div>
      <div className="aiSection-section">
          <img src="" alt="" />
          <img src="" alt="" />
      </div>
    </div>
  );
};

export default AiSection;
