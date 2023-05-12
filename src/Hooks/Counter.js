import React from "react";
import { useState } from "react";

export const UseCounter = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => prev - 1);
  };

  return { inc, dec, count };
};
