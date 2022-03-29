import _ from "lodash";

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BASKET":
      const newState = state.filter((s) => s !== action.payload);
      return _.sortBy([...newState, action.payload], ["productName"]);
    case "DELETE_BASKET":
      const deleteState = state.filter((s) => s !== action.payload);
      if (action.payload.quantity > 1) {
        action.payload.quantity -= 1;
      } else {
        return _.sortBy([...deleteState], ["productName"]);
      }
      return _.sortBy([...deleteState, action.payload], ["productName"]);
    case "CLEAR_BASKET":
      return [];
    default:
      return state;
  }
};
export default basketReducer;
