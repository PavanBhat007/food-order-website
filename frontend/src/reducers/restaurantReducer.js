import {
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
} from "../constants/restaurantConstant";

const initialState = {
  restaurants: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true, // starting to fetch data
        error: null,
      };

    // dispatch({ type: ALL_RESTAURANTS_SUCCESS, payload: { restaurants, count } });
    case ALL_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false, // data fetched successfully
        count: action.payload.count,
        restaurants: action.payload.restaurants,
      };

    default:
      return state;
  }
};
