import React, { useEffect, useState } from "react";
import "../Main.css";

export default function AboutMove() {
  const [loadText, setLoadText] = useState("Loading");
  const [countDots, setCountDots] = useState(0);

  const loadEffect = () => {
    if (countDots === 0) {
      setCountDots(1);
      setLoadText("Loading.");
    } else if (countDots === 1) {
      setCountDots(2);
      setLoadText("Loading..");
    } else if (countDots === 2) {
      setCountDots(3);
      setLoadText("Loading...");
    } else {
      setCountDots(0);
      setLoadText("Loading");
    }
  };

  useEffect(() => {
    const interval = setInterval(loadEffect, 100);
    return () => clearInterval(interval);
  }, [loadText]);


  return <div>sadf</div>;
}
