import React from "react";
import { connect } from "react-redux";
import ItemPage from "../components/ItemPage/ItemPage";
import { addItem, changeAmount, deleteItem } from "../actions/cartActions";
import { fetchItems } from "../actions/itemsActions";

const mapStateToProps = (state) => ({
  items: state.items.items,
  cartItems: state.cartItems,
  loading: state.items.loading,
  error: state.items.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchItems()),
  onAddClick: (item) => dispatch(addItem(item)),
  onDeleteClick: (id) => dispatch(deleteItem(id)),
  onChangeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
