import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "react-qr-code";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { MdFileCopy } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";

import Payment from "./Payment";

const Deposit = (props) => {
  const navigate = useNavigate();
  const { setIsLoggedIn, isLoggedIn, loader, setLoader } = props;

  const { userData } = useSelector((state) => state.authReducer);
  // if (!userData?.email) {
  //   navigate("/");
  // }

  const [pageLoader, setPageLoader] = useState(false);

  const data = {
    amount: "",
    method_payment: "",
  };
  const [amount, setAmount] = useState(data.amount);
  const [method_payment, setMethodPayment] = useState(data.method_payment);
  const [error, setError] = useState([]);
  const [errorS, setErrorS] = useState(false);
  const [success, setSuccess] = useState("");
  const [isFiat, setFiat] = useState(true);
  const [isCrypto, setCrypto] = useState(false);
  const [isPaymentClicked, setPaymentClicked] = useState(false);

  const [show, setShow] = useState(false);
  const [crypto_amount, setCryptoAmount] = useState();
  const [address, setAddress] = useState({
    value: "",
    copied: false,
  });

  useEffect(() => {
    let btn_fiat = document.querySelector(".btn-fiat");
    btn_fiat.addEventListener("click", () => {
      setFiat(true);
      setCrypto(false);
    });
  }, []);

  useEffect(() => {
    let btn_crypto = document.querySelector(".btn-crypto");
    btn_crypto.addEventListener("click", () => {
      setCrypto(true);
      setFiat(false);
    });
  }, []);

  useEffect(() => {
    let payments = document.getElementsByClassName("card-payment");
    let methods_payments = Array.from(payments);
    methods_payments.forEach((el) => {
      el.classList.remove("payment-option-selected");
    });
    setMethodPayment("");
  }, []);

  useEffect(() => {
    setError([]);
    setTimeout(() => {
      setMethodPayment("");
      let payments = document.getElementsByClassName("card-payment");
      let methods_payments = Array.from(payments);
      methods_payments.forEach((el, index) => {
        el.addEventListener("click", () => {
          setMethodPayment(el.id);
        });
      });
    }, 100);
  }, [isFiat, isCrypto]);

  const errorMsg = error.map((item, index) => {
    return (
      <h5 key={index} className="error_msg">
        {item}
      </h5>
    );
  });

  const handleDataChange = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setAmount(result);
    // console.log(amount);
  };

  const handleSubmit = (e) => {
    // console.log("Amount =", amount);
    // console.log("Method Payment =", method_payment);
    // setLoader(false);

    setError([]);
    e.preventDefault();
    if (!amount || !method_payment) {
      if (!amount) {
        setError(["Please enter amount"]);
      }
      if (!method_payment) {
        setError(["Payment method is required"]);
      }
      // setLoader(true);
    } else {
      setPageLoader(true);
      depositCall(amount, method_payment)
        .then((response) => {
          // setLoader(true);
          // console.log("respo", response.data);
          setAddress({ value: `${response.data.adress}`, copied: false });
          setCryptoAmount(response.data.crypto_amount);
          if (isCrypto) {
            setShow(true);
            setPageLoader(false);
            // handleShow();
          }
        })
        .catch((err) => {
          setPageLoader(false);
          // setLoader(true);
          setError([err.response.data.message]);
          setErrorS(true);
          // console.log("ERROR: ", err.response.data);
        });
    }
  };

  const depositCall = (amount, method_payment) => {
    const REACT_APP_DEPOSIT_URL =
      "https://app-name20.herokuapp.com/balance/payment";
    return axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${userData.token}`,
      },
      url: `${REACT_APP_DEPOSIT_URL}`,
      data: { amount, method_payment },
    });
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal open={show} onClose={handleClose} center>
        <div className="cryptocurrencies">
          <h2 className="text-center pop-header mb-3">
            Payment with cryptocurrencies
          </h2>
        </div>
        <hr />
        <div className="Modal-Body mt-3">
          <div className="mb-3 container-">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <strong>Will be credited in USD</strong>
                </label>
                <div className="input-group">
                  <input className="form-control" value={amount} readOnly />
                  <span className="input-group-text" id="basic-addon2">
                    USD
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <strong>Amount to pay in BTC</strong>
                </label>
                <div className="input-group">
                  <input className="form-control" value={crypto_amount} />
                  <span className="input-group-text" id="basic-addon2">
                    BTC
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <strong>
                    Transfer the required amount of cryptocurrency to the
                    address
                  </strong>
                </label>
                <div className="input-group">
                  <CopyToClipboard
                    text={address.value}
                    onCopy={() => setAddress({ ...address, copied: true })}
                  >
                    <span
                      id="copy-icon"
                      style={{ cursor: "pointer" }}
                      className="input-group-text"
                    >
                      <MdFileCopy />
                    </span>
                  </CopyToClipboard>
                  <input
                    id="crypto-url"
                    type="text"
                    className="form-control"
                    value={address.value}
                  />
                </div>
                {address.copied ? (
                  <div id="success" className="form-text text-success">
                    Copied!
                  </div>
                ) : null}
              </div>
            </form>
            <div
              className="mb-2"
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 100,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={address.value}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      </Modal>

      <div className="transparent-bg flex flex-col flex-auto- min-h-screen- flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="all-content-div w-full h-screen-">
            <main>
              <div className="px-4">
                <div className="xl:gap-4 my-4">
                  <div className="bg-white bg-white-inner rounded-md mb-8 p-4 sm:p-6 h-full Dep-dv">
                    <div className="discover-how text-center mb-8">
                      <h3>Deposit</h3>
                    </div>
                    <Payment
                      amountSection={[
                        <div className="show row-- margin-top-10 text-center payment-module">
                          {!loader && pageLoader && (
                            <Spinner
                              animation="border"
                              role="status"
                              className="loader"
                            ></Spinner>
                          )}
                          <div className="row pt-10 data-row buy-btn text-align-start mb-10 add-balance-form">
                            <form onSubmit={handleSubmit} className="col-8">
                              <div className="mb-3 w-70">
                                {/* <label htmlFor="confirm_password" className="form-label">Confirm Password</label>/ */}
                                <input
                                  required
                                  value={amount}
                                  onChange={handleDataChange}
                                  type="text"
                                  className={`${
                                    errorS
                                      ? ` backG w-c amountG `
                                      : ` backG maring-bottom-45 amountG `
                                  } bg-white w-c border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                  id="confirm_password"
                                  name="confirm_password"
                                  placeholder="Enter Amount"
                                />
                              </div>
                              <div
                                className={
                                  errorMsg?.length > 0
                                    ? "row balance-form-error mb-2"
                                    : "row"
                                }
                              >
                                {errorMsg?.length > 0 && (
                                  <>
                                    <div className="inner-error">
                                      {errorMsg}
                                    </div>
                                  </>
                                )}
                              </div>
                              <div className="row">
                                <h5 className="success_msg">{success}</h5>
                              </div>
                              <div className="col-12">
                                <div className="payment-proceed-btn">
                                  <button
                                    type="button"
                                    className="btnColorChangeDeposit submit-cancel-btn"
                                    onClick={handleSubmit}
                                  >
                                    Proceed
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>,
                      ]}
                    />
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
export default Deposit;
