import React from "react";
import "./Footer.css";
import {  BsTwitter} from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="footer-section ">
      <div className="container ">
          <div className="footer-left-part">
              <span>About Us</span>
              <span>Pricing</span>
              <span>Contact Us</span>
          </div>
        <div className="footer-right-part">
        <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
