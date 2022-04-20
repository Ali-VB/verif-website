import React from "react";
import "./Navbar.css";
import verifLogo from "../../Assets/imgs/logo_verif_white.png";
function Navbar() {
  return (
    <div className="nav-bg">
      <div className="navbar"></div>
      <img  className="verif-logo" src={verifLogo} alt="verif-logo" />
    </div>
  );
}

export default Navbar;
