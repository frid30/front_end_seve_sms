import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getAPIKeyData } = useSelector((state) => state.getAPIKeyReducer);
  const { userData } = useSelector((state) => state.authReducer);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="header-main-div fixed- w-full bg-white- text-white z-10">
        {/* <div className="flex items-center justify-start  pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
          <img
          className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          />
          <span className="hidden md:block">ADMIN</span>
          </div> */}
        {/* <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
          <svg
          className="w-5 text-gray-600 h-5 cursor-pointer"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          </button>
          <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
          </div>
          <ul className="flex items-center">
          <li>
          <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          </li>
          <li>
          <Link
          to=""
          onClick={logoutHandler}
          className="flex items-center mr-4 hover:text-blue-100"
          >
          <span className="inline-flex mr-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          </span>
          Logout
          </Link>
          </li>
          </ul>
          </div> */}
        <div className="header-main-div flex justify-between items-center">
          <div className="seven-logo-header ml-14 md:ml-64">
            <img className="company-logo-header" src="/img/company-logo.svg" />
          </div>
          <div className="admin-name-section">
            <div className="header-account-div">
              <h3 className="header-account">Account</h3>
              <p>
                {userData?.username
                  ? "Master (" + userData?.username + ")"
                  : "Master ()"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
