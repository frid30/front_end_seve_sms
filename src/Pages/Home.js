import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Action/authentication-action";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { countrylistActions } from "../Redux/Action/Country-action";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);

  const { countrylist } = useSelector((state) => state.countrylistReducer);

  useEffect(() => {
    dispatch(countrylistActions());
  }, []);

  const [country, setCountry] = useState(null);
  const [price, setPrice] = useState(0);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
  const menuProps = {
    variant: "menu",
    disableScrollLock: true,
  };

  // useEffect(() => {

  //   window.addEventListener("scroll", handler);
  //   return () => {
  //     window.removeEventListener("scroll", handler);
  //   };
  // });
  const icon = "<i className='fas fa-angle-down'></i>";

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="custom-container">
        <div className="home-header flex items-center justify-between my-8">
          <div className="header-logo">
            <Link to="/">
              <img src="/img/company-logo.svg" />
            </Link>
          </div>
          <div className="header-logo-mobile">
            <Link to="/">
              <img src="/img/mobile-logo.svg" />
            </Link>
          </div>

          {!userData ? (
            <div className="login-register-section flex items-center">
              <div className="login-section">
                <Link to="/login">
                  <button className="login-btn">Login</button>
                </Link>
              </div>

              <div className="register-section">
                <Link to="/register">
                  <button className="register-btn ml-6">Register</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="login-register-section flex items-center">
              <nav className="">
                <div className="flex flex-wrap justify-between mx-auto">
                  <div className="MOBILE-MENU flex lg:hidden">
                    <div
                      className="HAMBURGER-ICON space-y-2"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                      <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                      <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                      >
                        <svg
                          className="h-8 w-8 text-gray-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                      <ul
                        className={
                          isNavOpen
                            ? "flex flex-col p-4 lg:flex-row md:space-x-8 md:mt-0 md:text-sm mobi-text-center"
                            : "flex flex-col p-4 md:flex-row lg:flex-row md:space-x-8 md:mt-0 md:text-sm"
                        }
                      >
                        <li>
                          <Link to="/dashboard">
                            <button className="register-btn">Dashboard</button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/add-task">
                            <button className="register-btn">
                              Create Task
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/task-list">
                            <button className="register-btn">Tasks</button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/deposit">
                            <button className="register-btn">Deposit</button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/logs">
                            <button className="register-btn">Logs</button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/account-setting">
                            <button className="register-btn">Settings</button>
                          </Link>
                        </li>
                        <li className="register-section logout-btn">
                          <Link to="">
                            <button
                              onClick={logoutHandler}
                              className="login-btn"
                            >
                              Log Out
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="DESKTOP-MENU hidden space-x-8 lg:flex items-center justify-between">
                    <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm">
                      <li>
                        <Link to="/dashboard">
                          <button className="register-btn">Dashboard</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/add-task">
                          <button className="register-btn">Create Task</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/task-list">
                          <button className="register-btn">Tasks</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/deposit">
                          <button className="register-btn">Deposit</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/logs">
                          <button className="register-btn">Logs</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/account-setting">
                          <button className="register-btn">Settings</button>
                        </Link>
                      </li>
                      <li className="register-section logout-btn">
                        <Link to="">
                          <button onClick={logoutHandler} className="login-btn">
                            Log Out
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
        <div className="mobile-screen-img">
          <img src="/img/mobi-icon.png" />
        </div>
        <div className="home-center-section sm:grid grid-cols-2 my-12">
          <div className="first-center-section sm:my-8">
            <div className="header-content">
              <div className="two-rows">
                {" "}
                <h3 className="grow-your-bussiness">
                  Grow Your Business <br /> With SEVESMS
                </h3>
                <p className="start-ending">
                  Start sending bulk messages to over 190 countries
                  <br /> and 800 operators today.
                </p>
              </div>
              <button className="get-started-btn">Get Started Free</button>
            </div>
          </div>
          <div className="second-center-section">
            <div className="girl-sms">
              <img src="/img/22.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-main-section">
        <div
          style={{ backgroundImage: "url('/img/Group 26022.svg')" }}
          className="bottom-section"
        >
          <div className="bottom-inner-section">
            <div className="bottom-background flex items-center">
              <Select
                IconComponent={KeyboardArrowDownIcon}
                // MenuProps={menuProps}
                onChange={(e) => {
                  setCountry(e.target.value);
                  const selected_opt = countrylist.find(
                    (item) => item.country == e.target.value
                  );
                  if (selected_opt) {
                    setPrice(selected_opt?.price);
                  }
                }}
                value={country}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={null}>Select Country</MenuItem>
                {countrylist?.map((item, index) => {
                  return (
                    <MenuItem
                      price={item?.price}
                      value={item?.country}
                      key={index}
                    >
                      {item?.country}
                    </MenuItem>
                  );
                })}
              </Select>
              {price > 0 && (
                <h3 className="charges-per-sms ml-4">
                  For <span>{price}$</span> per SMS
                </h3>
              )}
            </div>
            <div className="flex ml-5 mt-6">
              <button className="get-started-btn">Get Started Free</button>
              <button className="request-offer-btn ml-4">
                Request an Offer <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
