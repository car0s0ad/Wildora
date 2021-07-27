import React from "react";
import { useState } from "react";

import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import { useDataLayerValue } from "../data/DataLayer";

import "../styles/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import Search from "./Search";
// import Search from "./Search";
// import ApiManager from "../LocalApi/ApiManager"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Header from "./Header";

// const Player = ( spotify , props) => {
//   const [{ playlists }] = useDataLayerValue();  //from sidebar.js
  // const [token, setToken] = useState("")

  // console.log("props player ",props)
function Player({ spotify }) {
    const [{ playlists }] = useDataLayerValue();  //from sidebar.js
  
  return (
    <Router>
      
    <div className="player">
      <div className="player__body">
        
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <nav>
      <Link to="/Inicio"><SidebarOption title="Inicio" Icon={HomeIcon} /></Link>
      <Link to="/Buscar"><SidebarOption title="Buscar" Icon={SearchIcon} /></Link>
      <Link to="/Listas"><SidebarOption title="Listas" Icon={AudiotrackIcon}/></Link>
      <Link to="/UsarApi"><SidebarOption title="Consumir API" Icon={AudiotrackIcon}/></Link>
      <br></br>
      </nav>
      <strong className="sidebar__title">YOUR PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
      })}
    </div>
    
<article className="body">

    <Switch>
      <Route path="/Inicio">
      <Header />
      </Route>

      <Route path="/Buscar">
        {/* <Search ingresoToken={token}/> */}
      </Route>

      <Route path="/Listas">
        <Body />
      </Route>
        {/* <ApiManager/> */}
      {/* <Route path="/UsarApi">
        
      </Route> */}
    </Switch>

    </article>


      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default Player