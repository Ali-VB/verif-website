import React from "react";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container ">
        <div class="row">
          <div class="col">
            <span>About Us</span>
            <span>Pricing</span>
            <span>Contact Us</span>
          </div>

          <div class="col">   <BsTwitter /></div>
        </div>
        <div className="footer-left-part"></div>
        <div className="footer-right-part">
        </div>
      </div>
    </div>
  );
};

export default Footer;
