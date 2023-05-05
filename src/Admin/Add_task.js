import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../Redux/Action/admin-action";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { countrylistActions } from "../Redux/Action/Country-action";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useOutletContext } from "react-router-dom";

const Add_task = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newRerender, setNewrerender] = useOutletContext();

  const [compaign, setCompaign] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(null);
  const [usermessage, setUsermessage] = useState("");
  const [rerender, setRerender] = useState(false);

  const { success, error, message } = useSelector(
    (state) => state.addTaskReducer
  );
  const { countrylist } = useSelector((state) => state.countrylistReducer);

  useEffect(() => {
    dispatch(countrylistActions());
  }, []);

  const submitHandler = () => {
    const formData = new FormData();
    formData.append("compaign_name", compaign);
    formData.append("phone_number", phone);
    formData.append("country", country);
    formData.append("Content", usermessage);
    dispatch(addTasks(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "Successfully Complete",
        text: message,
        className: "successAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      localStorage.setItem("updateBalance", true);
      setNewrerender(true);
      setTimeout(function () {
        // navigate("/task-list?task=success");
        // navigate("/task-list?task=success");
        window.location.href = "/task-list";

        // window.location.reload();
      }, 3000);

      // window.location.reload();
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  const menuProps = {
    variant: "menu",
    disableScrollLock: true,
  };

  return (
    <>
      <div className="flex flex-col flex-auto- min-h-screen- flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="all-content-div w-full  h-screen">
            <main>
              <div className="pt-0 px-4">
                <div className="xl:gap-4 my-4">
                  {/* <div className="heading-top">
                    <h3 className="text-black text-2xl font-medium">
                      Create Task
                    </h3>
                  </div> */}
                  <div className="bg-white bg-white-inner rounded-md mb-8 p-4 sm:p-6 h-full">
                    <div className="discover-how">
                      <h3>Create Task</h3>
                    </div>
                    <div className="size-all-content justify-between mb-12 mt-12">
                      <div className="blog_add ">
                        <section className=" dark:bg-gray-900">
                          <div className="add-task-form w-full rounded-lg">
                            <div>
                              <div className="space-y-4 md:space-y-6 bg-c">
                                {/* <div>
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Compaign
                                  </label>
                                  <input
                                    value={compaign}
                                    onChange={(e) => {
                                      setCompaign(e.target.value);
                                    }}
                                    type="text"
                                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Add compaign"
                                  />
                                </div> */}
                                <div className="mobile-area">
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone No.
                                  </label>
                                  <textarea
                                    value={phone}
                                    onChange={(e) => {
                                      setPhone(e.target.value);
                                    }}
                                    type="text"
                                    className="w-c bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Please enter mobile number with country code. COMMA required between numbers"
                                  />
                                </div>
                                <div>
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Country
                                  </label>
                                  <Select
                                    IconComponent={KeyboardArrowDownIcon}
                                    onChange={(e) => setCountry(e.target.value)}
                                    value={country}
                                    displayEmpty
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  >
                                    <MenuItem value={null}>
                                      Select Country
                                    </MenuItem>

                                    {countrylist?.map((item, index) => {
                                      return (
                                        <MenuItem
                                          value={item?.country}
                                          key={index}
                                        >
                                          {item?.country}
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                </div>
                                <div>
                                  <label
                                    for="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Message
                                  </label>
                                  <textarea
                                    value={usermessage}
                                    onChange={(e) => {
                                      setUsermessage(e.target.value);
                                    }}
                                    rows="4"
                                    className="w-c  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your message here..."
                                  ></textarea>
                                </div>
                                <div className="flex justify-between">
                                  <button
                                    onClick={submitHandler}
                                    className="submit-cancel-btn "
                                  >
                                    Submit
                                  </button>
                                  <Link to="/task-list">
                                    <button className="submit-cancel-btn ">
                                      Cancel
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
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
};

export default Add_task;
