import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../data/DataLayer";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


function Sidebar({spotify}) {
  const [{ playlists }] = useDataLayerValue();

  return (
    <Router>
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

      <nav>
      <Link to="/Home"><SidebarOption title="Home" Icon={HomeIcon} /></Link>
      <Link to="/Search"><SidebarOption title="Search" Icon={SearchIcon} /></Link>
      <Link to="/Library"><SidebarOption title="Your Library" Icon={LibraryMusic}/></Link>
        </nav>

      <Switch>
        <Route path="/Search">
          <h1>Hola Search</h1>
        </Route>
        <Route path="/Library">
          <h1>Hola Library</h1>
        </Route>
      </Switch>

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
      })}
    </div>
    </Router>
  );
}

export default Sidebar;