import React from "react";
import "../styles/Login.css";
import { loginUrl } from "./spotify";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

<style>
('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
</style>

const useStyles = makeStyles({
  button: {
    borderRadius: "100px",
    letterspacing: "5px",
    fontweight: "bold",
    display: "block",
    margin: "10em auto",
    padding: "2em 6em",
    position: "relative",
    textTransform: "uppercase",
  }
})


function Login() {
const classes = useStyles()

  return (
    
    <div className="login">
      <h1>
        WILDORA
      </h1>
      <br></br>
      <br></br>
      <h3> A simple Spotify clone made with React and C#</h3>
      <br></br>
      <br></br>
      <div>
        <div classname="circle" id="circle">
          <a href="https://github.com/car0s0ad/wildora" target="_blank">
            <img alt="github" src="https://img.icons8.com/nolan/50/github.png" />
          </a></div><a href="https://github.com/car0s0ad/wildora">
        </a><a href="https://github.com/car0s0ad/wildora">
        </a>
      </div>
      <div id="wrapper">
      <section>
      <div class="btn-container">
        <br>
        </br>
      <Button 
        href={loginUrl} 
        className={classes.button}
        value="button-login"
        id="button-login"
        >
        Login with Spotify
      </Button>
      <div class="ease"></div>
      </div>
      </section>
    </div>
    </div>
  );
}

export default Login;