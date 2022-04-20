import React from "react";
import "./Supporter.css";
import Slider from "react-styled-carousel";
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

const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
  ];
const Supporter = () => {
  return (
    <div className="supporter-section">
        
      <Slider reponsive={responsive}>
    <div><img src={montrealLogo} alt="" /></div>    
        <img src={startUp} alt="" />
      </Slider>
      <Slider reponsive={responsive}>
      <img src={startUp} alt="" />
      </Slider>
      <Slider reponsive={responsive}>
      <img src={bmo} alt="" />
      </Slider>
      <Slider reponsive={responsive}>
      <img src={nextai} alt="" />
      </Slider>
      
       
   
      {/* <img src={montrealLogo} alt="" />
        <img src={startUp} alt="" />
        <img src={bmo} alt="" />
        <img src={nextai} alt="" /> */}
    </div>
  );
};

export default Supporter;
