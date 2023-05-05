import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  updateUserProfile,
  updateUserPassword,
  logout,
} from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";
import { validations } from "../utils";
import { useNavigate } from "react-router-dom";

const Account_Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.authReducer);

  const { success, message, error } = useSelector(
    (state) => state.updateUserProfileReducer
  );

  const {
    success: passwordSuccess,
    message: passwordMessage,
    error: passwordError,
  } = useSelector((state) => state.updateUserPasswordReducer);

  const [rerender, setRerender] = useState(false);
  const [passwordRerender, setPasswordRerender] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUsername(userData?.username);
    setEmail(userData?.email);
  }, []);

  const [errors, setErrors] = useState({
    username: null,
    email: null,
  });

  const validateSubmit = (e) => {
    const tempErrors = {
      username: validations.username(username),
      email: validations.email(email),
    };
    setErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      console.log(
        "..values",
        Object.values(tempErrors).filter((value) => value)
      );
      return;
    }
    SubmitHandler();
  };
  const SubmitHandler = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    dispatch(updateUserProfile(formData));
    setRerender(true);
  };

  const [current_password, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const [password_errors, setPasswordErrors] = useState({
    // current_password: null,
    password: null,
    cpassword: null,
  });
  const validatePasswordSubmit = (e) => {
    const tempErrors = {
      //   current_password: validations.password(current_password),
      password: validations.password(password),
      cpassword: validations.confirmPassword(password, cpassword),
    };
    setPasswordErrors(tempErrors);
    if (Object.values(tempErrors).filter((value) => value).length) {
      console.log(
        "..values",
        Object.values(tempErrors).filter((value) => value)
      );
      return;
    }
    SubmitPasswordHandler();
  };
  const SubmitPasswordHandler = () => {
    const formData = new FormData();
    formData.append("current_password", current_password);
    formData.append("new_password", password);
    formData.append("confirm_password", cpassword);
    dispatch(updateUserPassword(formData));
    setPasswordRerender(true);
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "Successfully Complete",
        // text: message,
        text: "Profile successfully updated",
        className: "successAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      const userInfo = userData;
      userInfo["email"] = email;
      userInfo["username"] = username;
      localStorage.setItem("userData", JSON.stringify(userInfo));

      navigate("/account-setting");
      setRerender(false);
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

  useEffect(() => {
    if (passwordSuccess && passwordRerender) {
      swal({
        title: "Successfully Complete",
        // text: passwordMessage,
        text: "Password successfully changed",
        className: "successAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      setPasswordRerender(false);
      dispatch(logout());
      navigate("/login");
    }
    if (passwordError && passwordRerender) {
      swal({
        title: "Error",
        text: passwordError,
        className: "errorAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      setPasswordRerender(false);
    }
  }, [passwordSuccess, passwordError, passwordRerender]);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-auto- min-h-screen- flex-shrink-0 antialiased bg-white-- dark:bg-gray-700 text-black dark:text-white bg-c ">
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="all-content-div w-full h-screen-">
            <main>
              <div className="pt-0 px-4">
                <div className="xl:gap-4 my-4">
                  <div className="bg-white bg-white-inner rounded-md mb-8 p-4 sm:p-6 h-full">
                    <div className="discover-how">
                      <h3>Account Setting</h3>
                    </div>
                    <div className="size-all-content justify-between mb-12 mt-12">
                      <div className="blog_add">
                        <section className=" dark:bg-gray-900">
                          <div className="add-task-form w-full rounded-lg">
                            <div>
                              <div className="space-y-4 md:space-y-6 bg-c">
                                <div
                                  className={
                                    errors.username
                                      ? "inputCntnr error"
                                      : "inputCntnr"
                                  }
                                >
                                  <div className="mb-2">
                                    <label className="text-md text-gray-800 font-bold px-1">
                                      Username
                                    </label>
                                    <div className="flex">
                                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="fa fa-user text-gray-400 text-lg"></i>
                                      </div>
                                      <input
                                        type="text"
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Enter username"
                                        onChange={(e) => {
                                          setErrors({
                                            ...errors,
                                            username: null,
                                          });
                                          setUsername(e.target.value);
                                        }}
                                        value={username}
                                      />
                                    </div>
                                    <span
                                      style={{
                                        color: "#D14F4F",
                                        float: "right",
                                        fontSize: "13px",
                                        opacity: errors.username ? 1 : 0,
                                      }}
                                    >
                                      {errors.username ?? "valid"}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className={
                                    errors.email
                                      ? "inputCntnr error"
                                      : "inputCntnr"
                                  }
                                >
                                  <div className="mb-2">
                                    <label className="text-md text-gray-800 font-bold px-1">
                                      Email
                                    </label>
                                    <div className="flex">
                                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i className="fa fa-envelope text-gray-400 text-lg"></i>
                                      </div>
                                      <input
                                        type="email"
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-indigo-500"
                                        placeholder="Enter email address"
                                        onChange={(e) => {
                                          setErrors({ ...errors, email: null });
                                          setEmail(e.target.value);
                                        }}
                                        value={email}
                                      />
                                    </div>
                                    <span
                                      style={{
                                        color: "#D14F4F",
                                        float: "right",
                                        fontSize: "13px",
                                        opacity: errors.email ? 1 : 0,
                                      }}
                                    >
                                      {errors.email ?? "valid"}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <button
                                    onClick={validateSubmit}
                                    className="submit-cancel-btn "
                                  >
                                    Update
                                  </button>
                                  <Link to="/dashboard">
                                    <button className="submit-cancel-btn ">
                                      Cancel
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <hr className="my-4" />
                        <section className="my-4 dark:bg-gray-900 bg-c">
                          <div className="add-task-form w-full rounded-lg ">
                            <div className="rounded-btn">
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  onClick={(event) =>
                                    setIsChecked(event.currentTarget.checked)
                                  }
                                  checked={isChecked}
                                />
                                <span className="slider round"></span>
                              </label>
                              <p className="slider_round">
                                Do you want to change password?
                              </p>
                            </div>
                            {isChecked && (
                              <div className="py-4">
                                <div className="space-y-4 md:space-y-6">
                                  <div
                                    // className={
                                    //   password_errors.current_password
                                    //     ? "inputCntnr error"
                                    //     : "inputCntnr"
                                    // }
                                    className="inputCntnr"
                                  >
                                    <div className="mb-2">
                                      <label className="text-md text-gray-800 font-bold px-1">
                                        Current Password
                                      </label>
                                      <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                          <i className="fa fa-lock text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                          type="password"
                                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-indigo-500"
                                          placeholder="Enter current password"
                                          onChange={(e) => {
                                            // setPasswordErrors({ ...password_errors, current_password: null});
                                            setCurrentPassword(e.target.value);
                                          }}
                                        />
                                      </div>
                                      {/* <span
                                        style={{
                                          color: "#D14F4F",
                                          float: "right",
                                          fontSize: "13px",
                                          opacity:
                                            password_errors.current_password
                                              ? 1
                                              : 0,
                                        }}
                                      >
                                        {password_errors.current_password ??
                                          "valid"}
                                      </span> */}
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      password_errors.password
                                        ? "inputCntnr error"
                                        : "inputCntnr"
                                    }
                                  >
                                    <div className="mb-2">
                                      <label className="text-md text-gray-800 font-bold px-1">
                                        Password
                                      </label>
                                      <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                          <i className="fa fa-lock text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                          type="password"
                                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-indigo-500"
                                          placeholder="Enter password"
                                          onChange={(e) => {
                                            setPassword(e.target.value);
                                            setPasswordErrors({
                                              ...password_errors,
                                              password: null,
                                            });
                                          }}
                                        />
                                      </div>
                                      <span
                                        style={{
                                          color: "#D14F4F",
                                          float: "right",
                                          fontSize: "13px",
                                          opacity: password_errors.password
                                            ? 1
                                            : 0,
                                        }}
                                      >
                                        {password_errors.password ?? "valid"}
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      password_errors.cpassword
                                        ? "inputCntnr error"
                                        : "inputCntnr"
                                    }
                                  >
                                    <div className="mb-2">
                                      <label className="text-md text-gray-800 font-bold px-1">
                                        Confirm password
                                      </label>
                                      <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                          <i className="fa fa-lock text-gray-400 text-lg"></i>
                                        </div>
                                        <input
                                          type="password"
                                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-indigo-500"
                                          placeholder="Enter confirm password"
                                          value={cpassword}
                                          onChange={(e) => {
                                            setCpassword(e.target.value);
                                            setPasswordErrors({
                                              ...password_errors,
                                              cpassword: null,
                                            });
                                          }}
                                        />
                                      </div>
                                      <span
                                        style={{
                                          color: "#D14F4F",
                                          float: "right",
                                          fontSize: "13px",
                                          opacity: password_errors.cpassword
                                            ? 1
                                            : 0,
                                        }}
                                      >
                                        {password_errors.cpassword ?? "valid"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex justify-between">
                                    <button
                                      onClick={validatePasswordSubmit}
                                      className="submit-cancel-btn "
                                    >
                                      Update
                                    </button>
                                    <Link to="/dashboard">
                                      <button className="submit-cancel-btn ">
                                        Cancel
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            )}
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

export default Account_Setting;
