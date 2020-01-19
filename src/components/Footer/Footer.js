import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#232F3E",
    padding: "25px"
  },
  second: {
    backgroundColor: "#37475a"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.second} item xs={12}>
        <Typography className={classes.paper}>xs=12</Typography>
      </Grid>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.paper}>xs=12 sm=6</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.paper}>xs=12 sm=6</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.paper}>xs=6 sm=3</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.paper}>xs=6 sm=3</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.paper}>xs=6 sm=3</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography className={classes.paper}>xs=6 sm=3</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
