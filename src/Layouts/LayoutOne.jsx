import React from "react";
import Navber from "../Components/Navbar/Navber";
import { Outlet } from "react-router-dom";

const LayoutOne = () => {
  return (
    <>
      <Navber />
      <Outlet />
    </>
  );
};

export default LayoutOne;
