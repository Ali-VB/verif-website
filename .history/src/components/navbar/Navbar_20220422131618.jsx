import React from "react";
import { Link ,NavLink} from "react-router-dom";
import "./Navbar.css";
import verifLogo from "../../Assets/imgs/logo_verif_white.png";
import Header from "../Header/Header";


function Navbar() {
  
  const navLinkStyles =({isActive})=>{
   return{
     fontWeight: isActive? 'bold': 'normal',
     color:isActive? '#40B3AC': 'white',
    }
  }
  return (
    <div className="container">
      <div className=" navbar">
      <Link className="link" to="/" ><img className="verif-logo" src={verifLogo} alt="verif-logo" /></Link>
        <div>
        <ul className="navLink">
          
            <li><NavLink style={navLinkStyles} className="link" to="/" >  Home </NavLink></li>
      
            <li><NavLink style={navLinkStyles} className="link"  to="/contact">Contact   </NavLink></li>
      
            <li>  <NavLink style={navLinkStyles} className="link" to="/about">About Us   </NavLink></li>

            <li><NavLink  style={navLinkStyles} className="link" to="/contact">Pricing  </NavLink></li>
       
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
