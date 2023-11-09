import React from "react";

const Table = ({ data }) => {
  return (
    <div className=" mt-16 md:mt-24 mb-32">
      <table class="table-auto w-[25rem]  md:w-[53rem] border border-gray-400 border-rounded">
        <thead className="text-3xl font-sans"></thead>
        <tbody className="w-[66rem] text-xl  md:text-2xl pt-10">
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Domain</td>
            <td>{data.domain}</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Expiration Date</td>
            <td>{data.expirationDate}</td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Registrar</td>
            <td>
              {data.ownerInfo.registrar
                ? data.ownerInfo.registrar
                : "Data is Unavailable"}
            </td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">aRecords</td>
            <td>
              <ul>
                {data.aRecords.map((record, index) => (
                  <li key={index}>{record}</li>
                ))}
                <li></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">Mx Records</td>
            <td>
              <ul>
                {data.mxRecords.map((record, index) => (
                  <li key={index}>
                    Exchange: {record.exchange}, Priority: {record.priority}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="border-b leading-[3.5rem] border-black">
            <td className="border-r border-black">TXT Records</td>
            <td>
              <ul>
                {data.txtRecords.map((record, index) => (
                  <li key={index}>{record.join(", ")}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
