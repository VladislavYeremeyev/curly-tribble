import { connect } from "react-redux";
import { deleteItem, changeAmount } from "../actions/cartActions";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const mapStateToProps = (state) => ({
  items: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(deleteItem(id)),
  onChangeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
