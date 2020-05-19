import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartItems from "./cartReducer";

export default combineReducers({ cartItems });
