import React from "react";

const Table = () => {
  return (
    <div className="mt-24">
      <table class="table-auto  w-[53rem] border border-gray-400 border-rounded">
        <thead className="text-3xl font-sans">
          <tr className="border-b leading-[3.5rem] border-black">
            <th className="border-r border-black">Record</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="w-[66rem]  text-2xl pt-10">
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Dns Records</td>
            <td>Malcolm Lockyer</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Expiration Date</td>
            <td>The Eagles</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Registrar</td>
            <td>Earth, Wind, and Fire</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">aRecords</td>
            <td>Earth, Wind, and Fire</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Mx Records</td>
            <td>Earth, Wind, and Fire</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">TXT Records</td>
            <td>Earth, Wind, and Fire</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
