const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOKEN":
      return action.payload;
    case "CLEAR_TOKEN":
      return {};
    default:
      return state;
  }
};
export default tokenReducer;
