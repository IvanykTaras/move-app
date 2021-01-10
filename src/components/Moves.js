import React, { useState, useEffect } from "react";
import "../Main.css";

 //React router
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Move from "./Move";

export default function Moves({ url, setMoveId }) {
  const [move, setMove] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadText, setLoadText] = useState("Loading");
  const [countDots, setCountDots] = useState(0);

  const fetchMove = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const moves = await response.json();

      setLoading(false);
      setMove(moves);
    } catch (err) {
      setLoading(false);
      console.log(err + "HERE ________________________________");
    }
    console.log(move);
  };

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
    fetchMove();
  }, [url]);

  useEffect(() => {
    const interval = setInterval(loadEffect, 100);
    return () => clearInterval(interval);
  }, [loadText]);

  if (loading) {
    return (
      <div>
        <h1 className="loading">{loadText}</h1>
      </div>
    );
  }

  if (move.errors) {
    return <></>;
  }

  return (
    <div className="Container">
      
        <div className="move-blocks">
          {move.results
            ? move.results.map((move, index) => {
                return <Move key={index} move={move} setMoveId={setMoveId}/>;
              })
            : ""}
        </div>
      
    </div>
  );
}
