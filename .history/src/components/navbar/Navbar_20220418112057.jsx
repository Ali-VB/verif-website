import React from "react";
import "./Navbar.css";
import verifLogo from "../../Assets/imgs/logo_verif_white.png";
function Navbar() {
  return (
    <div className="nav-bg">
      <div className="conta navbar">
        <img className="verif-logo" src={verifLogo} alt="verif-logo" />
        <ul className="navLink">
          <li>Home</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
