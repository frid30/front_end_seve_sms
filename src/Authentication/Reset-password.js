import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../Redux/Action/authentication-action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { validations } from "../utils";

const Reset_password = () => {
  const { token, uid } = useParams();

  const { success, error } = useSelector((state) => state.resetPasswordReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = new FormData();

  const [newpassword, setnewpassword] = useState("");
  const [cnewpassword, setCnewpassword] = useState("");
  const [rerender, setRerender] = useState(false);

  const [errors, setErrors] = useState({
    newpassword: null,
    cnewpassword: null,
  });

  const validateSubmit = (e) => {
    // e.preventDefault();
    const tempErrors = {
      newpassword: validations.password(newpassword),
      cnewpassword: validations.confirmPassword(newpassword, cnewpassword),
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
    formData.append("password", newpassword);
    formData.append("confirm_password", cnewpassword);
    dispatch(resetPassword(token, uid, formData));
  };

  useEffect(() => {
    if (success) {
      swal({
        title: "Successfully Complete",
        text: "Password Reset Successfully",
        className: "successAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 3500,
      });
      setRerender(false);
      navigate("/login");
    }
    if (error) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/company-logo.svg",
        buttons: false,
        timer: 3500,
      });
      setRerender(false);
    }
  }, [success, error]);

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
                  <img className="auth-logo" src="/img/company-logo.svg" />
                  <p className="my-4 text-lg">Reset your password</p>
                </div>
                <div
                  className={
                    errors.newpassword ? "inputCntnr error" : "inputCntnr"
                  }
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-bold px-1">
                      New password
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
                          setnewpassword(e.target.value);
                          setErrors({ ...errors, newpassword: null });
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "#D14F4F",
                        float: "right",
                        fontSize: "13px",
                        opacity: errors.newpassword ? 1 : 0,
                      }}
                    >
                      {errors.newpassword ?? "valid"}
                    </span>
                  </div>
                </div>

                <div
                  className={
                    errors.cnewpassword ? "inputCntnr error" : "inputCntnr"
                  }
                >
                  <div className="px-3 mb-2">
                    <label className="text-md text-gray-800 font-bold px-1">
                      Confirm new password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="fa fa-lock text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter new password"
                        onChange={(e) => {
                          setCnewpassword(e.target.value);
                          setErrors({ ...errors, cnewpassword: null });
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: "#D14F4F",
                        float: "right",
                        fontSize: "13px",
                        opacity: errors.cnewpassword ? 1 : 0,
                      }}
                    >
                      {errors.cnewpassword ?? "valid"}
                    </span>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="w-full px-3 mb-2">
                    <button
                      onClick={validateSubmit}
                      className="block w-full max-w-xs uppercase mx-auto bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      change password
                    </button>
                  </div>
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
    </>
  );
};

export default Reset_password;
