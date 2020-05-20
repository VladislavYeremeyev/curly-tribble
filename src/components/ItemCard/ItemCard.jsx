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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  ItemCard: {
    maxWidth: 345,
  },
  "ItemCard-Media": {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  "ItemCard-ActionButton": {
    marginLeft: "auto",
  },
}));

export default function ItemCard({
  item,
  onAddClick,
  onDeleteClick,
  isInCart,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.ItemCard}>
      <Link to={`/${item.id}`}>
        <CardMedia
          className={classes["ItemCard-Media"]}
          image={`https://source.unsplash.com/${item.image_id}/400x200`}
          title={item.name}
        />
      </Link>
      <CardContent>
        <Link to={`/${item.id}`}>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        {isInCart ? (
          <IconButton
            className={classes["ItemCard-ActionButton"]}
            onClick={onDeleteClick}
            aria-label="delete"
          >
            <RemoveShoppingCartIcon style={{ color: "red", fontSize: 40 }} />
          </IconButton>
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
