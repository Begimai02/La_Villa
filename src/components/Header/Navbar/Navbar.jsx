import React, { useContext, useState } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom';
import sunLogo from '../../../assets/sunLogo.svg';

import { red, green } from '@material-ui/core/colors';
import { userContext } from '../../../contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
    },
  },
  addBtn: {
    textDecoration: "none",
    color: "black",
    background: "#e0073e",
    borderRadius: "2px",
    marginRight: "15px",
    color: "#fff"
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
  let emailOn = newData?.email
  let odmen = false

  // CHECKING FOR: IS IT ADMIN OR NOT ???
  const { yes } = useContext(userContext);
  console.log("yes isAdmin", yes)
  if (newData) {
    if (newData[0].email == "admin@gmail.com" && newData[0].password == "1") {
      console.log('I AM ADMIN')
      odmen = true
      // alert('You are loged in.');
    }
  }

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
            <MenuItem>{emailOn}</MenuItem>  {/*  NOT WORKING -------------------*/}
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
            <Link to="/add" className={classes.addBtn}>
              <MenuItem onClick={handleMenuClose}>Add</MenuItem>
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
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.shopcart}
        style={{
          background: 'transparent',
          boxShadow: 'none',
          color: '#203A43',
        }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >

          </IconButton>
          <img src={sunLogo} alt={"logo"}
            style={{
              height: '30px',
              width: '30px',
            }}
          />
          <Typography
            style={{
              fontFamily: 'Sail cursive',
              color: '#203A43',
              textDecoration: 'none',
              margin: '20px 0',
              fontSize: '30px',
              marginLeft: '10px',
              cursor: 'pointer',
            }}>
            La Villa
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <ul>
                <li>
                  Home
                    </li>
                <li>
                  Our Villas
                    </li>
                <li>
                  About Us
                    </li>
                <li>
                  Contacts
                    </li>
              </ul>
            </NavLink>
            <IconButton color="inherit">
            </IconButton>
            <IconButton color="inherit">
              <Badge color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}

            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
