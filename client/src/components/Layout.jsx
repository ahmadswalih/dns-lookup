import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <p className="items-center justify-center mb-10">
        Created by{" "}
        <a className="text-blue-500" href="https://ahmadswalih.com">
          Ahmad Swalih
        </a>
      </p>
    </div>
  );
};

export default Layout;
