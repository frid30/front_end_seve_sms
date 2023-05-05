import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getAPIKey } from "../Redux/Action/admin-action";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { getAPIKeyData } = useSelector((state) => state.getAPIKeyReducer);
  const { userData } = useSelector((state) => state.authReducer);

  // useEffect(() => {
  //   dispatch(getAPIKey());
  // }, []);

  const [name, setName] = useState("Copy Key");
  function doublefunction() {
    setTimeout(() => {
      setName("Copy Key");
    }, 2000);
    setName("Copied!");
  }

  return (
    <>
      <div className="transparent-bg flex flex-col flex-auto- min-h-screen- flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="all-content-div w-full h-screen-">
            <main>
              <div className="pt-0 px-4">
                <div className="xl:gap-4 my-4">
                  <div
                    className="api-dashboard-welcome"
                    style={{
                      background: "url(/img/range.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "101% 35px",
                    }}
                  >
                    <p className="welcome-back-user">
                      Welcome back,
                      <span> {"  " + userData?.username}</span>
                    </p>
                    <h3 className="api-dashboard">API Dashboard</h3>
                  </div>
                  <div className="sm:flex">
                    <div className="api-key-master sm:w-1/3 my-4 sm:my-6 ">
                      <h3 className="api-heading">API key</h3>

                      <div className="input-relative">
                        <input
                          className="master-box"
                          placeholder="Master (c15134c)"
                          type="text"
                          value={
                            getAPIKeyData?.key
                              ? "Master (" +
                                getAPIKeyData?.key.substring(0, 8) +
                                ")"
                              : "Master ()"
                          }
                          name="key"
                        />
                        <CopyToClipboard
                          text={getAPIKeyData?.key}
                          onCopy={() => doublefunction()}
                        >
                          <span>
                            <img className="copy-logo" src="/img/copy.svg" />
                          </span>
                        </CopyToClipboard>
                        <p
                          className={
                            name == "Copied!" ? "copied" : "non-copied"
                          }
                        >
                          {name == "Copied!" ? name : name}
                        </p>
                      </div>
                    </div>
                    {/* <div className="api-key-master sm:w-1/3 my-4 sm:my-6 sm:mx-2">
                      <h3 className="api-heading">API secret</h3>
                      <div className="input-relative">
                        <input
                          className="master-box"
                          placeholder="........"
                          type="password"
                        />
                        <img className="copy-logo" src="/img/copy.svg" />
                      </div>
                    </div>
                    <div className="api-third-master sm:w-1/3 my-4 sm:my-6">
                      <h3 className="api-heading">Status summary</h3>
                      <div className="master-box-third">
                        <p className="all-operation">All operation</p>
                      </div>
                    </div> */}
                  </div>
                  <div className="try-our-api-main">
                    <div className="try-now-text-btn flex items-center justify-between">
                      <div className="discover-how">
                        <h3>Try our APIs</h3>
                        <p>Discover how easy developing with our APIs can be</p>
                      </div>
                      <div className="try-now-div">
                        <button className="try-now-btn">Try now</button>
                      </div>
                    </div>
                    <div className="sm:flex items-center">
                      <div className="api-key-master sm:w-1/3 my-4 sm:my-6 ">
                        <img
                          className="dashboard-img sm:mb-4"
                          src="/img/chat.svg"
                        />
                        <h3 className="send-ams-text">Send an SMS</h3>
                        <p className="send-and-recieve">
                          Send and recieve SMS from all over the world
                        </p>
                      </div>
                      <div className="api-key-master sm:w-1/3 my-4 sm:my-6 sm:mx-8">
                        <img
                          className="dashboard-img sm:mb-4"
                          src="/img/mark.svg"
                        />
                        <h3 className="send-ams-text">Verify a user</h3>
                        <p className="send-and-recieve">
                          Two factor authentication made simple through an API
                        </p>
                      </div>
                      <div className="api-third-master sm:w-1/3 my-4 sm:my-6">
                        <img
                          className="dashboard-img sm:mb-4"
                          src="/img/seach.svg"
                        />
                        <h3 className="send-ams-text">Look up a number</h3>
                        <p className="send-and-recieve">
                          Real-time intelligence on any phone number in the
                          world
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
