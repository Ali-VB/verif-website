import React from "react";
import { Link} from "react-router-dom";
import "./Footer.css";
import { BsTwitter, BsLinkedin ,BsFacebook} from "react-icons/bs";
// import { RiFacebook } from "react-icons/ri";
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
             {/* <a target="_blank" href=""> <BsTwitter /> </a> */}
             <a target="_blank" href="https://www.linkedin.com/company/verifai-security/"> <BsLinkedin /> </a>
             <a target="_blank" href="https://www.facebook.com/verifaiphishing"> <BsFacebook /> </a>
          </div>
       
      {/* </div> */}
    </div>
  );
};

export default Footer;
