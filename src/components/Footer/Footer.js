import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#232F3E",
    color: "#ffffff",
    padding: "25px"
  },
  second: {
    backgroundColor: "#37475a",
    color: "#ffffff"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff"
  },
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  }
}));

// footer mock JSON
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];

export function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.second} item xs={12}>
        <Typography className={classes.paper}>Back to top</Typography>
      </Grid>
      <div className={classes.root}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h5" color="#ffffff" gutterBottom>
                {footer.title}
              </Typography>
              <ul color="#ffffff">
                {footer.description.map(item => (
                  <li key={item} color="#ffffff">
                    {item}
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Footer;
