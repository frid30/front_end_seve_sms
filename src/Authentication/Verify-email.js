import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_URL } from "../environment";
import swal from "sweetalert";
import axios from "axios";

const VerifyEmail = () => {
  const { token, decodeId } = useParams();

  const [successChk, setSuccessChk] = useState(false);

  useEffect(() => {
    const success = axios
      .get(`${BACKEND_URL}verify-email/${token}/${decodeId}/`)
      .then((res) => {
        console.log("res --", res);
        if (res.data.message) {
          setSuccessChk(true);
          swal({
            title: "Email successfully verified",
            text: res.data.message,
            className: "successAlert",
            icon: "/img/company-logo.svg",
            buttons: false,
            timer: 2000,
          });
        }
      })
      .catch((err) => {
        // console.log("err -- ", err);
        if (err.response.data.message) {
          setSuccessChk(false);
          swal({
            title: "Error",
            text: err.response.data.message,
            className: "errorAlert",
            icon: "/img/company-logo.svg",
            buttons: false,
            timer: 2000,
          });
        }
      });
  }, []);

  return (
    <>
      <div className="Topdiv">
        <div className="verifydiv">
          <div className="login-content verifyemail">
            <div className="ForgotPgae1">
              <div className="verifylogo">
                <img
                  src="/img/company-logo.svg"
                  className="login-logo"
                  alt=""
                />
              </div>
              <div className="verifyemailtext">
                <h1>
                  Welcome to The{" "}
                  <span
                    style={{ color: "#FF9100" }}
                    className="ml-2 font-bold  uppercase"
                  >
                    sevesms
                  </span>
                </h1>
                <p> Your email have been confirmed </p>
                <Link className="successfullyButton" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
