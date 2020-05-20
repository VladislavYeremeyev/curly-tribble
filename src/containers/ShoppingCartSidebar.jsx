import { connect } from "react-redux";
import { deleteItem, changeAmount } from "../actions/cartActions";
import ShoppingCartSidebar from "../components/ShoppingCartSidebar/ShoppingCartSidebar";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(deleteItem(id)),
  onChangeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartSidebar);