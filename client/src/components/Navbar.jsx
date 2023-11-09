import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  mt-10 flex-row items-center p-4   justify-evenly">
      <Link to="/">
        {" "}
        <p className=" text-3xl md:text-4xl mr-10 md:mr-0  font-gayathri cursor-pointer ">
          DNS Lookup
        </p>
      </Link>
      <div className="flex text-xl md:text-2xl font-gayathri  justify- items-end">
        <Link to="/about">
          {" "}
          <p className="mr-8 cursor-pointer">About</p>
        </Link>
        <a href="https://github.com/ahmadswalih/dns-lookup">
          {" "}
          <p className="cursor-pointer ">GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
