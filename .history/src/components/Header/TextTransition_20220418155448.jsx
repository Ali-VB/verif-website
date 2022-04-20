import React, { useState, useEffect } from "react";

import "./Header.css";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Cyber ", " phishing attack "];

export default function Header() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="text-danger">
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
}