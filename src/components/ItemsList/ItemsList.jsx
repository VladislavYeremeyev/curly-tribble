import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "../ItemCard/ItemCard";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

const useStyles = makeStyles((theme) => ({
  ItemsList: {
    listStyle: "none",
    paddingInlineStart: 0,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  "ItemsList-Item": {
    marginBottom: 16,
  },
}));

export default function ItemsList({
  dispatch,
  error,
  loading,
  items,
  cartItems,
  onAddClick,
  onDeleteClick,
  onChangeAmount,
  fetchItems,
}) {
  const classes = useStyles();
  const [itemsDisplayType, setItemsDisplayType] = React.useState("grid");

  const handleChangeDisplayType = (type) => {
    setItemsDisplayType(type);
  };

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
  }

  return (
    <ul className={classes.ItemsList}>
      {items.map((item, i) => (
        <li className={classes["ItemsList-Item"]} key={i}>
          <ItemCard
            onAddClick={(e) => {
              onAddClick(item);
              e.preventDefault();
            }}
            onDeleteClick={(e) => {
              onDeleteClick(item.id);
              e.preventDefault();
            }}
            item={item}
            isInCart={cartItems.find((el) => el.id === item.id)}
          />
        </li>
      ))}
    </ul>
  );
}
