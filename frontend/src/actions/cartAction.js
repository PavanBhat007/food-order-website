import axios from "axios";
import {
  ADD_TO_CART,
  FETCH_CART,
  REMOVE_ITEM_CART,
  UPDATE_ITEM_CART,
} from "../constants/cartConstant";

export const fetchCartItems = (alert) => {
  return async function (dispatch) {
    try {
      const res = await axios.get("/api/v1/eats/cart/get-cart");
      dispatch({ type: FETCH_CART, payload: res.data.data });
    } catch (error) {
      alert.error(`Fetch Cart error: ${error}`);
      if (alert) alert.info("Cart is hungry!");
    }
  };
};

export const addItemToCart = (itemId, restaurant, quantity, alert) => {
  return async function (dispatch, getState) {
    try {
      // getState() returns current state / store
      const { user } = getState().auth;
      const res = await axios.post("/api/v1/eats/cart/add-to-cart", {
        userId: user._id,
        foodItemId: itemId,
        restuarantId: restaurant,
        quantity,
      });

      alert.success("Food item added to cart", res.data.cart);
      dispatch({ type: ADD_TO_CART, payload: res.data.cart });
    } catch (error) {
      alert.error(error.res ? error.res.data.message : error.message);
    }
  };
};

export const updateCartQuantity = (itemId, quantity, alert) => {
  return async function (dispatch, getState) {
    try {
      const { user } = getState().auth;
      if (typeof itemId === "object") itemId = itemId._id;

      const res = await axios.put("/api/v1/eats/cart/update-cart-item", {
        userId: user._id,
        foodItemId: itemId,
        quantity,
      });

      dispatch({ type: UPDATE_ITEM_CART, payload: res.data.cart });
    } catch (error) {
      alert.error(error.res ? error.res.data.message : error.message);
    }
  };
};

export const removeItemFromCart = (itemId, alert) => {
  return async function (dispatch, getState) {
    try {
      const { user } = getState().auth;
      if (typeof itemId === "object") itemId = itemId._id;

      const res = await axios.delete("/api/v1/eats/cart/delete-cart-item", {
        data: { userId: user._id, foodItemId: itemId },
      });

      dispatch({ type: REMOVE_ITEM_CART, payload: res.data });
    } catch (error) {
      alert.error(error.res ? error.res.data.message : error.message);
    }
  };
};
