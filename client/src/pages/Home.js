
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';
import heroVideo from '../videos/homebg.mp4';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  searchBar: {
    
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <ReactPlayer url={heroVideo} playing loop muted width="100%" height="100%" />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="white"
          

        >
          <Typography variant="h3" component="h1" className={classes.title} >
            GET YOU PARKING PERMIT FROM PHONE
          </Typography>
          
          <input className={classes.searchBar} type="text" placeholder="Search for Parking or Apartment" />
          
        </Box>
      </div>
    </section>
  );
};

export default Home;
