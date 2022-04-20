import React from "react";
import "./AiSection.css";
import image from "../../Assets/imgs/checked.png"

const AiSection = () => {
  return (
    <div>
      <div className="aiSection-title-section">
      <img src={image} alt="checked "   />
        <h1 className="text-center">Artificial Intelligence (NLP)</h1>
        <h2 className="text-center">allows us to detect suspicious sentences</h2>
      </div>
      <div className="aiSection-section"></div>
    </div>
  );
};

export default AiSection;
