import axios from "axios";
import {
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  CLEAR_ERRORS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstant";

export const login = (email, password) => {
  return async function (dispatch) {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = axios.post(
        "/api/v1/users/login",
        { email, password },
        config
      );

      dispatch({ type: LOGIN_SUCCESS, payload: data.data.user });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: "Login Failed" });
    }
  };
};

export const register = (userData) => {
  return async function (dispatch) {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const { data } = axios.post("/api/v1/users/signup", userData, config);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.data.user });

      // returning immediately because caller needs data immediately
      return data.data.user;
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL, payload: "Registration Failed" });
    }
  };
};

export const loadUser = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: LOAD_USER_REQUEST });
      const { data } = axios.get("/api/v1/users/me");
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOAD_USER_FAIL, payload: "Could not load user" });
    }
  };
};

export const updateProfile = (userData) => {
  return async function (dispatch) {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const { data } = await axios.put(
        "/api/v1/users/me/update",
        userData,
        config
      );
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error.reponse.data.message,
      });
    }
  };
};

export const logout = () => {
  return async function (dispatch) {
    try {
      await axios.get("/api/v1/users/logout");
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };
};

export const clearErrors = () => {
  return async function (dispatch) {
    dispatch({ type: CLEAR_ERRORS });
  };
};