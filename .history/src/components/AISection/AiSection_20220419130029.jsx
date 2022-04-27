import React from "react";
import "./AiSection.css";
import image from "../../Assets/imgs/VERIF_icon.png";

const AiSection = () => {
  return (
    <div>
      <div className="aiSection-title-section">
        <img className="mt-2" src={image} alt="verif-icon " />
        <h1 className="text-center">Artificial Intelligence (NLP)</h1>
        <h2 className="text-center">
          allows us to detect suspicious sentences
        </h2>
      </div>
      <div className="aiSection-section"></div>
    </div>
  );
};

export default AiSection;