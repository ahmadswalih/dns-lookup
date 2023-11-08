import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex mt-10 flex-row items-center p-4  justify-evenly">
      <Link to="/">
        {" "}
        <p className="text-4xl font-gayathri cursor-pointer ">DNS Lookup</p>
      </Link>
      <div className="flex text-2xl font-gayathri  justify- items-end">
        <Link to="/about">
          {" "}
          <p className="mr-12 cursor-pointer">About</p>
        </Link>
        <Link to="/documentation">
          {" "}
          <p className="cursor-pointer">Documentation</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
