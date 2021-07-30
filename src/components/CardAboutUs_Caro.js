import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  root: {
    align:'center',
    width: '300px',
    height: '450px',
  },
  media: {
    height: "10em",
    paddingTop: '56.25%',
  },
});


export default function MediaCard() {
  const classes = useStyles();
  const githublink = "https://github.com/car0s0ad"
  const linkedinlink = "https://www.linkedin.com/in/carolina-dehle/"


  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardContent>
        <br></br>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Carolina Dehle
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image= "https://i.ibb.co/xh4v37C/imgcaro.jpg"
          title="Foto"
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
      </CardActions>
    </Card>
  );
}