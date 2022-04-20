import React from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
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
           <span ><BsTwitter /></span> 
           <span><BsTwitter /></span> 
           <span><BsTwitter /></span> 
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
