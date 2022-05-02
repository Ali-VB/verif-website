import React from "react";
import { Link} from "react-router-dom";
import "./Footer.css";
import { BsTwitter, BsLink } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className=" footer-section">
      {/* <div className=" "> */}
        
          <div class=" footer-left-part">
          <Link className="link" to="/about" ><span> About Us</span></Link>
          <Link className="link" to="/contact" ><span>Pricing</span></Link>
          <Link className="link" to="/contact" ><span> Contact Us </span></Link>
          </div>

          <div class=" footer-right-part">
             <a href=""> <BsTwitter /> </a>
             <a href="https://www.linkedin.com/company/verifai-security/"> <BsYoutube /> </a>
             <a href="https://www.facebook.com/verifaiphishing"> <RiInstagramFill /> </a>
          </div>
       
      {/* </div> */}
    </div>
  );
};

export default Footer;
