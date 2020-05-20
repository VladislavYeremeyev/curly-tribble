import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { fetchItems } from "../../actions/itemsActions";
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

export default function ItemsList({ dispatch, error, loading, items }) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  //   //
  //   // const handleExpandClick = () => {
  //   //   setExpanded(!expanded);
  //   // };
  //
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchItems());
    }
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <LoadSpinner />;
  }

  return (
    <ul className={classes.ItemsList}>
      {(items || []).map((item, i) => (
        <li className={classes["ItemsList-Item"]} key={i}>
          <Link to={`/${item.id}`}>
            <ItemCard
              price={item.price}
              name={item.name}
              imageID={item.image_id}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
