import React from "react";
import { verifLogo } from "../../Assets/imgs/logo_verif_white.";
function Navbar() {
  return (
    <div className="nav-bg">
      <img src={verifLogo} alt="verif-logo" />
    </div>
  );
}

export default Navbar;
