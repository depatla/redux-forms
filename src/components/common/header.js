import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
    const [currentLoc, setCurrentLocation] = useState(window.location.pathname);
    let history = useHistory();
    const classes = useStyles();
    const redirectToLogin = () => {
        if(currentLoc == "/login"){
            history.push("/");
            setCurrentLocation("/")
        } else{
            history.push("/login");
            setCurrentLocation("/login");
        }
    }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" onClick={redirectToLogin}>{(currentLoc == "/login") ? 'Registration' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
