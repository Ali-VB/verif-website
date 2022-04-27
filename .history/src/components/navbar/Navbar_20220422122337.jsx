import React from "react";
import { Link ,NavLink} from "react-router-dom";
import "./Navbar.css";
import verifLogo from "../../Assets/imgs/logo_verif_white.png";
import Header from "../Header/Header";


function Navbar() {
  return (
    <div className="container">
      <div className=" navbar">
      <Link className="link" to="/" ><img className="verif-logo" src={verifLogo} alt="verif-logo" /></Link>
        <div>
        <ul className="navLink">
          
            <li><Link className="link" to="/" >  Home </Link></li>
      
            <li><NavLink  className={isActive =>
    "link" + (!isActive ? " unselected" : "active")
  }  to="/contact">Contact   </NavLink></li>
      
            <li>  <Link  className="link" to="/about">About Us   </Link></li>

            <li><Link  className="link" to="/contact">Pricing  </Link></li>
       
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
