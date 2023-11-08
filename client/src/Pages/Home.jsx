import React from "react";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className="items-center justify-center flex flex-col text-center mt-32 ">
      <p className=" flex flex-row  ">
        <input
          className="bg-white rounded-l-md p-4 outline-none text-xl  border w-[42rem]"
          type="text"
          placeholder="Enter Your Domain Name"
        />
        <p className=" cursor-pointer bg-blue-700 text-white font-gayathri p-4 text-center rounded-r-md">
          Go
        </p>
      </p>
      <Table />
    </div>
  );
};

export default Home;
