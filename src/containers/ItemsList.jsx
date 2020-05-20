import React from "react";
import { connect } from "react-redux";
import ItemsList from "../components/ItemsList/ItemsList";

const mapStateToProps = (state) => ({
  items: state.items.items,
  loading: state.items.loading,
  error: state.items.error,
});

export default connect(mapStateToProps)(ItemsList);
