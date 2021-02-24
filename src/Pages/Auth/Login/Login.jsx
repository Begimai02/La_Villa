import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { userContext } from '../../../contexts/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "blue",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const history = useHistory();
  const classes = useStyles();

  const { users, getUsers } = useContext(userContext);

  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  const [isAdmin, setIsAdmin] = useState(false);

  // console.log(users)

  useEffect(() => {
    getUsers()
  }, [])

  function userExistCheck(){
    let check = false;
    console.log(users)
    users.map(item => {
      if(item.email === logEmail && item.password === logPassword){
        check = true; 
      }
    })
    if(check){
      console.log(logEmail)
      // notify(logEmail)
      // alert("success")
      history.push('/');
    } else {
      notifyError()
      // alert('error')
    }
  }


  function handleLogIn() {
    let logPerson = {
      email: logEmail,
      password: logPassword
    }

    setLogEmail('');
    setLogPassword('');
    setUserToStorage(logPerson);

    // console.log(logPerson)
    userExistCheck()

  }
  //FOR УВЕДОМЛЕНИЯ USERA
  // const notify = (logEmail) => toast(`Вы вошли в систему как ${logEmail}!`, {
	// 	position: "top-right",
	// 	autoClose: 5000,
	// 	hideProgressBar: false,
	// 	newestOnTop: false,
	// 	closeOnClick: true,
	// 	rtl: false,
	// 	pauseOnFocusLoss: true,
	// 	draggable: true,
	// 	pauseOnHover: true,
	// 	type: 'success'
	// });

    const notifyError = () => toast('Неверные данные или несуществующий юзер!', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		newestOnTop: false,
		closeOnClick: true,
		rtl: false,
		pauseOnFocusLoss: true,
		draggable: true,
		pauseOnHover: true,
		type: 'error'
	});


  //---------------------not using anymore ------------------
  // function check() {  //TO LOCAL STORAGE  
  //   // check if stored data from register-form is equal to data from login form
  //   let newData = JSON.parse(localStorage.getItem('person'))//стягиваем массив из localStorage и преобразоваем в обычный формат js
  //   console.log(newData)
  //   newData.forEach(item => {//перебираем массив 
  //     if (item.email === logEmail && item.password === logPassword) {
  //       return alert('You are loged in.');  //call here state and change the state of the main page: ADMIN OR USER
  //     }
  //   })
  //   return alert("error")
  // }

  function setUserToStorage(obj){//добавление новых тасков в localStorage
        if(!localStorage.getItem('person')){//проверка есть ли что-нибудь в localStorage
        localStorage.setItem('person', '[]')//если нет то добавляем туда путой массив
        }
    
        let data = JSON.parse(localStorage.getItem('person'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
        data.push(obj)//в массив добавляем новый обьект
        localStorage.setItem('person', JSON.stringify(data))//обновленный массив преобразовываем в формат json и отправляем обратно в localStorage
    }
  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={logEmail}
              onChange={(e) => setLogEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={logPassword}
              onChange={(e) => setLogPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
            <ToastContainer />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}