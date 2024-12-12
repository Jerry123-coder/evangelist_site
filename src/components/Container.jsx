import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Container = () => {
  return (
    <div className="relative w-screen max-w-[100vw] min-h-screen flex flex-col">
      {/* Nav */}
      <Navbar />
      {/* Outlet */}
      <div className="">
        <Outlet />
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Container;
