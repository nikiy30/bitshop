import React from "react";
import { Link } from "react-router-dom";
/**
 * Components
 */
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "../Avatar/Avatar";
/**
 * Icon Import todo clean up imports
 */
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Header from "../Header/Header";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#232F3E",
    color: "white"
  },
  nav: {
    display: "flex",
    paddingTop: "12px"
  },
  grow: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#ffffff",
    textDecoration: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const sections = [
  { title: "Appliances", url: "#" },
  { title: "Apps & Games", url: "#" },
  { title: "Beauty", url: "#" },
  { title: "Books", url: "#" },
  { title: "Clothing", url: "#" },
  { title: "Computers", url: "#" },
  { title: "Courses", url: "#" },
  { title: "Electronics", url: "#" },
  { title: "Home & Kitchen", url: "#" },
  { title: "Office Supplies", url: "#" }
];

export function TopNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <>
      <Header title="Blog" sections={sections} />
      <Menu
        className={classes.root}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <Avatar />
          <p>Profile</p>
        </MenuItem>
        <ShoppingCartIcon />
        <Header title="Blog" sections={sections} />
      </Menu>
    </>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <HomeIcon />
          </IconButton>
          <Link to="/landing" className={classes.link}>
            {" "}
            <Typography className={classes.title} variant="h6" noWrap>
              BitShop
            </Typography>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <nav className={classes.nav}>
              <Link
                variant="button"
                color="textPrimary"
                to="/catalog"
                className={classes.link}
              >
                BitWorker
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                to="/catalog"
                className={classes.link}
              >
                Bit Coder
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                to="/pricing"
                className={classes.link}
              >
                Enterprise
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Support
              </Link>
            </nav>
            <Link to="/checkout" variant="button" className={classes.link}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar />
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

export default TopNav;
