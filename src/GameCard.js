import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import game from './game';
import { render } from '@testing-library/react';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 300,
    background: 'none',
    margin: '80px',
    transition: "transform 0.15s ease-in-out",
  },
  media: {
    //maxHeight: '100%',
    height: '100%',
    marginTop: '20px',
    //maxWidth: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  title: {
      color: "white",
  },
  /* content: {
    display: 'block',
  }, */
  desc: {
      color: "white",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
});

 export default function GameCard({ game }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    raised: false,
    shadow: 1,
  })

  return (
    <Card 
      className={classes.root}
      classes={{root: state.raised ? classes.cardHovered : ""}}
      onMouseOver={()=>setState({ raised: true, shadow: 3})}
      onMouseOut={()=>setState({ raised: false, shadow: 1})}
      raised={state.raised} zdepth={state.shadow}
    >
        <CardMedia
          className={classes.media}
          image={game.imageUrl}
        />
        <CardContent className={classes.content}>
          <Typography 
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
            >
            {game.title}
          </Typography>
          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p"
          className={classes.desc}>
            {game.description}
          </Typography>
        </CardContent>
     /*  <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> 
    </Card>
  );
}