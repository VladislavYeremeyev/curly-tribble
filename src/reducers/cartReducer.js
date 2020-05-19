import { ADD_ITEM, DELETE_ITEM, CHANGE_AMOUNT } from "../actions/cartActions";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case CHANGE_AMOUNT:
      return state.map((item, index) => {
        if (index === action.payload.id) {
          return Object.assign({}, item, {
            amount: action.payload.amount,
          });
        }
        return item;
      });
    default:
      return state;
  }
};

export default cartReducer;
