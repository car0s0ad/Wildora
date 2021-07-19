import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../data/DataLayer";

function Sidebar({spotify}) {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png"
        alt="Spotify logo"
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic}/>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
      })}
    </div>
  );
}

export default Sidebar;