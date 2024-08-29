import {
  UPDATE_ITEM_CART,
  REMOVE_ITEM_CART,
  FETCH_CART,
  CLEAR_CART,
  ADD_TO_CART,
} from "../constants/cartConstant";

export const cartReducer = (
  state = { cartItems: [], restaurant: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        cartItems: action.payload.items,
      };

    case UPDATE_ITEM_CART:
      return {
        ...state,
        cartItems: action.payload.items,
      };

    case FETCH_CART:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        cartItems: action.payload.items,
      };

    case REMOVE_ITEM_CART:
      if (action.payload.cart === undefined) {
        return {
          ...state,
          cartItems: [],
        };
      } else {
        return {
          ...state,
          cartItems: action.payload.cart.items,
        };
      }

    case CLEAR_CART:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
