import axios from "../../axios";

export const selectedCategoryId = (id) => {
  return {
    type: "SELECTED_CATEGORY",
    payload: id,
  };
};

export const getProducts = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("userToken"));
  const req = await axios.get("/products", {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });

  dispatch({ type: "FETCH_PRODUCTS", payload: req.data });
};

export const addToBasket = (product) => {
  return {
    type: "ADD_BASKET",
    payload: product,
  };
};

export const deleteToBasket = (product) => {
  return {
    type: "DELETE_BASKET",
    payload: product,
  };
};
export const clearBasket = () => {
  return {
    type: "CLEAR_BASKET",
  };
};
export const token = (userToken) => {
  return {
    type: "TOKEN",
    payload: userToken,
  };
};
export const clearToken = () => {
  return {
    type: "CLEAR_TOKEN",
  };
};
