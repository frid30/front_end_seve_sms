import React, { useState, useEffect } from "react";
import { addBalance, getBalance } from "../Redux/Action/admin-action";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../Redux/Constants/authentication-constants";

const Add_balance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [balance, setBalance] = useState("");
  const [rerender, setRerender] = useState(true);

  const {
    success,
    message,
    error,
    balance: balanceReducer,
  } = useSelector((state) => state.addBalanceReducer);
  const { userData } = useSelector((state) => state.authReducer);
  const { getBalanceData, success: successBalance } = useSelector(
    (state) => state.getBalanceReducer
  );

  const submitHandler = () => {
    dispatch(addBalance({ amount: balance }));
    setRerender(true);
  };

  useEffect(() => {
    dispatch(getBalance());
  }, [success]);

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "Successfully Complete",
        text: message,
        className: "successAlert",
        icon: "/img/company-logo.png",
        buttons: false,
        timer: 5000,
      });

      const new_obj = { ...userData, balance: balanceReducer };
      localStorage.setItem("userData", JSON.stringify(new_obj));
      setRerender(false);
      setBalance(" ");
    }

    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/company-logo.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="all-content-div w-full  h-screen">
            <main>
              <div className="pt-6 px-4">
                <div className="xl:gap-4 my-4">
                  <div className="heading-top">
                    <h3 className="text-black text-2xl font-medium">
                      Add Funds
                    </h3>
                  </div>
                  <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 h-full">
                    <div className="size-all-content justify-between mb-12 mt-12">
                      <div className="blog_add">
                        <section className=" :bg-gray-900">
                          <div className="blogs_forms w-full rounded-lg">
                            <div>
                              <div className="space-y-4 md:space-y-6">
                                <div>
                                  <h3>
                                    Credit left:
                                    <span> {getBalanceData?.[0]?.amount}</span>
                                  </h3>
                                </div>
                                <div
                                // className={
                                //   errors.email ? "inputCntnr error" : "inputCntnr"
                                // }
                                >
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Add Fund
                                  </label>
                                  <input
                                    value={balance}
                                    onChange={(e) => {
                                      setBalance(e.target.value);
                                      // setErrors({ ...errors, email: null });
                                    }}
                                    type="number"
                                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Add fund"
                                  />
                                  {/* <span
                                style={{
                                  color: "#D14F4F",
                                  float: "right",
                                  fontSize: "13px",
                                  opacity: errors.email ? 1 : 0,
                                }}
                              >
                                {errors.email ?? "valid"}
                              </span> */}
                                </div>

                                <div className="submit_cancel-btn-div">
                                  <button
                                    onClick={submitHandler}
                                    className="submit-cancel-btn "
                                  >
                                    Add
                                  </button>
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
export default Add_balance;
