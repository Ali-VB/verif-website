import React from "react";
import React, {Component} from 'react';
import Typist from "react-typist";
import "./Header.css";

// export default function Header() {
//   return (
//     <div className="header-animated">
//       {/* <Typist className="text-danger">Animate this text.</Typist> */}
//       <Typist className=" header-first-text display-4">
//         Cyber intrusion activity jumped 125% in 2021
//       </Typist>
//       {/* <h2 className=" header-second-text display-4">
//         If a phishing attack reaches their inbox, 3.18% of employees will go as
//         far as providing credentials!
//       </h2> */}
//     </div>
//   );
// }
 
export default class Header extends Component {
 
    render() {
      return (
        <Typist>
          Animate this text.
        </Typist>
      );
    }
  }
