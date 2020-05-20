import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useLocation, useParams } from "react-router-dom";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import getImagePath from "../../utils/unsplashPath";
import Typography from "@material-ui/core/Typography";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import Button from "@material-ui/core/Button";
import ItemAmountControl from "../ItemAmountControl/ItemAmountControl";

const useStyles = makeStyles((theme) => ({
  ItemPage: {
    padding: "0 32px",
    display: "flex",
    flexDirection: "column",
    minWidth: 360,
    maxWidth: 700,
    margin: "0 auto",
  },
  "ItemPage-Name": {
    fontSize: 40,
  },
  "ItemPage-Price": {
    fontSize: 32,
    fontWeight: "bold",
  },
  "ItemPage-Description": {
    marginBottom: 15,
  },
  "ItemPage-Image": {
    height: 300,
  },
  "ItemPage-ActionButton": {
    marginTop: 16,
  },
}));

export default function ItemPage({
  error,
  loading,
  items,
  cartItems,
  onAddClick,
  onDeleteClick,
  onChangeAmount,
  fetchItems,
}) {
  const location = useLocation();
  const { id } = useParams();

  const item = location.item || items.find((el) => el.id === +id);
  const classes = useStyles();

  useEffect(() => {
    if (!items.length) {
      fetchItems();
    }
  });

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <LoadSpinner />;
  } else if (item) {
    const cartItem = cartItems.find((el) => el.id === item.id);
    return (
      <div className={classes["ItemPage"]}>
        <Typography className={classes["ItemPage-Name"]}>
          {item.name}
        </Typography>
        <img
          className={classes["ItemPage-Image"]}
          alt={item.name}
          src={getImagePath(item.image_id)}
        />
        <Typography className={classes["ItemPage-Price"]}>
          {`Price: ${item.price}$`}
        </Typography>
        <Typography className={classes["ItemPage-Description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        {cartItem ? (
          <>
            <ItemAmountControl
              amount={cartItem.amount}
              onIncrease={() =>
                onChangeAmount(cartItem.id, cartItem.amount + 1)
              }
              onDecrease={() => {
                const newAmount = cartItem.amount - 1;
                onChangeAmount(cartItem.id, newAmount);
                if (newAmount < 1) {
                  onDeleteClick(cartItem.id);
                }
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes["ItemPage-ActionButton"]}
              onClick={() => onDeleteClick(item.id)}
              startIcon={<RemoveShoppingCartIcon style={{ fontSize: 40 }} />}
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={classes["ItemPage-ActionButton"]}
            onClick={() => onAddClick(item)}
            startIcon={<AddShoppingCartIcon style={{ fontSize: 40 }} />}
          >
            Add to cart
          </Button>
        )}
      </div>
    );
  } else {
    return <h2>Item is not found</h2>;
  }
}
