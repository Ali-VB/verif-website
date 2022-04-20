import React from 'react'
import "./Supporter"
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

const SupporterItem = () => {
  return (
    <div className='supportItem'>
             <img className='w-2' src={montrealLogo} alt="" />
             <img  src={bankNational} alt="" />
             <img  src={bmo} alt="" />
             <img  className='w-2' src={cent} alt="" />
             <img  src={google} alt="" />
             <img  src={fondation} alt="" />
             <img  src={mtlInc} alt="" />
             <img  src={microsoft} alt="" />
             <img  src={nextai} alt="" />
             <img  src={startUp} alt="" />
             <img  src={mtlInc} alt="" />
    </div>
  )
}

export default SupporterItem