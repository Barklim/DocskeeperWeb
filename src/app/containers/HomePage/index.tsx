import React from 'react';
import { Helmet } from 'react-helmet-async';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //display: 'flex',
    height: '90vh'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      top: '25%'
    },
  },  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    // display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  checkboxLabel: {
  	width: '100%'
  },
}));

export function HomePage() {

  const lsAuth = localStorage.getItem('auth');
  const isAuth = !!lsAuth;

  const classes = useStyles();
  const [auth, setAuth] = React.useState(isAuth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    fioRule: false,
    passRule: false
  });

  const handleChangeFio = (event) => {
    console.log('TEST')
    console.log()
    console.log(event)
  };

  // Simplest without regex & e.t.c.

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A DocskeeperWeb application homepage" />
      </Helmet>
	    <div className={classes.root}>
	      <AppBar position="static">
	        <Toolbar>
	          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
	            <BusinessRoundedIcon />
	          </IconButton>
	          <Typography variant="h6" className={classes.title}>
	            DocskeeperWeb
	          </Typography>
            {auth && (
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 17 new notifications" color="inherit">
	              <Badge badgeContent={2} color="secondary">
	                <NotificationsIcon />
	              </Badge>
	            </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Личный кабинет</MenuItem>
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
              </Menu>
            </div>
          )}
	        </Toolbar>
	      </AppBar>
	      <Paper className={classes.paper}>
	        <Grid container spacing={2}>
	          <Grid item xs={12} sm container>
	            <Grid item xs container direction="column" spacing={2}>
	              <Grid item xs>
	                <Typography gutterBottom variant="subtitle1">
	                  Авторизация
	                </Typography>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="component-error">Имя пользователя</InputLabel>
                    <OutlinedInput 
                      id="fioRule"
                      error={state.fioRule}
                      style={{ marginBottom: 18 }}
                      onChange={handleChangeFio}
                      fullWidth />
                  </FormControl>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                      id="passRule"
                      label="Пароль"
                      error={state.passRule}
                      style={{ marginBottom: 8 }} 
                      />
                  </FormControl>
                  <FormControlLabel className={classes.checkboxLabel} control={<Checkbox name="checkedC" />} label="Запомнить меня"  />
                  <Link
									  component="button"
									  variant="body2"
									  style={{ marginBottom: 8 }}
									  onClick={() => {
									    console.info("I'm a button.");
									  }}
									>
									  Забыли пароль?
									</Link>
                  <Button variant="contained" color="primary" fullWidth>
									  Войти
								  </Button>
	              </Grid>
	            </Grid>
	          </Grid>
	        </Grid>
	      </Paper>
	    </div>
    </>
  );
}
