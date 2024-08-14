import axios from "axios";
import {
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
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
    } catch (error) {
      console.error(error);
    }
  };
};
