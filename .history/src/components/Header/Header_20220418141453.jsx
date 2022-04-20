import React, { useEffect } from "react";

import "./Header.css";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Cyber intrusion activity jumped 125% in 2021",
  "If a phishing attack reaches their inbox, 3.18% of employees will go as far as providing credentials!",
];

const default fHeader = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};
// export default function Header() {
//   return (
//     <div className="header-animated">

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
