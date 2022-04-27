import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import verifLogo from "../../Assets/imgs/logo_verif_white.png";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs"

function Navbar() {
  return (
    <div className="container">
      <div className=" navbar">
        <img className="verif-logo" src={verifLogo} alt="verif-logo" />
        <div>
        <ul className="navLink">
          
            <li><Link to="/">  Home </Link></li>
         
          
            <li><Link to="/">Pricing  </Link></li>
        
          
            <li><Link to="/contact">Contact   </Link></li>
       
        
            <li>  <Link to="/about">About Us   </Link></li>
       
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
