import React from "react";
import "./AiSection.css";
import image from "../../Assets/imgs/VERIF_icon.png";
import screenShotOne from "../../Assets/imgs/ScreenShot-1.png";
import screenShotTwo from "../../Assets/imgs/ScreenShot-2.png";
import verifRedIMG from "../../Assets/imgs/verif-red.jpeg";
import verifGreenIMG from "../../Assets/imgs/verif-green.jpeg";
import verifRedIMG from "../../Assets/imgs/verif-red-sender.jpeg";
// import Pulse from 'react-reveal/Pulse';
// import { useCallback, useState } from "react";
// import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import mediumZoom from 'medium-zoom'

function ImageZoom({ zoom, src, alt, background }) {
  const zoomRef = React.useRef(zoom.clone({ background }))
 
  function attachZoom(image) {
    zoomRef.current.attach(image)
  }
 
  return <img src={src} alt={alt} ref={attachZoom} />
}

const AiSection = () => {
  const zoom = React.useRef(mediumZoom({ background: '#000', margin: 48 }))
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
      <ImageZoom src={verifRedIMG} alt="Image" zoom={zoom.current} color="#BADA55" />
      <ImageZoom src={verifGreenIMG} alt="Image" zoom={zoom.current} color="#BADA55" />
      <ImageZoom src={verifGreenIMG} alt="Image" zoom={zoom.current} color="#BADA55" />

        {/* <Pulse delay={700} right> */}

        {/* <Zoom>
          <img src={screenShotOne} alt="screenShotOne" width="600" />
        </Zoom>

        <Zoom>
          <img src={screenShotTwo} alt="screenShotOne" width="600" />
        </Zoom> */}
        {/* </Pulse> */}
      </div>
    </div>
  );
};

export default AiSection;
