import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import getImagePath from "../../utils/unsplashPath";
import ItemAmountControl from "../ItemAmountControl/ItemAmountControl";

const useStyles = makeStyles((theme) => ({
  ItemCard: {
    minWidth: 345,
    textAlign: "left",
  },
  "ItemCard-Media": {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  "ItemCard-ActionButton": {
    marginLeft: "auto",
  },
  "ItemCard-Title": {
    fontSize: 28,
    fontWeight: "bold",
  },
  "ItemCard-Price": {
    fontSize: 20,
    fontWeight: "bold",
  },
}));

export default function ItemCard({
  item,
  onAddClick,
  onDeleteClick,
  onChangeAmount,
  cartItem,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.ItemCard}>
      <RouterLink to={`/${item.id}`}>
        <CardMedia
          className={classes["ItemCard-Media"]}
          image={getImagePath(item.image_id)}
          title={item.name}
        />
      </RouterLink>
      <CardContent>
        <Link component={RouterLink} to={{ pathname: `/${item.id}`, item }}>
          <Typography className={classes["ItemCard-Title"]}>
            {item.name}
          </Typography>
        </Link>
        <Typography className={classes["ItemCard-Price"]}>
          {`Price: ${item.price}$`}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
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
            <IconButton
              className={classes["ItemCard-ActionButton"]}
              onClick={onDeleteClick}
              aria-label="delete"
            >
              <RemoveShoppingCartIcon style={{ color: "red", fontSize: 40 }} />
            </IconButton>
          </>
        ) : (
          <IconButton
            className={classes["ItemCard-ActionButton"]}
            onClick={onAddClick}
            aria-label="add"
          >
            <AddShoppingCartIcon style={{ color: "green", fontSize: 40 }} />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
