import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ShoppingCart from "../../containers/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Header: {
    flexGrow: 1,
  },
  "Header-Icon": {
    marginRight: theme.spacing(2),
  },
  "Header-Title": {
    flexGrow: 1,
    textAlign: "left",
    color: "white",
  },
  "Header-TitleLink": {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <AppBar position="static">
        <Toolbar>
          <LocalMallIcon className={classes["Header-Icon"]} />
          <Typography
            variant="h5"
            component="h1"
            className={classes["Header-Title"]}
          >
            <Link className={classes["Header-TitleLink"]} to="/">
              Shoes Shop
            </Link>
          </Typography>

          <ShoppingCart />
        </Toolbar>
      </AppBar>
    </div>
  );
}
