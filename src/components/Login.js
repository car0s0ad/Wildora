import React from "react";
import "../styles/Login.css";
import { loginUrl } from "./spotify";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
</style>

const useStyles = makeStyles({
  button: {
    background: "#1db954",
    borderRadius: "200px",
    color: "#fff",
    fontsize: "13px",
    letterspacing: "2px",
    fontweight: "bold",
    display: "block",
    margin: "10em auto",
    padding: "2em 6em",
    position: "relative",
    textTransform: "uppercase",
    transition: '0.4s',
    '&:after': {
        background: "#fff",
        content: '',
        position: "absolute",
        zindex: "-1",
        height: 0,
        left: 0,
        top: 0,
        width: "100%",
    '&:hover': {
    color: "#2ecc71",
    '&:hover:after': {
      height: "100%",
    }

  }

}
  }
})


function Login() {
const classes = useStyles()

  return (
    
    <div className="login">
      <h1>
        WILDORA
      </h1>
      
      <Button 
      href={loginUrl} 
      variant="contained" 
      color="primary"
      className={classes.button}
      >
      Login with Spotify
      </Button>
    </div>
  );
}

export default Login;