import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import ButtonGroup from '@material-ui/core/ButtonGroup';
=======
>>>>>>> d8236f2 (buscador)

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
<<<<<<< HEAD
    height: "10em",
    paddingTop: '56.25%',
=======
    height: 240,
>>>>>>> d8236f2 (buscador)
  },
});

export default function MediaCard() {
  const classes = useStyles();
<<<<<<< HEAD
  const githublink = "https://github.com/FPolich"
  const linkedinlink = "https://www.linkedin.com/in/francisco-polich/"

  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
=======

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://avatars.githubusercontent.com/u/75345608?v=4"
          title="Perfil Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
>>>>>>> d8236f2 (buscador)
            Francisco Polich
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
<<<<<<< HEAD
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/sR8kp2J/1611338812830.jpg"
          title="Profile"
        />
      </CardActionArea>
      <CardActions>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
      <Button size="large" color="primary" href={githublink} target="_blank" rel="noopener noreferrer">
        Github
        </Button>
        <Button size="large" color="primary" href={linkedinlink} target="_blank" rel="noopener noreferrer">
        Linkedin
        </Button>
        </ButtonGroup>
=======
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        github.com/FPolich
        </Button>
>>>>>>> d8236f2 (buscador)
      </CardActions>
    </Card>
  );
}