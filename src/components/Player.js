import React from "react";
import "../styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function Player({ spotify }) {
  return (
    <Router>
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={ spotify } />

        <Switch>
        <Route path="/Home">
        <Body spotify={spotify} />
        </Route>
        <Route path="/Search">
        <Header spotify={spotify}/>
        </Route>
        </Switch>

      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default Player;