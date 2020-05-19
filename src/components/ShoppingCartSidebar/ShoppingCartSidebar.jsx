import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
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

export default function ShoppingCartSidebar({ open, items, toggleDrawer }) {
  const classes = useStyles();

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography className={classes.title}>Shopping Cart</Typography>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem button key={item.name}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText primary={text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
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
