import React from "react";
import "./AiSection.css";
import image from "../../Assets/imgs/VERIF_icon.png";
import screenShotOne from "../../Assets/imgs/ScreenShot-1.png";
import screenShotTwo from "../../Assets/imgs/ScreenShot-2.png";
// import Pulse from 'react-reveal/Pulse';
import { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const AiSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
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
        {/* <Pulse delay={700} right> */}

        {/* <Zoom > */}
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <img src={screenShotOne} alt="screenShotOne" width="600" height={} />
        </ControlledZoom>
        {/* </Zoom> */}

        <img src={screenShotTwo} alt="screenShotOne" />
        {/* </Pulse> */}
      </div>
    </div>
  );
};

export default AiSection;
