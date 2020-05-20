import React from "react";
import { connect } from "react-redux";
import ItemsList from "../components/ItemsList/ItemsList";
import { addItem, changeAmount } from "../actions/cartActions";

const mapStateToProps = (state) => ({
  items: state.items.items,
  loading: state.items.loading,
  error: state.items.error,
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (item) => dispatch(addItem(item)),
  onChangeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
});

export default connect(mapStateToProps)(ItemsList);
