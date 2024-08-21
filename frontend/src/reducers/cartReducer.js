import {
  ADD_TO_CART,
  CLEAR_CART,
  FETCH_CART,
  REMOVE_ITEM_CART,
  UPDATE_ITEM_CART,
} from "../constants/cartConstant";

const initialState = {
  cartItems: [],
  restaurant: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        cartItems: action.payload.cart.items,
      };

    case UPDATE_ITEM_CART:
      return {
        ...state,
        cartItems: action.payload.cart.items,
      };

    case FETCH_CART:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        cartItems: action.payload.cart.items,
      };

    case REMOVE_ITEM_CART:
      if (action.payload.cart === undefined) {
        return { ...state, cartItems: [] };
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
