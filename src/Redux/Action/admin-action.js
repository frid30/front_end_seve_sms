import axios from "axios";
import { BACKEND_URL } from "../../environment";

import {
  GET_ADMIN_TASK_LIST_REQUEST,
  GET_ADMIN_TASK_LIST_SUCCESS,
  GET_ADMIN_TASK_LIST_FAIL,
  ADD_ADMIN_TASK_REQUEST,
  ADD_ADMIN_TASK_SUCCESS,
  ADD_ADMIN_TASK_FAIL,
  DELETE_ADMIN_TASK_REQUEST,
  DELETE_ADMIN_TASK_SUCCESS,
  DELETE_ADMIN_TASK_FAIL,
  ADD_ADMIN_BALANCE_REQUEST,
  ADD_ADMIN_BALANCE_SUCCESS,
  ADD_ADMIN_BALANCE_FAIL,
  GET_ADMIN_BALANCE_REQUEST,
  GET_ADMIN_BALANCE_SUCCESS,
  GET_ADMIN_BALANCE_FAIL,
  GET_API_KEY_REQUEST,
  GET_API_KEY_SUCCESS,
  GET_API_KEY_FAIL,
  GET_LOGS_LIST_REQUEST,
  GET_LOGS_LIST_SUCCESS,
  GET_LOGS_LIST_FAIL,
} from "../Constants/admin-constants";

export const getAPIKey = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_API_KEY_REQUEST,
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
    const { data } = await axios.get(`${BACKEND_URL}user/key/`, config);

    dispatch({
      type: GET_API_KEY_SUCCESS,
      payload: data,
    });
    localStorage.setItem("api_key", data?.key);
    return true;
  } catch (error) {
    dispatch({
      type: GET_API_KEY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_LOGS_LIST_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}user/get_logs`, config);

    dispatch({
      type: GET_LOGS_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: GET_LOGS_LIST_FAIL,
      payload:
        error.response && error.response.data.amount[0]
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBalance = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ADMIN_BALANCE_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}user/get_balance/`, config);

    dispatch({
      type: GET_ADMIN_BALANCE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: GET_ADMIN_BALANCE_FAIL,
      payload:
        error.response && error.response.data.amount[0]
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addBalance = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ADMIN_BALANCE_REQUEST,
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

    const { data } = await axios.patch(
      `${BACKEND_URL}user/add_balance`,
      params,
      config
    );

    dispatch({
      type: ADD_ADMIN_BALANCE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: ADD_ADMIN_BALANCE_FAIL,
      payload:
        error.response && error.response.data.amount[0]
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addTasks = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ADMIN_TASK_REQUEST,
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
      `${BACKEND_URL}user/create_task/`,
      params,
      config
    );

    dispatch({
      type: ADD_ADMIN_TASK_SUCCESS,
      payload: data,
    });
    // console.log("data - ", data);
    // dispatch({
    //   type: GET_ADMIN_BALANCE_SUCCESS,
    //   payload: { amount: 55 },
    // });

    return true;
  } catch (error) {
    dispatch({
      type: ADD_ADMIN_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTaskList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ADMIN_TASK_LIST_REQUEST,
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

    const { data } = await axios.get(`${BACKEND_URL}user/all_task/`, config);

    dispatch({
      type: GET_ADMIN_TASK_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: GET_ADMIN_TASK_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTasks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_ADMIN_TASK_REQUEST,
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

    const { data } = await axios.delete(
      `${BACKEND_URL}user/create_task/`,
      config
    );

    dispatch({
      type: DELETE_ADMIN_TASK_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: DELETE_ADMIN_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
