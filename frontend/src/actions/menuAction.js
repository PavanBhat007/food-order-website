import axios from 'axios';
import { GET_MENU_FAIL, GET_MENU_REQUEST, GET_MENU_SUCCESS } from "../constants/menuConstant";

export const getMenus = (id) => {
    return async function (dispatch) {
        dispatch({ type: GET_MENU_REQUEST });
        let menuAPI = `/api/v1/eats/stores/${id}/menus`;
        try {
            const { data } = await axios.get(menuAPI);
            dispatch({ 
                type: GET_MENU_SUCCESS,
                payload: data.data[0].menu
            });
        } catch(err) {
            dispatch({
                type: GET_MENU_FAIL,
                payload: err.message,
            });
        }
    }
}