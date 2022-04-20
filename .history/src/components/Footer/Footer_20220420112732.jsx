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
            <span>About Us</span>
            <span>Pricing</span>
            <span>Contact Us</span>
          </div>

          <div class="col-6 footer-right-part">
           
             <a href=""> <BsTwitter /> </a>
             <a href=""> <BsYoutube /> </a>
             <a href=""> <BsTwitter /> </a>
        
            <span>
              <BsYoutube />
            </span>
            <span>
              <RiInstagramFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
