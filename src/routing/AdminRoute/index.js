import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { ROLE } from "../../Redux/Constants/other-constants";


export default function AdminRoute({ children }) {
  const { userData } = useSelector((state) => state.authReducer);

  return userData?.role == 0 ?  (
    children
  ) : (
    <Navigate to="/" />
  );
}
