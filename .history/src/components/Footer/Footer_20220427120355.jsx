import React from "react";
import { Link} from "react-router-dom";
import "./Footer.css";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="container footer-section">
      <div className=" ">
        
          <div class=" footer-left-part">
          <Link className="link" to="/about" ><span> About Us</span></Link>
          <Link className="link" to="/contact" ><span>Pricing</span></Link>
          <Link className="link" to="/contact" ><span> Contact Us </span></Link>
          </div>
          <div class=" footer-right-part">
             <a href=""> <BsTwitter /> </a>
             <a href=""> <BsYoutube /> </a>
             <a href=""> <RiInstagramFill /> </a>
          </div>
       
      </div>
    </div>
  );
};

export default Footer;
