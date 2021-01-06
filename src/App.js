import React, { useRef, useEffect, useState } from "react";

import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Moves from "./components/Moves";
import AboutMove from "./components/AboutMove";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=f10ea8e6747cbdf19dae45ea69493555&query=";

function App() {
  const searchValue = useRef("");
  const [search, setSearch] = useState("");
  const [urlFetch, setUrlFetch] = useState(url);

  useEffect(() => {
    setUrlFetch(`${url}${search}`);
  });

  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/more">
            <AboutMove/>
          </Route>
          <Route path="/"> */}
            <header className="header-app">
              <div className="Container">
                <h1 className="header-title">
                  {search == "" ? "Search movies" : `Search move :=> ${search}`}
                </h1>
                <article className="search">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    onChange={() => setSearch(searchValue.current.value)}
                    value={searchValue.current.value}
                    type="text"
                    ref={searchValue}
                    className="search-form"
                    placeholder="Search"
                  />
                </article>
              </div>
            </header>

            <Moves url={urlFetch} />
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
