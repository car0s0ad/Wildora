import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../data/DataLayer";
import {BrowserRouter as Router, Link} from "react-router-dom";


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
      </nav>

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