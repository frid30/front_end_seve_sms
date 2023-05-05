import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";

const Payment = (props) => {
  const { amountSection } = props;

  const fiatArray = [
    {
      id: 1,
      img: "/img/alipay.png",
      value: "Alipay",
      title: "Alipay",
    },
    {
      id: 2,
      img: "/img/capitalist.png",
      value: "Capitalist",
      title: "Capitalist",
    },
    {
      id: 3,
      img: "img/payeer.png",
      value: "Payeer",
      title: "Payeer",
    },
    {
      id: 4,
      img: "/img/perfect-money.png",
      value: "Perfect Money",
      title: "Perfect Money",
    },
    {
      id: 5,
      img: "/img/visa.png",
      value: "Bank Cards",
      title: "Bank Cards",
    },
  ];

  const cryptoArray = [
    {
      id: 6,
      img: "/img/bitcoin.png",
      value: "BTC",
      title: "Bitcoin",
    },
    {
      id: 7,
      img: "/img/dash.png",
      value: "Dash",
      title: "Dash",
    },
    {
      id: 8,
      img: "/img/ethereum.png",
      value: "Ethereum",
      title: "Ethereum",
    },
    {
      id: 9,
      img: "/img/monero.png",
      value: "Monero",
      title: "Monero",
    },
    {
      id: 10,
      img: "/img/ripple.png",
      value: "Ripple",
      title: "Ripple",
    },
  ];

  const [isFiat, setFiat] = useState(true);
  const [isCrypto, setCrypto] = useState(false);
  const [fiatPayments, setFiatPayments] = useState(fiatArray);
  const [cryptoPayments, setCryptoMPayments] = useState(cryptoArray);
  const [fiatPaymentSelected, setFiatPaymentSelected] = useState();
  const [cryptoPaymentSelected, setCryptoPaymentSelected] = useState();

  function handleFiatPayment() {
    setFiat(true);
    setCrypto(false);
    setFiatPaymentSelected();
  }

  function handleCryptoPayment() {
    setCrypto(true);
    setFiat(false);
    setCryptoPaymentSelected();
  }

  function handleFiatSelection(index) {
    setFiatPaymentSelected(index);
  }

  function handleCryptoSelection(index) {
    setCryptoPaymentSelected(index);
  }

  // useEffect(() => {
  //   console.log("fiatPaymentSelected -- ", fiatPaymentSelected);
  //   console.log("cryptoPaymentSelected -- ", cryptoPaymentSelected);
  // }, []);

  const fiatPaymentList = fiatPayments.map((el, index) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6" key={el.id}>
        <div
          id={el.value}
          className={`${
            fiatPaymentSelected === index ? "payment-option-selected" : ""
          } container- payment-option card-payment`}
          onClick={() => handleFiatSelection(index)}
        >
          <div className="text-center py-3 px-4">
            <img
              alt={`${el.value} logo`}
              src={el.img}
              width="150vw"
              height="40vh"
            />
            <h6 className="mt-2">
              <strong>{el.title}</strong>
            </h6>
          </div>
        </div>
      </div>
    );
  });

  const cryptoPaymentList = cryptoPayments.map((el, index) => {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6" key={el.id}>
        <div
          id={el.value}
          className={`container- payment-option card-payment ${
            cryptoPaymentSelected === index ? "payment-option-selected" : ""
          }`}
          onClick={() => handleCryptoSelection(index)}
        >
          <div className="text-center py-3 px-4">
            <img
              alt={`${el.value} logo`}
              src={el.img}
              width="150vw"
              // height="40vh"
            />
            <h6 className="mt-2">
              <strong>{el.title}</strong>
            </h6>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container- table-card mb-4">
      <div className="row">
        <div className="col-md-3 offset-md-3 text-center py-3">
          <button
            className={`${
              isFiat ? "btn-payment-selected" : "btn-payment"
            } py-2 px-3 btn-fiat flex`}
            onClick={handleFiatPayment}
          >
            <span className="px-2 fiat-btn">Fiat</span>
            <span className="">
              {isFiat ? <ImCheckmark /> : <FaChevronRight />}
            </span>
          </button>
        </div>
        <div className="col-md-4 text-center py-3">
          <button
            className={`${
              isCrypto ? "btn-payment-selected" : "btn-payment"
            } py-2 px-3 btn-crypto flex`}
            onClick={handleCryptoPayment}
          >
            <span className="px-2">Cryptocurrency</span>
            <span className="">
              {isCrypto ? <ImCheckmark /> : <FaChevronRight />}
            </span>
          </button>
        </div>
      </div>

      <div className="my-3">
        <p className="text-center">Choose a payment method</p>
      </div>

      <div className="row payments">
        {isFiat ? fiatPaymentList : cryptoPaymentList}
      </div>

      {amountSection}
    </div>
  );
};

export default Payment;
