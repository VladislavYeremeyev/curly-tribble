import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import getImagePath from "../../utils/unsplashPath";
import { Link } from "react-router-dom";
import ItemAmountControl from "./../ItemAmountControl/ItemAmountControl";

const useStyles = makeStyles({
  CartSidebar: {
    minWidth: 370,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  "CartSidebar-Title": {
    padding: 10,
    textAlign: "center",
    fontSize: 24,
  },
  "CartSidebar-Item": {
    textDecoration: "none",
    color: "black",
  },
  "CartSidebar-Total": {
    marginTop: "auto",
    textAlign: "center",
    padding: "16px 0",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default function ShoppingCartSidebar({
  open,
  items,
  toggleDrawer,
  onDeleteClick,
  onChangeAmount,
}) {
  const classes = useStyles();
  const totalCost = items.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  const list = (
    <div className={classes.CartSidebar} role="presentation">
      <Typography className={classes["CartSidebar-Title"]}>
        Shopping Cart
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <Link className={classes["CartSidebar-Item"]} to={`/${item.id}`}>
            <ListItem button key={item.name}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={getImagePath(item.image_id)} />
              </ListItemAvatar>
              <ListItemText>
                <strong>{item.name}</strong>
                <div>{`Price: ${item.price}$`}</div>
                <div>{`Amount: ${item.amount}`}</div>
                <strong>{`Total: ${item.amount * item.price}$`}</strong>
              </ListItemText>
              <ItemAmountControl
                amount={item.amount}
                onIncrease={() => onChangeAmount(item.id, item.amount + 1)}
                onDecrease={() => {
                  const newAmount = item.amount - 1;
                  onChangeAmount(item.id, newAmount);
                  if (newAmount < 1) {
                    onDeleteClick(item.id);
                  }
                }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={(e) => {
                    onDeleteClick(item.id);
                    e.preventDefault();
                  }}
                  edge="end"
                  aria-label="comments"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        ))}
      </List>
      {totalCost > 0 && (
        <Typography
          className={classes["CartSidebar-Total"]}
        >{`Total: ${totalCost} $`}</Typography>
      )}
    </div>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {list}
    </Drawer>
  );
}
