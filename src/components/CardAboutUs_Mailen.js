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

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    align:'center',
  },
  media: {
    height: "10em",
    paddingTop: '56.25%',
=======

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 240,
>>>>>>> d8236f2 (buscador)
  },
});

export default function MediaCard() {
  const classes = useStyles();
<<<<<<< HEAD
  const githublink = "https://github.com/Maailen"
  const linkedinlink = "https://www.linkedin.com/in/selene-mail%C3%A9n-ojeda-5794141b1/"

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
          image="https://avatars.githubusercontent.com/u/83031000?v=4"
          title="Perfil Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
>>>>>>> d8236f2 (buscador)
            Mailen Ojeda
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
<<<<<<< HEAD
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/YQFyj3Y/1592952098665.jpg"
          title="Perfil Image"
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
        github.com/Maailen
        </Button>
>>>>>>> d8236f2 (buscador)
      </CardActions>
    </Card>
  );
}