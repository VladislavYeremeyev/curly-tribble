import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  SpinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

export default function LoadSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.SpinnerContainer}>
      <CircularProgress />
    </div>
  );
}
