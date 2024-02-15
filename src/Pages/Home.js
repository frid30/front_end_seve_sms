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

  const [open, setOpen] = useState(false);

  const [volume, setVolume] = useState(100); // default volume
  const [selectedPlan, setSelectedPlan] = useState("package1");
  const [totalAmount, setTotalAmount] = useState(0.59);

  const prices = {
    package1: 0.59,
    package2: 0.54,
    package3: 0.49,
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
    updateTotal(newVolume, selectedPlan);
  };

  const handlePlanChange = (newPlan) => {
    setSelectedPlan(newPlan);
    updateTotal(volume, newPlan);
  };

  const updateTotal = (newVolume, newPlan) => {
    const selectedPackagePrice = prices[newPlan];
    const newTotalAmount = newVolume * selectedPackagePrice;
    setTotalAmount(newTotalAmount);
  };

  const handlePurchase = () => {
    // Perform purchase logic here
    alert("Purchase button clicked!");
  };

  return (
    <>
      <div>
        {" "}
        {/* center section  */}
        <div className="">
          <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
            <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
              <div className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                  <a
                    href="#"
                    className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                  >
                    <img src="/img/spothit.png" />
                  </a>
                  <button
                    className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                    onClick={() => setOpen(!open)}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-6 h-6"
                    >
                      <path
                        style={{ display: !open ? "block" : "none" }}
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        style={{ display: open ? "block" : "none" }}
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <nav
                  className={`flex-col flex-grow ${
                    open ? "flex" : "hidden"
                  }  md:flex md:justify-end md:flex-row`}
                >
                  <Link class="contactustext mr-5 hover:text-gray-900" to="#" >
                    <img src="/img/micro.png" />
                    Contact Us
                  </Link>
                  <Link to="/login" class="trynowtext mr-5 hover:text-gray-900 md:mt-0 mt-6">
                    Try Now!
                  </Link>
                  <a class="connectiontext mr-5 hover:text-gray-900 md:mt-0 mt-6">
                    Connection
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mainsection">
          <div className="maincentersection">
            <div
              className="container mx-auto"

              // style={{maxWidth:"1200px" , margin:  "auto"}}
            >
              <div className="md:flex">
                <div className="mainbgimagefirst">
                  <div className="maincenter-contnet">
                    <div>
                      <h3 className="smstext">
                        SMS <span className="protext">PRO</span>
                      </h3>
                      <p className="desc-textshow my-6">
                        A quality marketing solution accessible to everyone.
                      </p>
                      <p className="desc-textshow">
                        Send your marketing SMS directly from the Spot hit
                        interface, and carry out your SMS campaigns benefiting
                        from all the features of SMS Pro, at no additional cost!
                      </p>
                    </div>

                    <div className="my-12">
                      <h6 className="develop-text">Develop your business</h6>
                      <div className="md:flex gap-12 mt-6">
                        <div>
                          <h1 className="persent-text">
                            97<span className="subpers">%</span>
                          </h1>
                          <p className="desc-textshow">reading rate</p>
                        </div>

                        <div>
                          <h1 className="persent-text">
                            60<span className="subpers">%</span>
                          </h1>
                          <p className="desc-textshow">memorization rate</p>
                        </div>
                        <div>
                          <h1 className="persent-text">
                            97<span className="subpers">mins</span>
                          </h1>
                          <p className="desc-textshow">carry out campaign</p>
                        </div>
                      </div>
                    </div>

                    <div className="credit-text">
                      <p className="desc-textshow">
                        100 credits offered upon registration
                      </p>
                      <a class="trynowtext trymebtn hover:text-gray-900">
                        Try Now!
                      </a>
                    </div>
                    <div className="mt-12">
                      <a className="view-price" href="">
                        View Prices
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mainbgimagesecond">
                  <div className="relative">
                    <div className="iphoneimage">
                      <img className="w-full" src="/img/iPhone 12 Pro.png" />
                    </div>
                    <div className="frompriceset">
                      <h6>From 0.039$</h6>
                      <p>Excluding VAT/SMS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-bttomformsection">
            <div className="bgshowimage">
              <div
                className="container mx-auto"

                // style={{maxWidth:"1200px" , margin:  "auto"}}
              >
                {/* <div className="mobilecardplan py-12">
                <h6 className="create-plan mb-6">Create a plan</h6>
                <div className="md:flex items-center gap-8">
                  <div className="card-vlaueadd">
                    <div className="selectpackagemain">
                      <h6 className="selectpackagetext mb-4">Enter volume</h6>
                      <input
                        type="number"
                        className="selectpackageinput w-full"
                        placeholder="100"
                      />
                    </div>
                    <div className="mt-12">
                      <h6 className="selectpackagetext mb-4">Select package</h6>
                      <div className="coinsmaintext">
                        <div className="flex items-center gap-2">
                          <img src="/img/coin.svg" />
                          <p>From 100 to 1,000</p>
                        </div>
                        <div>
                          <p className="text-[#219653]">$0.59</p>
                        </div>
                      </div>

                      <div className="coinsmaintext unselect mt-4">
                        <div className="flex items-center gap-2">
                          <img src="/img/coinsecond.png" />
                          <p>From 10,000 to 100,000</p>
                        </div>
                        <div>
                          <p className="text-[#219653]">$0.54</p>
                        </div>
                      </div>
                      <div className="coinsmaintext unselect mt-4">
                        <div className="flex items-center gap-2">
                          <img src="/img/coinsecond.png" />
                          <p>More than 100,000</p>
                        </div>
                        <div>
                          <p className="text-[#219653]">$0.49</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-checkout">
                    <div className="selectpackagemain">
                      <h6 className="selectpackagetext mb-4">
                        <img src="" /> Checkout
                      </h6>
                      <hr />
                      <div className="card-checkoutsub">
                        <div className="checkout-show mt-4">
                          <h2 className="totalcontnet">Total:</h2>
                          <div>
                            <h2 className="totalcontnetpaid">$5.00</h2>
                            <p>excluding VAT</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button class="purchase-btn hover:text-gray-900 outline-none mb-6">
                          Purchase
                        </button>

                        <p className="purcahse-text">
                          Volume greater than 1 million per month starting from
                          0.039
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

                <div className="mobilecardplan py-12">
                  <h6 className="create-plan mb-6">Create a plan</h6>
                  <div className="md:flex items-center gap-8">
                    <div className="card-vlaueadd">
                      <div className="selectpackagemain">
                        <h6 className="selectpackagetext mb-4">Enter volume</h6>
                        <input
                          type="number"
                          className="selectpackageinput w-full"
                          placeholder="100"
                          // value={volume}
                          // onChange={handleVolumeChange}
                        />
                      </div>
                      <div className="mt-12">
                        <h6 className="selectpackagetext mb-4">
                          Select package
                        </h6>
                        <div
                          className={`coinsmaintext ${
                            selectedPlan === "package1" ? "active" : ""
                          }`}
                          onClick={() => handlePlanChange("package1")}
                        >
                          <div className="flex items-center gap-2">
                            <img src="/img/coin.svg" alt="Coin" />
                            <p>From 100 to 1,000</p>
                          </div>
                          <div>
                            <p className="text-[#219653]">$0.59</p>
                          </div>
                        </div>
                        <div
                          className={`coinsmaintext ${
                            selectedPlan === "package2" ? "active" : ""
                          } mt-4`}
                          onClick={() => handlePlanChange("package2")}
                        >
                          <div className="flex items-center gap-2">
                            <img src="/img/coinsecond.png" alt="Coin" />
                            <p>From 10,000 to 100,000</p>
                          </div>
                          <div>
                            <p className="text-[#219653]">$0.54</p>
                          </div>
                        </div>
                        <div
                          className={`coinsmaintext ${
                            selectedPlan === "package3" ? "active" : ""
                          } mt-4`}
                          onClick={() => handlePlanChange("package3")}
                        >
                          <div className="flex items-center gap-2">
                            <img src="/img/coinsecond.png" alt="Coin" />
                            <p>More than 100,000</p>
                          </div>
                          <div>
                            <p className="text-[#219653]">$0.49</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-checkout">
                      <div className="selectpackagemain">
                        <h6 className="selectpackagetext mb-4 flex items-center gap-2">
                          <img src="/img/shopping-cart.png" alt="icon" />{" "}
                          Checkout
                        </h6>
                        <hr />
                        <div className="card-checkoutsub">
                          <div className="checkout-show mt-4">
                            <h2 className="totalcontnet">Total:</h2>
                            <div>
                              <h2 className="totalcontnetpaid">
                                ${totalAmount.toFixed(2)}
                              </h2>
                              <p>excluding VAT</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            className="purchase-btn hover:text-gray-900 outline-none mb-6"
                            onClick={handlePurchase}
                          >
                            Purchase
                          </button>
                          <p className="purcahse-text">
                            Volume greater than 1 million per month starting
                            from 0.039
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fromcampagain py-12 ">
                  <h6 className="create-plancampa mb-6">
                    Send your first campaign
                  </h6>

                  <p className="takeadvantage-text mb-8">
                    Take advantage of 100 free credits
                  </p>
                  <div className="form-showfirst mt-6">
                    <input
                      type="text"
                      className="selectpackageinput w-full"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-showfirst mt-6">
                    <input
                      type="text"
                      className="selectpackageinput w-full"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="form-showfirst mt-6">
                    <input
                      type="email"
                      className="selectpackageinput w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <button class="purchase-btn hover:text-gray-900 outline-none mb-6 mt-6">
                      Try Now!
                    </button>

                    <p className="takeadvantage-text my-1">
                      Essential pack, free and without obligation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* center section  */}
        {/* footer  */}
        <footer
          style={{ fontFamily: "Outfit" }}
          class="text-white body-font bg-[#1f1f1f]"
        >
          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="mainlogofooterfirst flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="/img/weblogo.png" />
              </a>
              <p class="mt-2 text-sm text-white">
                © 2024 - Service published by the company LINK Mobility with
                capital of €1,572,960. Spot Hit is a trademark registered with
                the INPIAny reproduction is prohibited
              </p>
              <div className="allsocialmedialogo">
                <img src="/img/insta.png" className="mr-8" />
                <img src="/img/web.png" className="mr-8" />
                <img src="/img/goolge.png" className="mr-8" />
                <img src="/img/youtube.png" className="mr-8" />
              </div>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="mainlogofootersecond w-full px-4">
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-white allsectionfunction">
                      <img src="/img/Vector.png" />
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a class="text-white allsectionfunction">
                      <img src="/img/blog-text 1.png" />
                      Blog
                    </a>
                  </li>
                  <li>
                    <a class="text-white allsectionfunction">
                      <img src="/img/Vector (3).png" />
                      General Terms & Conditions
                    </a>
                  </li>
                </nav>
              </div>
              <div class="mainlogofootersecond w-full px-4">
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-white allsectionfunction">
                      <img src="/img/Vector (1).png" />
                      Join us
                    </a>
                  </li>
                  <li>
                    <a class="text-white allsectionfunction">
                      <img src="/img/Vector (2).png" />
                      Legal Notice
                    </a>
                  </li>
                  <li>
                    <a class="text-white allsectionfunction">
                      <img src="/img/Vector (4).png" />
                      GDPR
                    </a>
                  </li>
                  <li></li>
                </nav>
              </div>
              <div class="mainlogofootersecond w-full px-4">
                <nav class="list-none mb-10">
                  <li>
                    <a class="">
                      <img src="/img/image 9.png" />
                    </a>
                  </li>
                  <li>
                    <a class="">
                      <img src="/img/image 8.png" />
                    </a>
                  </li>
                </nav>
              </div>
              <div class="mainlogofootersecond w-full px-4">
                <nav class="list-none mb-10">
                  <li>
                    <a class="">
                      <img src="/img/image 11.png" />
                    </a>
                  </li>
                  <li>
                    <a class="">
                      <img src="/img/image 10.png" />
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* <div className="custom-container">
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
      </div> */}
    </>
  );
};

export default Home;
