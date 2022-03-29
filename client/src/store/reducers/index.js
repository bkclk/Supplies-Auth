import { combineReducers } from "redux";
import selectedCatReducer from "./selectedReducer";
import productsReducer from "./productsReducer";
import basketReducer from "./basketReducer";
import tokenReducer from "./tokenReducer";
export default combineReducers({
  selectedCat: selectedCatReducer,
  productList: productsReducer,
  basketList: basketReducer,
  token: tokenReducer,
});
