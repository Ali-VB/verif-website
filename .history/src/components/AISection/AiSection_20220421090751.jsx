import React from "react";
import "./AiSection.css";
import image from "../../Assets/imgs/VERIF_icon.png";
import screenShotOne from "../../Assets/imgs/ScreenShot-1.png";
import screenShotTwo from "../../Assets/imgs/ScreenShot-2.png";
import Bounce from "react-reveal/Bounce";

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
          <Bounce right>
          <img src={screenShotOne} alt="screenShotOne" />
          <img src={screenShotTwo} alt="screenShotOne" />
        </div>
      </Bounce>
    </div>
  );
};

export default AiSection;
