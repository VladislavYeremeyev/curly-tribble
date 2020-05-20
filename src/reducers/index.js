import { combineReducers } from "redux";
import items from "./itemsReducer";
import cartItems from "./cartReducer";

export default combineReducers({ cartItems, items });
