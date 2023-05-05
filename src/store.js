import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  RegisterReducer,
  LoginReducer,
  resetPasswordReducer,
  forgotPasswordReducer,
  updateUserProfileReducer,
  updateUserPasswordReducer,
} from "./Redux/Reducer/authentication-reducer";

import {
  addTaskReducer,
  getTaskListReducer,
  deleteTaskReducer,
  addBalanceReducer,
  getBalanceReducer,
  getAPIKeyReducer,
  getLogsReducer,
} from "./Redux/Reducer/admin-reducer";
import {
  countrylistReducer,
  postcountrytReducer,
  getDetailsReducer,
  deleteCountryReducer,
  updateCountryReducer,
} from "./Redux/Reducer/Country-reducer";

const reducer = combineReducers({
  authReducer: LoginReducer,
  RegisterReducer,
  resetPasswordReducer,
  forgotPasswordReducer,
  addTaskReducer,
  addBalanceReducer,
  getBalanceReducer,
  getLogsReducer,
  getTaskListReducer,
  countrylistReducer,
  postcountrytReducer,
  getDetailsReducer,
  deleteCountryReducer,
  updateCountryReducer,
  deleteTaskReducer,
  getAPIKeyReducer,
  updateUserProfileReducer,
  updateUserPasswordReducer,
});

// get userData from localStorage
const userDataFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const userAPIKeyFromStorage = localStorage.getItem("api_key")
  ? localStorage.getItem("api_key")
  : null;

// initialState
const initialState = {
  authReducer: { userData: userDataFromStorage },
  getAPIKeyReducer: { api_key: userAPIKeyFromStorage },
};
// middleware used thunk
const middleware = [thunk];

// store variable initialized
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
