import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { AppBar, Menu, MenuItem } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useMoralis } from "react-moralis";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "sticky",
    width: "100%",
    top: "0",
    zIndex: 10
  },
  menu: {},
  title: {
    flexGrow: 1,
  },
});

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const authenticateHandler = () => {
    authenticate();
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Art Market
            </Link>
          </Typography>
          {isAuthenticated ? (
            <div>
              <IconButton
                edge="end"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    history.push("/mypage");
                    setAnchorEl(null);
                  }}
                >
                  My Page
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    history.push("/mycollection");
                    setAnchorEl(null);
                  }}
                >
                  My Collection
                </MenuItem>
                <MenuItem onClick={handleClose}>My Favorites</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button
                variant="outlined"
                color="inherit"
                onClick={authenticateHandler}
              >
                Login
              </Button>
              <Button variant="outlined" color="inherit">
                <Link
                  to="/signup"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
