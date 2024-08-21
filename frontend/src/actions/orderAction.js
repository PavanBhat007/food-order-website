import axios from "axios";
import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_PAYMENT_FAIL,
  CREATE_PAYMENT_REQUEST,
  MY_ORDER_FAIL,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstant";

export const createOrder = (sessionId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api/v1/eats/orders/new",
        { sessionId },
        config
      );
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const payment = (items, restaurant) => {
  return async function (dispatch) {
    try {
      dispatch({ type: CREATE_PAYMENT_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        { items, restaurant },
        config
      );

      // no dispatch for success as no payload required
      // as the payment status will be handled by Stripe
      // redirect user to Stripe's payment page
      if (data.url) window.location.href = data.url;
    } catch (error) {
      dispatch({
        type: CREATE_PAYMENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const myOrders = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: MY_ORDER_REQUEST });
      const { data } = await axios.get("/api/v1/eats/orders/me/myOrders");
      dispatch({ type: MY_ORDER_SUCCESS, payload: data.orders });
    } catch (error) {
      dispatch({ type: MY_ORDER_FAIL, payload: error.response.data.message });
    }
  };
};

export const getOrderDetails = (orderId) => {
  return async function (dispatch) {
    try {
      dispatch({ type: ORDER_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/v1/eats/orders/${orderId}`);
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const clearErros = () => {
  return async function (dispatch) {
    dispatch({ type: CLEAR_ERRORS });
  };
};
