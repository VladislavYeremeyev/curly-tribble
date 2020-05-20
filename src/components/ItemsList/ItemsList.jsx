import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { fetchItems } from "../../actions/itemsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default class ItemsList extends React.Component {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  //
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  componentDidMount() {
    if (!this.props.items.length) {
      this.props.dispatch(fetchItems());
    }
  }

  render() {
    const { error, loading, items } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {(items || []).map((item, i) => (
          <li key={i}>
            <Link to={`/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
