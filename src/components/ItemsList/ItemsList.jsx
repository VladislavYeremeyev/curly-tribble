import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "../ItemCard/ItemCard";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

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
  "ItemsList-ViewSwitch": {
    marginTop: 16,
  },
  "ItemsList-Item_view_list": {
    width: "100%",
  },
}));

export default function ItemsList({
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
    <>
      <ButtonGroup className={classes["ItemsList-ViewSwitch"]}>
        <Button
          {...(itemsDisplayType === "grid"
            ? { variant: "contained", color: "primary" }
            : {})}
          className={classes["ItemPage-ActionButton"]}
          onClick={() => setItemsDisplayType("grid")}
          startIcon={<ViewComfyIcon style={{ fontSize: 24 }} />}
        >
          Grid
        </Button>
        <Button
          {...(itemsDisplayType === "list"
            ? { variant: "contained", color: "primary" }
            : {})}
          className={classes["ItemPage-ActionButton"]}
          onClick={() => setItemsDisplayType("list")}
          startIcon={<ListIcon style={{ fontSize: 24 }} />}
        >
          List
        </Button>
      </ButtonGroup>
      <ul className={classes.ItemsList}>
        {items.map((item, i) => (
          <li
            className={clsx(classes["ItemsList-Item"], {
              [classes["ItemsList-Item_view_list"]]:
                itemsDisplayType === "list",
            })}
            key={i}
          >
            <ItemCard
              onAddClick={() => {
                onAddClick(item);
              }}
              onDeleteClick={() => {
                onDeleteClick(item.id);
              }}
              onChangeAmount={onChangeAmount}
              item={item}
              cartItem={cartItems.find((el) => el.id === item.id)}
              view={itemsDisplayType}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
