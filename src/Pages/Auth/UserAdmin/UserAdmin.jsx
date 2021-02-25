import React, { useContext, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { userContext } from '../../../contexts/UserContext';


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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "darkblue",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserAdmin() {
  toast.configure();
  const classes = useStyles();
  const history = useHistory();

  const [check, setCheck] = useState(false)

  const { users, getUsers, isAdmin } = useContext(userContext);


  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  useEffect(() => {
    getUsers()
  }, [])

  function adminExistCheck(){
    console.log(users)
    users.map(item => {
      if(item.email === adminEmail && item.password === adminPassword){
        setCheck(!check)
        isAdmin(check)
      }
    })
    if(check){
      console.log(adminEmail)
      // notify(logEmail)
      // alert("success")
      history.push('/');
    } else {
      notifyError()
      // alert('error')
    }
  }


  function handleLogInAdmin() {
    let logAdmin = {
      email: adminEmail,
      password: adminPassword
    }

    setAdminEmail('');
    setAdminPassword('');
    // check();
    setUserToStorage(logAdmin);

    // console.log(logPerson)
    adminExistCheck()

  }

  function setUserToStorage(obj){//добавление новых тасков в localStorage
    if(!localStorage.getItem('person')){//проверка есть ли что-нибудь в localStorage
    localStorage.setItem('person', '[]')//если нет то добавляем туда путой массив
    }

    let data = JSON.parse(localStorage.getItem('person'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
    data.push(obj)//в массив добавляем новый обьект
    localStorage.setItem('person', JSON.stringify(data))//обновленный массив преобразовываем в формат json и отправляем обратно в localStorage
}


  const notifyError = () => toast('Неверные данные!', {
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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Are you an Admin?
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
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
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
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
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
            onClick={handleLogInAdmin}
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
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}