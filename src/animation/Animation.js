import React, { useState, useEffect } from "react";

const TextAnimation = ({ text}) => {
  // State for the text index
  const [textIndex, setTextIndex] = useState(0);

  // Use useEffect to call the animateText function every 100 milliseconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (textIndex >= text.length) {
        clearInterval(intervalId);
      } else {
        setTextIndex(textIndex + 1);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [textIndex, text.length]);


  return (
    <p className="text-animation">
      {text.substring(0, textIndex)}
      <span className="cursor">|</span>
    </p>
  );
};

export default TextAnimation;
