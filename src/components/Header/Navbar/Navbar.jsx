import React, { useContext, useState } from 'react';
import { makeStyles, styled, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink, Link } from 'react-router-dom';
import { red, green } from '@material-ui/core/colors';
import { userContext } from '../../../contexts/UserContext';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import sunLogo from '../../../assets/sunLogo.svg';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navbar: {
    background: 'linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)',
  },
  navlinks: {
    marginRight: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  addBtn: {
    textDecoration: "none",
    border: "none",
    color: "black",
    background: "#e0073e !important",
    borderRadius: "2px",
    color: "#fff",
    width: "100%",
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    localStorage.clear();
  }

  // FOR LOG IN PART, CHECK, IF USER LOGGED IN => SHOW JUST LOG OUT BUTTON. IF NOW => SHOW ALL WITHOUT LOG OUT BTN
  let newData = JSON.parse(localStorage.getItem('person'))//стягиваем массив из localStorage и преобразоваем в обычный формат js
  console.log(newData)
  let emailOn
  let odmen = false

  // CHECKING FOR: IS IT ADMIN OR NOT ???
  const { yes } = useContext(userContext);
  console.log("yes isAdmin", yes)
  if (newData) {
    if (newData[0].email == "admin@gmail.com" && newData[0].password == "1") {
      console.log('I AM ADMIN')
      emailOn = newData[0].email
      odmen = true
      // alert('You are loged in.');
    }
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        newData ?
          <>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </>
          :
          <>
            <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleMenuClose}>Sign In</MenuItem> {/*ВОЙТИ */}
            </Link>
            {/* <MenuItem onClick={handleLogOut}>Log Out</MenuItem> */}
            <Link to="/isadmin" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
            </Link>
          </>
      }
      {
        odmen ?
          <>
            <MenuItem >ADMIN: {emailOn}</MenuItem>
            <Link to="/add" style={{ textDecoration: "none" }} >
              <MenuItem onClick={handleMenuClose}><button className={classes.addBtn}>Add</button></MenuItem>
            </Link>

          </>
          : null
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >


      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle style={{ color: green[500] }} />
        </IconButton>

      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <p>Home</p>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <p>About us</p>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <p>Our Villas</p>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <p>Contacts</p>
        </IconButton>
      </MenuItem>
    </Menu>

  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>

          <IconButton>
            <img src={sunLogo} alt={"logo"}
              style={{
                height: '28px',
                width: '23px',
              }}
            />
            <Typography
              style={{
                fontFamily: 'Sail cursive',
                color: '#203A43',
                textDecoration: 'none',
                margin: '6px auto',
                fontSize: '30px',
                marginLeft: '10px',
                cursor: 'pointer',
              }}>
              La Villa
          </Typography>
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton className={classes.navlinks}>
              <Typography>
                Home
              </Typography>
            </IconButton>
            <IconButton className={classes.navlinks}>
              <Typography>
                About us
              </Typography>
            </IconButton>
            <IconButton className={classes.navlinks}>
              <Typography>
                Our Villas
              </Typography>
            </IconButton>
            <IconButton className={classes.navlinks}>
              <Typography>
                Contacts
              </Typography>
            </IconButton>
            <IconButton className={classes.navlinks}>
            <Link to="/cart">

              <AddShoppingCartIcon />
            </Link>
            </IconButton>


            
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
           

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}