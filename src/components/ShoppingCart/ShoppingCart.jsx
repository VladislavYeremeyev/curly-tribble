import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCartSidebar from "../../components/ShoppingCartSidebar/ShoppingCartSidebar";
import Badge from "@material-ui/core/Badge";

export default function ShoppingCart({ items, onDeleteClick }) {
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ open });
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <Badge badgeContent={items.length} color="secondary">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <ShoppingCartSidebar
        items={items}
        open={state.open}
        toggleDrawer={toggleDrawer}
        onDeleteClick={onDeleteClick}
      />
    </>
  );
}
