
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import "./App.css";
import { getTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./data/DataLayer";
import { BrowserRouter as Router } from "react-router-dom";

const spotify = new SpotifyWebApi();

function App() {
  const [{  token }, dispatch] = useDataLayerValue();
  const [localToken, setLocalToken] = useState("")

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    setLocalToken(_token)
    console.log("local token en app ",localToken)

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, [dispatch]);

  return (
    <Router>
    <div className="App">
      {token ? <Player spotify={spotify} ingresoToken={localToken} /> : <Login />}
    </div>
    </Router>
  );
}

export default App;