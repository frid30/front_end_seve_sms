import {
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
  COUNTRY_POST_REQUEST,
  COUNTRY_POST_SUCCESS,
  COUNTRY_POST_FAIL,
  COUNTRY_DETAILS_REQUEST,
  COUNTRY_DETAILS_SUCCESS,
  COUNTRY_DETAILS_FAIL,
  COUNTRY_DELETE_REQUEST,
  COUNTRY_DELETE_SUCCESS,
  COUNTRY_DELETE_FAIL,
  COUNTRY_UPDATE_REQUEST,
  COUNTRY_UPDATE_SUCCESS,
  COUNTRY_UPDATE_FAIL,
} from "../Constants/Country-constants";

import { BACKEND_URL } from "../../environment";
import axios from "axios";

export const countrylistActions = () => async (dispatch) => {
  try {
    dispatch({
      type: COUNTRY_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}country/`);

    dispatch({
      type: COUNTRY_LIST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: COUNTRY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const countrypostActions = (parms) => async (dispatch) => {
  try {
    dispatch({
      type: COUNTRY_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(`${BACKEND_URL}country/`, parms, config);

    dispatch({
      type: COUNTRY_POST_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    console.log("error error -- ", error.response.data);
    dispatch({
      type: COUNTRY_POST_FAIL,
      payload:
        error.response && error.response.data.country
          ? error.response.data.country[0]
          : error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const countryinfo = (countryId) => async (dispatch) => {
  try {
    dispatch({
      type: COUNTRY_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${BACKEND_URL}country/${countryId}/`);
    dispatch({
      type: COUNTRY_DETAILS_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: COUNTRY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletecountryAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COUNTRY_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`${BACKEND_URL}country/${id}/`);
    dispatch({
      type: COUNTRY_DELETE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: COUNTRY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatecountryAction = (id, parms) => async (dispatch) => {
  try {
    dispatch({
      type: COUNTRY_UPDATE_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `${BACKEND_URL}country/${id}/`,
      parms,
      config
    );
    dispatch({
      type: COUNTRY_UPDATE_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    console.log("error error -- ", error.response.data);
    dispatch({
      type: COUNTRY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.country[0]
          : error.response.data.country[0]
          ? error.response.data.message
          : error.message,
    });
  }
};
