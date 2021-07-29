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
import ApiManager from "../LocalApi/ApiManager"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Header from "./Header";
import Avatar1 from "./Avatar"
import MediaCardCaro from "./CardAboutUs_Caro";
import MediaCardMailen from "./CardAboutUs_Mailen";
import MediaCardFrann from "./CardAboutUs_Frann";


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
      <Link to="/#" exact path></Link>
      <Link to="/Inicio"><SidebarOption title="Inicio" Icon={HomeIcon} /></Link>
      <Link to="/Buscar"><SidebarOption title="Buscar" Icon={SearchIcon} /></Link>
      <Link to="/Listas"><SidebarOption title="Listas guardadas" Icon={AudiotrackIcon}/></Link>
      <Link to="/UsarApi"><SidebarOption title="Editar favoritos" Icon={AudiotrackIcon}/></Link>
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
      <Route path="/#" exact path>
      <h1 className="bienvenidos">Bienvenidos a Wildora</h1>
      <br></br>
      <br></br>
      <p className="parrafo_style">Wildora es un clon de spotify en el navegador 
        realizado como proyecto final para el 
        curso de Fullstack Net Core + React.
      </p>
      <br></br>
      <br></br>
      <h1 className="inicio_list">Seleccione una opcion de la izquierda para comenzar</h1>
      <ul className="inicio_list">
        <br></br>
        <li><strong>Inicio: </strong>Datos de contacto</li>
        <br></br>
        <li><strong>Buscar: </strong>Permite buscar por cancion o artista y añadir a favoritos</li>
        <br></br>
        <li><strong>Listas guardadas: </strong>Si ya tenia listas en su cuenta de spotify se veran aqui</li>
        <br></br>
        <li><strong>Editar favoritos: </strong>Puede crear su propia lista de favoritos nueva, agregar y borrar canciones</li>
      </ul>

      </Route>

      <Route path="/Inicio">
      <Avatar1/>
      <h1 className="datos_contacto">Datos de contacto</h1>
      <br></br>
      <div class="container">
      <div class="area-1"><MediaCardCaro /></div>
      <div class="area-2"><MediaCardMailen /></div>
      <div class="area-3"><MediaCardFrann/></div>
    </div>
      
      
      </Route>

      <Route path="/Buscar">
        <Header/>
        <Search /> 
      </Route>

      <Route path="/Listas">
        <Body />
      </Route>
        
      <Route path="/UsarApi">
        <Avatar1/>
        <ApiManager/>
      </Route>
    </Switch>

    </article>


      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default Player