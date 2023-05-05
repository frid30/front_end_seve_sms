import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import { register } from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validations } from "../utils";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, error, message, loading } = useSelector(
    (state) => state.RegisterReducer
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [rerender, setRerender] = useState(false);
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    cpassword: null,
  });

  const formData = new FormData();

  const validateSubmit = (e) => {
    const tempErrors = {
      username: validations.username(username),
      email: validations.email(email),
      password: validations.password(password),
      cpassword: validations.confirmPassword(password, cpassword),
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
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", cpassword);
    dispatch(register(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (success) {
      swal({
        title: "Successfully Complete",
        text: message,
        className: "successAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setCpassword("");
      setRerender(false);
      navigate("/thank-you");
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

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl sm:w-1/2 shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full py-10 md:px-10">
              <div>
                <div className="text-center">
                  {/* <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1> */}
                  <img className="auth-logo" src="/img/company-logo.svg" />

                  <p className="my-4 text-lg">
                    Enter your information to register
                  </p>
                </div>
                <div
                  className={
                    errors.username ? "inputCntnr error" : "inputCntnr"
                  }
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-bold px-1">
                      Username
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa fa-user text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter username"
                        onChange={(e) => {
                          setErrors({ ...errors, username: null });
                          setUsername(e.target.value);
                        }}
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
                  className={errors.email ? "inputCntnr error" : "inputCntnr"}
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-bold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa fa-envelope text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter email address"
                        onChange={(e) => {
                          setErrors({ ...errors, email: null });
                          setEmail(e.target.value);
                        }}
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
                <div
                  className={
                    errors.password ? "inputCntnr error" : "inputCntnr"
                  }
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-bold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa fa-lock text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrors({ ...errors, password: null });
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "#D14F4F",
                        float: "right",
                        fontSize: "13px",
                        opacity: errors.password ? 1 : 0,
                      }}
                    >
                      {errors.password ?? "valid"}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    errors.cpassword ? "inputCntnr error" : "inputCntnr"
                  }
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-bold px-1">
                      Confirm password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa fa-lock text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter confirm password"
                        value={cpassword}
                        onChange={(e) => {
                          setCpassword(e.target.value);
                          setErrors({ ...errors, cpassword: null });
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "#D14F4F",
                        float: "right",
                        fontSize: "13px",
                        opacity: errors.cpassword ? 1 : 0,
                      }}
                    >
                      {errors.cpassword ?? "valid"}
                    </span>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="w-full px-3 mb-2">
                    <button
                      onClick={validateSubmit}
                      className="block w-full max-w-xs uppercase mx-auto bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      sign up
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account ? Sign In !
                  </Link>
                </div>
                <Link to="/">
                  <p className="text-center text-red-500 mt-1">Back to home</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
