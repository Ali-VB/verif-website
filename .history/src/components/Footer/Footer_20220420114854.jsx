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
            <a href=""> About Us </a>
             <a href=""> Pricing </a>
             <a href=""> Contact Us </a>
          </div>
          <div class="col-6 footer-right-part">
             <a href=""> <BsTwitter /> </a>
             <a href=""> <BsYoutube /> </a>
             <a href=""> <RiInstagramFill /> </a>
          </div>
        </div>
      </div>


      <div class="container">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 border-top-2  bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>


</div>



    </div>




  );
};

export default Footer;
