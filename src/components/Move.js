import React from "react";
import "../Main.css";

//React router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Move({ move }) {
  return (
    <Link
      to="/more"
      className="move-block one-edge-shadow animate__animated animate__fadeInRight"
      onClick={() => {
        localStorage.setItem("moveId", move.id);
      }}
    >
      {move.poster_path && (
        <img
          className="move-img"
          src={`http://image.tmdb.org/t/p/original${move.poster_path}`}
          alt="asdf"
        />
      )}
      <div className="move-description">
        <p className="move-name">
          <b>Title:</b> {move.title}
        </p>
        <samp className="move-year">
          <b>Year:</b> {move.release_date}
        </samp>
      </div>
    </Link>
  );
}
