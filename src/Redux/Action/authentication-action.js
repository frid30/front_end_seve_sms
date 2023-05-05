import axios from "axios";
import { BACKEND_URL } from "../../environment";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
} from "../Constants/authentication-constants";

export const register = (params) => async (dispatch, getState) => {
  console.log("data", params);
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}user/signup`,
      params,
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.email
          ? error.response.data.email[0]
          : error.response.data.password
          ? error.response.data.password[0]
          : error.response.data.confirm_password
          ? error.response.data.confirm_password[0]
          : error.response.data.username
          ? error.response.data.username[0]
          : error.message,
    });
  }
};

export const login = (params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}user/signin`, params);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.non_field_errors
        ? error.response.data.non_field_errors[0]
        : error.response.data,
    });
  }
};

export const forgotPassword = (params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BACKEND_URL}user/forgot_password/`,
      params,
      config
    );

    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const resetPassword = (token, uid, params) => async (dispatch) => {
  try {
    dispatch({
      type: USER_RESET_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `${BACKEND_URL}reset_password/${token}/${uid}/`,
      params,
      config
    );

    dispatch({
      type: USER_RESET_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({ type: USER_LOGOUT });
};

export const updateUserProfile = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });
    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${userData.token}`,
      },
    };
    const { data } = await axios.put(
      `${BACKEND_URL}user/update_profile`,
      params,
      config
    );

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.email
          ? error.response.data.email[0]
          : error.response.data.username
          ? error.response.data.username[0]
          : error.message,
    });
  }
};
export const updateUserPassword = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PASSWORD_REQUEST,
    });
    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${userData.token}`,
      },
    };
    const { data } = await axios.post(
      `${BACKEND_URL}user/password-change`,
      params,
      config
    );

    dispatch({
      type: USER_UPDATE_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    console.log("error -- ", error);
    dispatch({
      type: USER_UPDATE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
