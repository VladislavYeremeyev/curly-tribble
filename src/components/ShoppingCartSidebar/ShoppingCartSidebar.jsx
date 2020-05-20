import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
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

const useStyles = makeStyles({
  list: {
    minWidth: 350,
  },
  title: {
    padding: 10,
    textAlign: "center",
    fontSize: 24,
  },
});

export default function ShoppingCartSidebar({
  open,
  items,
  toggleDrawer,
  onDeleteClick,
}) {
  const classes = useStyles();

  const list = (
    <div className={classes.list} role="presentation">
      <Typography className={classes.title}>Shopping Cart</Typography>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem button key={item.name}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n`}
                src={`/static/images/avatar/${item.img}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => onDeleteClick(item.id)}
                edge="end"
                aria-label="comments"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {list}
    </Drawer>
  );
}
