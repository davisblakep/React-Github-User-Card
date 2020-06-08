import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: 345,
  },
  media: {
    height: 260,
  },
});

export default function TopUserCard(props) {
  const classes = useStyles();
  console.log("TopUserCard props", props)

  return (
      <div style={{display: "grid", justifyItems: "center", padding: "4%"}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.topUser.data === undefined ? "https://images.pexels.com/photos/4114774/pexels-photo-4114774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" : props.topUser.data.avatar_url}
          title={props.topUser.data === undefined ? "Loading" : props.topUser.data.login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.topUser.data === undefined ? "Loading" : props.topUser.data.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.topUser.data === undefined ? "..." : `Followers: ${props.topUser.data.followers}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.topUser.data === undefined ? "..." : `Following: ${props.topUser.data.following}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
