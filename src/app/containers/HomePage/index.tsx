import React from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core/styles';

// ---------- Card Form ----------
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// ---------- App Bar ----------
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';

// ---------- Form TextFields ----------
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

// ---------- Modal ----------
import Modal from '@material-ui/core/Modal';

// ---------- Material ----------
import { MaterialTableDemo } from './../../components/MaterialTableDemo/index';

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
  paperModal: {
    position: 'relative',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '30%',
    // transform: 'translate(0, 100%)',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: "Roboto, Helvetica, Arial"
  }
}));

export function HomePage() {

  // ---------- Util Func ----------

  const lsAuth = localStorage.getItem('auth');
  const isAuth = !!lsAuth;

  const classes = useStyles();
  const [auth, setAuth] = React.useState(isAuth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExit = () => {
    setAnchorEl(null);
    localStorage.removeItem('auth');
    setAuth(false);
  };

  // ---------- Modal ----------

  const [openModal, setOpenModal] = React.useState(false);
  const [modalText, setModalText] = React.useState('Что-то пошло не так :(');

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const body = (
    <div className={classes.paperModal}>
      <h2 id="simple-modal-title">Ошибка!</h2>
      <p id="simple-modal-description">
        {modalText}
      </p>
    </div>
  );

  // ---------- Validation ----------

  const [state, setState] = React.useState({
    fioRule: false,
    passRule: false
  });
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');

  const handleChangeFio = (event) => {
    setName(event.target.value);
    event.target.value ? setState({fioRule: false, passRule: state.passRule}) : setState({fioRule: true, passRule: state.passRule})
  };

  const handleChangePass = (event) => {
    setPass(event.target.value);
    event.target.value ? setState({fioRule: state.fioRule, passRule: false}) : setState({fioRule: state.fioRule, passRule: true})
  };

  // ---------- Form Button Click ----------

  const messageA = 'Неверно заполнены поля имени и пароля';
  const messageB = 'Неверно заполнено поле имени';
  const messageC = 'Неверно заполнено поле пароля';
  const messageD = 'Такого пользователя не существует';
  const messageE = '(-_-) Вы успешно зарегестрировались! \n 🎉';

  // let getTableResponse = [];
  const [getTableResponse, setTableResponse] = React.useState([]);

  const handleClick = () => {

    if (name === '' && pass === '') {
      setState({fioRule: true, passRule: true})
      setModalText(messageA);
      setOpenModal(true);
    } else {
      if (name === '') {
        setState({fioRule: true, passRule: state.passRule})
        setModalText(messageB);
        setOpenModal(true);
      } 
      if (pass === '') {
        setState({fioRule: state.fioRule, passRule: true})
        setModalText(messageC);
        setOpenModal(true);
      }
    }

    const isLogged = function() {

      if(name !== '' && pass !== '') {
        // hashForCoockie set in cookies
        const lsAuth = localStorage.setItem('auth', 'true');
        setAuth(true);

        setModalText(messageE);
        setOpenModal(true);
      }
    }

    // ---------- Requests ----------

    // Ругается на fetch тайпскрипт (т.к. асинхронные ф-ции нужно использовать в высокоуровневых компонентах), 
    // поэтому использую xhr axios проще, поэтому первый вариант для запроса. 

    // let response = fetch('https://my-json-server.typicode.com/Barklim/DocskeeperServer/tables');

    // fetch('https://my-json-server.typicode.com/Barklim/DocskeeperServer/tables')
    //   .then(response => response.json())

    // let json = response.json();

    const sucessAuth = false;
    let getUsersResponse = [];
    // let getTableResponse = [];

    const getTable = function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://my-json-server.typicode.com/Barklim/DocskeeperServer/tables', false);
      xhr.send();

      if (xhr.status != 200) {
        // пример вывода: 404: Not Found
        setModalText("Ошибка HTTP: " + xhr.status + ': ' + xhr.statusText);
        setOpenModal(true);
      } else {
        // alert( xhr.responseText );
        const getTableResponse1 = JSON.parse(xhr.responseText);
        setTableResponse(getTableResponse1);
      }
    }
    const authRequest = function() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://my-json-server.typicode.com/Barklim/DocskeeperServer/users?email=' + name, false);
      xhr.send();

      if (xhr.status != 200) {
        // пример вывода: 404: Not Found
        setModalText("Ошибка HTTP: " + xhr.status + ': ' + xhr.statusText);
        setOpenModal(true);
      } else {
        getUsersResponse = JSON.parse(xhr.responseText);
      }
    }

    const doRequest = function() {
      authRequest();
      getTable();
    }

    if(name !== '' && pass !== '') {
      doRequest();

      if(getUsersResponse.length !== 1) {
        setModalText(messageD);
        setOpenModal(true);
      }
    }

    if (getUsersResponse.length === 1) {
      isLogged()
    }
  };

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
                <MenuItem>Личный кабинет</MenuItem>
                <MenuItem onClick={handleExit}>Выйти</MenuItem>
              </Menu>
            </div>
          )}
	        </Toolbar>
	      </AppBar>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>

        {!auth && (
	      <Paper className={classes.paper}>
	        <Grid container spacing={2}>
	          <Grid item xs={12} sm container>
	            <Grid item xs container direction="column" spacing={2}>
	              <Grid item xs>
	                <Typography gutterBottom variant="subtitle1">
	                  Авторизация
	                </Typography>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-error">Имя пользователя</InputLabel>
                    <OutlinedInput 
                      id="fioRule"
                      label="Имя пользователя"
                      style={{ marginBottom: 18 }}
                      error={state.fioRule}
                      value={name}
                      onChange={handleChangeFio} />
                  </FormControl>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="component-outlined">Пароль</InputLabel>
                    <OutlinedInput
                      id="passRule"
                      label="Пароль"
                      style={{ marginBottom: 8 }}
                      error={state.passRule}
                      value={pass}
                      onChange={handleChangePass} />
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
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={handleClick}  
                    fullWidth>
									  Войти
								  </Button>
	              </Grid>
	            </Grid>
	          </Grid>
	        </Grid>
	      </Paper>
        )}

        {auth && (
          <MaterialTableDemo tableData={getTableResponse}/>
        )}

	    </div>
    </>
  );
}
