import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getBalance } from "../Redux/Action/admin-action";
import { useDispatch, useSelector } from "react-redux";
import { BiLogInCircle } from "react-icons/bi";
import { logout } from "../Redux/Action/authentication-action";
// import { useOutletContext } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const current_route = useLocation();

  // const [newRerender, setNewrerender] = useOutletContext();

  const [balance, setBalance] = useState();

  const { getBalanceData, success } = useSelector(
    (state) => state.getBalanceReducer
  );

  useEffect(() => {
    dispatch(getBalance());
  }, [props.newRerender]);

  // useEffect(() => {
  //   if (getBalanceData) {
  //   }
  // }, [getBalanceData]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  const tokenFromLocalStorage = localStorage.getItem("updateBalance");

  useEffect(() => {
    if (tokenFromLocalStorage) {
      // console.log("hitttttttttttttt");
    }
  }, [tokenFromLocalStorage]);

  return (
    <>
      <div className="sidebar-main-div fixed  px-6 pt-4 flex flex-col left-0 w-14 hover:w-64 md:w-64 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="flex flex-col flex-grow">
          <div className="sidebar-top-section">
            <div className="flex justify-between items-center">
              <div className="credit-left-img">
                <img className="sidebar-cash" src="/img/Group 289567.svg" />
              </div>
              <div className="credit-left">
                <h3 className="credit-balance">
                  €<span> {getBalanceData?.[0]?.amount}</span>
                </h3>
                <p>Credit left</p>
              </div>
            </div>
            <p className="keep-your-account">
              Keep your account running smoothly
            </p>
            <Link to="/deposit">
              <button className="add-funds-btn">Add funds</button>
            </Link>
          </div>

          <ul className="flex flex-col py-4 space-y-1 admin-menus menudiv">
            <li
              className={current_route.pathname == "/dashboard" ? "active" : ""}
            >
              <Link
                to="/dashboard"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600  pr-6 space-mobile-cls"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile dash-m">
                  <img src="/img/Vector.svg" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </Link>
            </li>
            <li
              className={current_route.pathname == "/add-task" ? "active" : ""}
            >
              <Link
                to="/add-task"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6 space-mobile-cls"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile">
                  <img src="/img/tower.svg" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Create Task
                </span>
              </Link>
            </li>
            <li
              className={current_route.pathname == "/task-list" ? "active" : ""}
            >
              <Link
                to="/task-list"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 pr-6 space-mobile-cls"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile">
                  <img src="/img/Icon-updated - 2.svg" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Tasks
                </span>
              </Link>
            </li>
            <li
              className={current_route.pathname == "/deposit" ? "active" : ""}
            >
              <Link
                to="/deposit"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6 space-mobile-cls deposit-a"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile">
                  <img src="/img/Icon-updated 1.svg" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Deposit
                </span>
              </Link>
            </li>
            <li className={current_route.pathname == "/logs" ? "active" : ""}>
              <Link
                to="/logs"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6 space-mobile-cls"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile">
                  <img src="/img/Vector11.svg" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logs
                </span>
              </Link>
            </li>

            <li
              className={
                current_route.pathname == "/account-setting" ? "active" : ""
              }
            >
              <Link
                to="/account-setting"
                className="relative setting flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6 space-mobile-cls"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile">
                  <img src="/img/Icon.svg" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </Link>
            </li>
            <hr className="bodertop border-t-2"></hr>
            <li className=" logoutsec">
              <Link
                to="/login"
                onClick={logoutHandler}
                className="relative mt-2 mobile-logout flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800  hover:border-blue-500 dark:hover:border-gray-800 pr-6 space-mobile-cls"
              >
                <span className="inline-flex justify-center items-center ml-4 space-unset-mobile">
                  <BiLogInCircle className="text-xl" />
                  {/* <img src="/img/buynumbers.png"/> */}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
