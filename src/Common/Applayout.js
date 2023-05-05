import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getAPIKey } from "../Redux/Action/admin-action";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Siderbar";

const Applayout = (props) => {
  const dispatch = useDispatch();
  // const { getAPIKeyData } = useSelector((state) => state.getAPIKeyReducer);

  useEffect(() => {
    dispatch(getAPIKey());
  }, []);

  return (
    <>
      <Sidebar props={props} />
      <div
        className="right-middle-section"
        style={{
          background: "url(/img/Banner2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Header />
        <Outlet context={[props.newRerender, props.setNewrerender]} />
      </div>
    </>
  );
};

export default Applayout;
