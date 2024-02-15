import React, { useState } from "react";

const Design1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const [isMenuVisible, setMenuVisibility] = useState(false);
  
    const [topData, setTopData] = useState([
      {
        title: "Shipments",
        path: "#",
        img: `/img/send-2.png`,
        isMenuVisible: false,
      },
      {
        title: "Contacts",
        path: "#",
        img: `/img/people.png`,
        isMenuVisible: false,
      },
      {
        title: "Creators",
        path: "#",
        img: `/img/brush.png`,
        isMenuVisible: false,
      },
      {
        title: "Tools",
        path: "#",
        img: `/img/color-swatch.png`,
        isMenuVisible: false,
      },
      {
        title: "Assistance",
        path: "#",
        img: `/img/message-question.png`,
        isMenuVisible: false,
      },
    ]);
  
    const toggleMenu = (index) => {
      const updatedData = [...topData];
      updatedData[index].isMenuVisible = !updatedData[index].isMenuVisible;
      setTopData(updatedData);
    };
  return (
    <div>
      {" "}
      <div className="">
        <button
          onClick={toggleSidebar}
          data-drawer-target="separator-sidebar"
          data-drawer-toggle="separator-sidebar"
          aria-controls="separator-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="separator-sidebar"
          className={`separator-sidebardiv fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            isOpen ? "" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto shadow-md bg-white">
            <div className="flex-grow">
              <div className="weblogobig px-4 mt-12 text-center">
                <img className="" src="/img/weblogobig.png" alt="Logo" />
              </div>
              <div className="">
                <ul className="space-y-1">
                  {topData?.map((item, index) => (
                    <li key={index}>
                      <a
                        className={`flex justify-between bg-white rounded-xl py-3 px-4 cursor-pointer ${
                          item.isMenuVisible ? "active" : ""
                        }`}
                        onClick={() => toggleMenu(index)}
                      >
                        <div className="flex items-center gap-4">
                          <img src={item.img} alt="Icon" />
                          <p className="sidemenutext">{item.title}</p>
                        </div>
                        <img
                          className={
                            item.isMenuVisible ? "menuimage" : "menuactive"
                          }
                          src="/img/arrow-right.png"
                          alt="Arrow"
                        />
                      </a>

                      {item.isMenuVisible && (
                        <div className="mysubmenushow flex justify-center items-center">
                          <div>
                            <a className="flex justify-between bg-white rounded-xl py-3 px-4">
                              <div className="flex items-center gap-4">
                                <p className="sidemenutext">Option 1</p>
                              </div>
                            </a>
                            <a className="flex justify-between bg-white rounded-xl py-3 px-4">
                              <div className="flex items-center gap-4">
                                <p className="sidemenutext">Option 2</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Button to toggle sidebar on mobile */}
          <button
            className="buttoninmobile sm:hidden fixed  p-2 bg-gray-300 text-black rounded-md"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </aside>
      </div>
      <div class="p-4 sm:ml-64">
        <div className="maindiv">
          <div className="">
            <h2 className="sr-only">Steps</h2>

            <div className="mystepdivshow relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
              <ol className="steporder relative z-10 flex justify-between text-sm font-medium text-gray-500">
                <li className="flex items-center gap-2 bg-white "></li>

                <li className="flex items-center gap-2 bg-white ">
                  <div className="stepformcode">
                    <div className="stepform">
                      <img src="/img/horn.png" />
                    </div>
                    <h4 className="sideoptiontext hidden sm:block">
                      {" "}
                      Campaign{" "}
                    </h4>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-white ">
                  <div className="stepformcode">
                    <div className="stepform">
                      <img src="/img/stepsend.png" />
                    </div>
                    <h4 className="sideoptiontext hidden sm:block"> Sender </h4>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-white ">
                  <div className="stepformcode">
                    <div className="stepform peopleshow">
                      <img src="/img/steppeople.png" />
                    </div>
                    <h4 className="sideoptiontext hidden sm:block">
                      {" "}
                      Contacts
                    </h4>
                  </div>
                </li>

                <li className="flex items-center gap-2 bg-white ">
                  <div className="stepformcode">
                    <div className="stepform unactivestep">
                      <img src="/img/message.png" />
                    </div>
                    <h4 className="sideoptiontext hidden sm:block"> Message</h4>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-white ">
                  <div className="stepformcode">
                    <div className="stepform unactivestep">
                      <img src="/img/calendar.png" />
                    </div>
                    <h4 className="sideoptiontext hidden sm:block"> Date</h4>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-white ">
                  <div className="stepformcode">
                    <div className="stepform unactivestep">
                      <img src="/img/checkicon.png" />
                    </div>
                    <h4 className="sideoptiontext hidden sm:block">
                      {" "}
                      Confirmation
                    </h4>
                  </div>
                </li>
                <li className="flex items-center gap-2 bg-white "></li>
              </ol>
            </div>
          </div>
          <div className="recipts-div">
            <div className="packhead groupdesc">
              <h6>Recipients</h6>
              <div className="managecredit">
                <h6>+ Add group recipient groups</h6>
              </div>
            </div>
            <div className="showemptyfolderstep">
              <div>
                {" "}
                <img
                  src="/img/folder-open (1) 1.png"
                  className="w-ull m-auto"
                />
                <p>No groups recipient added</p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div className="main-packdetail">
              <div className="packcard showfolder">
                <div className="packhead">
                  <h6>Pack and Credits</h6>
                </div>

                <div className="numbersshowdiv px-6 my-3">
                  <div className="linenumbersshow lineshowinmobile">
                    <h4>Numbers</h4>
                    <p>One number per line</p>
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      class="pastetextarea outline-none"
                      placeholder="Paste here"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-packdetail">
              <div className="packcard showfolder">
                <div className="packhead">
                  <h6>Total</h6>
                </div>

                <div className="pastelist">
                  <div className="imagecontnet selected">
                    <div className="totalnumberssee grid grid-cols-3 gap-4">
                      <div className="totalnumbersview">
                        <h3 className="text-black">12</h3>
                        <p>Selected</p>
                      </div>
                      <div className="totalnumbersview">
                        <h3 className="text-[#FF736A]">2</h3>
                        <p>Excluded</p>
                      </div>
                      <div className="totalnumbersview">
                        <h3 className="text-[#11B16D]">4</h3>
                        <p>Recipients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <button className="backbtn flex items-center justify-cneter gap-2">
              <img src="/img/colredarrow-right.png" />
              Back
            </button>

            <button className="backbtn nextbtn flex items-center justify-cneter gap-2">
              <img src="/img/colredarrow-right (1).png" />
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design1;
