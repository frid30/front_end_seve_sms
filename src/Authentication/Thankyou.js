import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <div className="Topdiv">
        <div className="thankyoupage">
          <div className="login-content-registering">
            <div className="thanktext">
              <div className="logo-content">
                <Link to="/login">
                  <img
                    src="/img/company-logo.svg"
                    className="login-logo"
                    alt=""
                  />
                </Link>
              </div>
              <p>
                Thank you for registering yourself at{" "}
                <span
                  style={{ color: "#FF9100" }}
                  className="ml-2 font-bold  uppercase"
                >
                  sevesms
                </span>
                {/* <br /> An email has been sent to your registered email Id.
                <br /> Kindly verify the email to login and start using our
                services */}
              </p>
              <br />
              <div className="text-center mt-4 mb-4 thankyoudiv">
                <Link className="Large thankbutton border-radius" to="/login">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
