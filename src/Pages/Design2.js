import React, { useState } from "react";

const Design2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {" "}
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
                } pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
              >
                <a class="contactustext mr-5 hover:text-gray-900">
                  <img src="/img/micro.png" />
                  Contact Us
                </a>
                <a class="trynowtext mr-5 hover:text-gray-900 md:mt-0 mt-6">
                  Try Now!
                </a>
                <a class="connectiontext mr-5 hover:text-gray-900 md:mt-0 mt-6">
                  Connection
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div class="grid md:grid-cols-2 gap-4 md:px-12 md:mt-0 mt-12 px-5">
          <div className="main-packdetail">
            <div className="packcard">
              <div className="packhead">
                <h6>Pack and Credits</h6>
                <div className="managecredit">
                  <h6>Manage</h6>
                  <h6>Buy Credits</h6>
                </div>
              </div>

              <div className="imagecontnet">
                <div className="relative">
                  <img src="/img/Group 1496.png" />
                  <h4 className="statescontnet">States</h4>
                </div>

                <div className="totalnumberssee grid grid-cols-3 gap-4">
                  <div className="totalnumbersview">
                    <h3 className="text-[#BD7CFF]">20</h3>
                    <p>SMS</p>
                  </div>
                  <div className="totalnumbersview">
                    <h3 className="text-[#3787FF]">30</h3>
                    <p>MMS</p>
                  </div>
                  <div className="totalnumbersview">
                    <h3 className="text-[#FF736A]">12</h3>
                    <p>Email</p>
                  </div>
                </div>
                <div className="totalnumberssee grid grid-cols-3 gap-4">
                  <div className="totalnumbersview">
                    <h3 className="text-[#38C4C4]">07</h3>
                    <p>Mobile</p>
                  </div>
                  <div className="totalnumbersview">
                    <h3 className="text-[#11B16D]">14</h3>
                    <p>Direct Answering</p>
                  </div>
                  <div className="totalnumbersview">
                    <h3 className="text-[#FFB802]">15</h3>
                    <p>Fixed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-packdetail">
            <div className="packcard">
              <div className="packhead">
                <h6> Current Orders</h6>
                <div className="managecredit">
                  <h6>View All</h6>
                </div>
              </div>

              <div className="showemptyfolder">
                <div>
                  {" "}
                  <img
                    src="/img/folder-open (1) 1.png"
                    className="w-ull m-auto"
                  />
                  <p>No orders to show</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
