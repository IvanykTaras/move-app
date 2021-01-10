import React, { useRef, useEffect, useState } from "react";

import "./Main.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components

import AboutMove from "./components/AboutMove";
import Header from "./components/Header";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=f10ea8e6747cbdf19dae45ea69493555&query=";

function App() {
  const [moveId, setMoveId] = useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/more">
            <AboutMove moveId={moveId} />
          </Route>
          <Route path="/">
            <Header url={url}  />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
