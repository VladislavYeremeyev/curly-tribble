import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  ItemAmountControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
  },
  "ItemAmountControl-Button": {
    margin: "0 16px",
  },
}));

export default function ItemAmountControl({ amount, onIncrease, onDecrease }) {
  const classes = useStyles();

  return (
    <div className={classes.ItemAmountControl}>
      <IconButton
        className={classes["ItemAmountControl-Button"]}
        onClick={(e) => {
          onIncrease();
          e.preventDefault();
        }}
        aria-label="add"
        size="small"
      >
        <AddIcon fontSize="large" />
      </IconButton>
      <div>{amount}</div>
      <IconButton
        className={classes["ItemAmountControl-Button"]}
        onClick={(e) => {
          onDecrease();
          e.preventDefault();
        }}
        aria-label="add"
        size="small"
      >
        <RemoveIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
