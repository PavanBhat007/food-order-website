import axios from "axios";
import {
  ALL_RESTAURANTS_FAIL,
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
  CLEAR_ERROR,
  SORT_BY_RATINGS,
  SORT_BY_REVIEWS,
  TOGGLE_VEG_ONLY,
} from "../constants/restaurantConstant";

export const getRestaurants = () => {
  return async function (dispatch) {
    dispatch({ type: ALL_RESTAURANTS_REQUEST });
    let storeAPI = `/api/v1/eats/stores`; // Backend API to get stores
    try {
      const { data } = await axios.get(storeAPI);

      /* 
        data = {
          "status": "success",
          "count": 8,
          "restaurants": [ ... ]
        } 
      */
      const { restaurants, count } = data;
      dispatch({
        type: ALL_RESTAURANTS_SUCCESS,
        payload: { restaurants, count }, // data to be stored in "STORE"
      });
    } catch (err) {
      dispatch({
        type: ALL_RESTAURANTS_FAIL,
        payload: err.message
      })
    }
  };
};

export const sortByRatings = () => { return { type: SORT_BY_RATINGS }; }
export const sortByReviews = () => { return { type: SORT_BY_REVIEWS }; }
export const toggleVegOnly = () => { return { type: TOGGLE_VEG_ONLY }; }

export const clearErrors = () => { return { type: CLEAR_ERROR }; }