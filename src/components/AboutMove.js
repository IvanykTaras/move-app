import React, { useEffect, useState } from "react";
import "../Main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AboutMove() {
  const [loading, setLoading] = useState(false);
  const [loadText, setLoadText] = useState("Loading");
  const [countDots, setCountDots] = useState(0);
  const [move, setMove] = useState("");

  const fetchMove = async () => {

    const moveId = localStorage.getItem('moveId'); 
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${moveId}?api_key=f10ea8e6747cbdf19dae45ea69493555&language=en-US`
      );
      const move = await response.json();

      setLoading(false);
      setMove(() => move);
    } catch (err) {
      setLoading(false);
      console.log(err + "HERE ________________________________");
    }
    console.log("here");
    console.log(move);
  };

  useEffect(() => {
    fetchMove();
  }, []);

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

  if (loading) {
    return (
      <div>
        <h1 className="loading">{loadText}</h1>
      </div>
    );
  }

  return (
    <section>
      <div className="Container d-flex">
        <aside className="animate__animated animate__backInLeft">
          {move.poster_path && (
            <img
              className="move-poster one-edge-shadow"
              src={`http://image.tmdb.org/t/p/original${move.poster_path}`}
              alt="asdf"
            />
          )}
        </aside>
        <article className="animate__animated animate__backInRight">
          <h1 className="header-title glow">{move.original_title}</h1>
          <p>{move.overview}</p>
          <Link
            to="/"
            className="link vamp one-edge-shadow"
            onClick={() => {
              localStorage.removeItem('moveId');
            }}
          >
            Back to search
          </Link>
        </article>
      </div>
    </section>
  );
}
