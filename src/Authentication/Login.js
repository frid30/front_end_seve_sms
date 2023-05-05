import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action/authentication-action";
import swal from "sweetalert";
import { validations } from "../utils";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error, userData, loading } = useSelector(
    (state) => state.authReducer
  );

  const { userData: user } = useSelector((state) => state.authReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rerender, setRerender] = useState(false);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const formData = new FormData();

  const validateSubmit = (e) => {
    // e.preventDefault();
    const tempErrors = {
      email: validations.email(email),
      password: validations.login_password(password),
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
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
    setRerender(true);
  };

  useEffect(() => {
    if (userData) {
      swal({
        title: "Successfully Complete",
        text: "Successfully login",
        className: "successAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
      navigate("/dashboard");
      setPassword("");
      setEmail("");
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
  }, [dispatch, userData, error]);

  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //       validateSubmit();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

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
                  {/* <h1 className="font-bold text-3xl text-gray-900">Log In</h1> */}
                  <img className="auth-logo" src="/img/company-logo.svg" />
                  <p className="my-4 text-lg">Log in to your account</p>
                </div>
                <div
                  className={errors.email ? "inputCntnr error" : "inputCntnr"}
                >
                  <div className="px-3 mb-2">
                    <label
                      for=""
                      className="text-md text-gray-800 font-bold px-1"
                    >
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
                <div className="flex mt-4">
                  <div className="w-full px-3 mb-2">
                    <button
                      onClick={validateSubmit}
                      className="block w-full max-w-xs uppercase mx-auto bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      sign in
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/forgot"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                  >
                    Don't have an account ? SignUp !
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

      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
            />
          </a>
        </div>
      </div> */}
    </>
  );
}

export default Login;
