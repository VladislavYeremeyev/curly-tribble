/*
 * Action types
 */
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const CHANGE_AMOUNT = "CHANGE_AMOUNT";

/*
 * Action creators
 */

export function addItem(item) {
  return { type: ADD_ITEM, payload: item };
}

export function deleteItem(id) {
  return { type: DELETE_ITEM, payload: id };
}

export function changeAmount(id, newAmount) {
  return { type: CHANGE_AMOUNT, payload: { id: id, amount: newAmount } };
}
