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

export const getLogsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LOGS_LIST_REQUEST:
      return { loading: true };

    case GET_LOGS_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        getLogsData: action.payload,
      };

    case GET_LOGS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getBalanceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ADMIN_BALANCE_REQUEST:
      return { loading: true };

    case GET_ADMIN_BALANCE_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        getBalanceData: action.payload,
      };

    case GET_ADMIN_BALANCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAPIKeyReducer = (state = { getAPIKey: [] }, action) => {
  switch (action.type) {
    case GET_API_KEY_REQUEST:
      return { loading: true };

    case GET_API_KEY_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        getAPIKeyData: action.payload,
      };

    case GET_API_KEY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addBalanceReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ADMIN_BALANCE_REQUEST:
      return { loading: true };

    case ADD_ADMIN_BALANCE_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
        balance: action.payload.amount,
      };

    case ADD_ADMIN_BALANCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ADMIN_TASK_REQUEST:
      return { loading: true };

    case DELETE_ADMIN_TASK_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case DELETE_ADMIN_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ADMIN_TASK_REQUEST:
      return { loading: true };

    case ADD_ADMIN_TASK_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case ADD_ADMIN_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getTaskListReducer = (state = { taskListData: [] }, action) => {
  switch (action.type) {
    case GET_ADMIN_TASK_LIST_REQUEST:
      return { loading: true };

    case GET_ADMIN_TASK_LIST_SUCCESS:
      return {
        loading: false,
        taskListData: action.payload,
        success: true,
      };

    case GET_ADMIN_TASK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
