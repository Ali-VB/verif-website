import React from "react";
import { verifLogo } from "../../Assets/imgs/logo_ver";
function Navbar() {
  return (
    <div className="nav-bg">
      <img src={verifLogo} alt="verif-logo" />
    </div>
  );
}

export default Navbar;
