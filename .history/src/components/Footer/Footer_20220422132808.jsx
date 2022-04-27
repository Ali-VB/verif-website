import React from "react";
import { Link} from "react-router-dom";
import "./Footer.css";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container ">
        <div class="row">
          <div class="col-6  footer-left-part">
          <Link className="link" to="/about" ><span> About Us</span></Link>
          <Link className="link" to="/contact" ><span>Pricing</Link>
          <Link className="link" to="/contact" > Contact Us </Link>
           
            
        
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
