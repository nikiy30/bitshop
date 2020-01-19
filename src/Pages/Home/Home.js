import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import facebook from "../../assets/facebook-logo.svg";
import microsoft from "../../assets/microsoft-logo.svg";
import tinder from "../../assets/tinder-logo.svg";
import hubspot from "../../assets/hubspot-logo.svg";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  container: {
    padding: "25px"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1, 2, 3, 4, 5, 6];

export function Home(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to BitShop
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Bitshop is your one stop for all your bitcoin needs and
              entertainment. You can earn money, play games and create tasks for
              others to complete. Join today!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    BitShop
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    BitWorker
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {/* Companys that love us! */}
        <div>
          <Divider />
          <Container className={classes.container}>
            <Grid container spacing={3} p={6}>
              <Grid item xs={3}>
                <img src={facebook} />
              </Grid>
              <Grid item xs={3}>
                <img src={microsoft} />
              </Grid>
              <Grid item xs={3}>
                <img src={tinder} />
              </Grid>
              <Grid item xs={3}>
                <img src={hubspot} />
              </Grid>
            </Grid>
          </Container>
          <Divider />
        </div>

        {/* blog posts */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJjbDcppF5lJY5PEailu01zn5d4nWI5BKcA3SIxBtelozOdf4Eg&s"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bitcoin Bullish Market
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read
                    </Button>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Home;
