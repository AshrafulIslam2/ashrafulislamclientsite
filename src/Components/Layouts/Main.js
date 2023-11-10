import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharedComponent/Footer/Footer";
import Navbar from "../SharedComponent/Header/Navbar";

const Main = () => {
  return (
    <div className="bg-black">
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
