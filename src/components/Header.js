import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import Moves from "./Moves";

export default function Header({url, setMoveId}) {
  const searchValue = useRef("");

  const [search, setSearch] = useState("");

  const [urlFetch, setUrlFetch] = useState(url);

  useEffect(() => {
    setUrlFetch(`${url}${search}`);
  });

  return (
    <>
      <header className="header-app">
        <div className="Container">
          <h1 className="header-title glow animate__animated animate__zoomIn">
            {search == "" ? "Search movies" : `Search move :=> ${search}`}
          </h1>
          <article className="search  animate__animated animate__zoomIn">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              onChange={() => setSearch(searchValue.current.value)}
              value={searchValue.current.value}
              type="text"
              ref={searchValue}
              className="search-form "
              placeholder="Search"
            />
          </article>
        </div>
      </header>

      <Moves url={urlFetch} setMoveId={setMoveId} />
    </>
  );
}
