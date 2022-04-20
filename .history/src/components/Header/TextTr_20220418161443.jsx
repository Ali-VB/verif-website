import React, { useState, useEffect } from "react";

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Forest",
  "Building",
  "Tree",
  "Color"
];

export default function TextTr  () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
  );
};