import React from "react";
import "./Footer.css";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container ">
        <div class="row">
          <div class="col-6  footer-left-part">
          <a href=""> <BsTwitter /> </a>
             <a href=""> <BsYoutube /> </a>
             <a href=""> <RiInstagramFill /> </a>
          </div>

          <div class="col-6 footer-right-part">
           
             <a href=""> <BsTwitter /> </a>
             <a href=""> <BsYoutube /> </a>
             <a href=""> <RiInstagramFill /> </a>
        
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;