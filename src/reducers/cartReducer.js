import { ADD_ITEM, DELETE_ITEM, CHANGE_AMOUNT } from "../actions/cartActions";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cartItems")) || [],
  action
) => {
  let newValue;
  switch (action.type) {
    case ADD_ITEM:
      newValue = [...state, { ...action.payload, amount: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(newValue));
      return newValue;
    case DELETE_ITEM:
      newValue = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(newValue));
      return newValue;
    case CHANGE_AMOUNT:
      newValue = state.map((item) => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            amount: action.payload.amount,
          });
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(newValue));
      return newValue;
    default:
      return state;
  }
};

export default cartReducer;
