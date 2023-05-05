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

export const countrylistReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_LIST_REQUEST:
      return { loading: true };
    case COUNTRY_LIST_SUCCESS:
      return { loading: false, success: true, countrylist: action.payload };
    case COUNTRY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postcountrytReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_POST_REQUEST:
      return { loading: true };
    case COUNTRY_POST_SUCCESS:
      return { loading: false, success: true, countrylist: action.payload };
    case COUNTRY_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_DETAILS_REQUEST:
      return { loading: true };
    case COUNTRY_DETAILS_SUCCESS:
      return { loading: false, success: true, countrydetals: action.payload };
    case COUNTRY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_DELETE_REQUEST:
      return { loading: true };
    case COUNTRY_DELETE_SUCCESS:
      return { loading: false, success: true, countrydetals: action.payload };
    case COUNTRY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_UPDATE_REQUEST:
      return { loading: true };
    case COUNTRY_UPDATE_SUCCESS:
      return { loading: false, success: true, country: action.payload };
    case COUNTRY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
