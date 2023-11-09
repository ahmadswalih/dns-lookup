import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

const Home = () => {
  const [domain, setDomain] = useState("");
  const [domainInfo, setDomainInfo] = useState({
    domain: "",
    dnsRecords: [["No Data Available"]],
    expirationDate: "No Data Available",
    ownerInfo: {
      registrar: "No Data Available",
      registrant: "No Data Available",
    },
    aRecords: [["No Data Available"]],
    mxRecords: [["No Data Available"]],
    txtRecords: [["No Data Available"]],
  });
  const [loading, setLoading] = useState(false);

  const getDomainDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:7000/api/domain/${domain}`
      );
      const data = response.data;

      // Update the domainInfo state with the received data
      setDomainInfo({
        domain: data.domain,
        dnsRecords: data.dnsRecords,
        expirationDate: data.expirationDate,
        ownerInfo: data.ownerInfo,
        aRecords: data.aRecords,
        mxRecords: data.mxRecords,
        txtRecords: data.txtRecords,
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const clearData = () => {
    setLoading(true);
    setDomain("");
    setDomainInfo({
      domain: "",
      aRecords: [],
      dnsRecords: [],
      expirationDate: "",
      mxRecords: [],
      ownerInfo: "",
      txtRecords: [],
    });
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setDomain(event.target.value);
  };
  const handlKeyDown = (event) => {
    if (event.code === "Enter") getDomainDetails();
  };

  return (
    <div className="items-center justify-center flex flex-col text-center mt-32 ">
      <p className=" flex flex-row  ">
        <input
          className="bg-white shadow-sm rounded-l-md p-4 outline-none text-xl  border w-[42rem]"
          type="text"
          placeholder="Enter Your Domain Name ( ex : example.com)"
          value={domain}
          onChange={handleInputChange}
          onKeyDown={handlKeyDown}
        />
        <p
          onClick={getDomainDetails}
          className=" cursor-pointer shadow-sm bg-blue-700 text-white font-gayathri p-4 text-center rounded-r-md"
        >
          Go
        </p>
        {domainInfo.domain !== "" && (
          <p
            onClick={clearData}
            className=" cursor-pointer shadow-sm bg-red-500 text-white font-sans p-4 ml-4 text-center rounded"
          >
            Clear Data
          </p>
        )}
      </p>
      {loading ? (
        <div className="mt-28 w-60" role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        ""
      )}
      {domainInfo.domain !== "" ? (
        <Table data={domainInfo} />
      ) : !loading ? (
        <div className="mt-24">
          <p className="text-2xl ">What is DNS?</p>
          <p className="text-left items-center justify-center w-[54rem]  text-xl   mt-4">
            DNS stands for "Domain Name System." It's like a magic phone book
            for the internet. Just like you look up a friend's name in a phone
            book to find their phone number, your computer uses DNS to find the
            right "phone number" for websites.
            <br /> When you want to visit a website, like{" "}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://www.example.com"
              rel="noreferrer"
            >
              {" "}
              "www.example.com"
            </a>
            your computer asks the DNS for the real address, which is a bunch of
            numbers. These numbers are like the website's home address on the
            internet. Once your computer knows this address, it can find the
            website, just like knowing your friend's phone number helps you call
            them.
            <br />
            So, DNS helps your computer find and connect to websites by turning
            their names into the special numbers they use on the internet. It's
            a bit like a translator that helps your computer talk to websites in
            a language they understand.
          </p>
          <p className="text-2xl mt-10 ">who maintain the DNS ?</p>
          <p className="text-center items-center justify-center w-[54rem]  text-xl   mt-4">
            {" "}
            The Domain Name System (DNS) is maintained by a global network of
            organizations, with the responsibility divided among various groups
            and authorities. Here are some key players:
          </p>
          <ol
            type="1"
            className=" list-disc list-inside text-left text-xl mt-6 justify-between"
          >
            <li>Internet Corporation for Assigned Names and Numbers (ICANN)</li>
            <li>Internet Assigned Numbers Authority (IANA)</li>
            <li>Regional Internet Registries (RIRs)</li>
            <li>Domain Name Registries</li>
            <li>Domain Name Registrars</li>
            <li>Internet Service Providers (ISPs)</li>
          </ol>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
