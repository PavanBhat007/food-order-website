import {
  ALL_RESTAURANTS_FAIL,
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
  CLEAR_ERROR,
  SORT_BY_RATINGS,
  SORT_BY_REVIEWS,
  TOGGLE_VEG_ONLY,
} from "../constants/restaurantConstant";

const initialState = {
  restaurants: [],
};

const calculatePureVegCount = (restaurants, showVegOnly) => {
  if (!showVegOnly) return restaurants.length;
  return restaurants.filter((restaurant, _) => restaurant.isVeg).length;
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

    case ALL_RESTAURANTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Array.sort(compareFn(a, b) => number) => sorts array in-place
    // here b - a => descending order because
    // b > a if "number" -> positive, a > b if "number" -> negative
    // and a = b if "number" = 0
    case SORT_BY_RATINGS:
      return {
        ...state,
        restaurants: [...state.restaurants].sort(
          (a, b) => b.ratings - a.ratings
        ),
      };

    case SORT_BY_REVIEWS:
      return {
        ...state,
        restaurants: [...state.restaurants].sort(
          (a, b) => b.numOfReviews - a.numOfReviews
        ),
      };

    // Array.filter(Fn(ele, index) => boolean)
    // keeps only the elements where boolean is true
    case TOGGLE_VEG_ONLY:
      return {
        ...state,
        showVegOnly: !state.showVegOnly,
        pureVegRestaurantsCount: calculatePureVegCount(
          state.restaurants,
          !state.showVegOnly
        ),
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
