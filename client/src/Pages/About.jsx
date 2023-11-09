import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mx-auto md:mx-0 w-[90%] md:w-[60%]">
        <p className="text-left mt-24 font-bold font-gayathri text-2xl mr-32 md:text-3xl">
          About <span className="underline"> DNS Lookup </span>
        </p>
        <p className="mt-4 text-left font-sans text-xl">
          DNS Lookup is a user-friendly web application designed to assist
          individuals, web developers, and network administrators in retrieving
          essential information about domain names. This tool provides detailed
          insights into DNS records, domain expiration dates, and ownership
          information. Whether you're working on web projects, managing network
          configurations, or simply exploring domain-related details, DNS Lookup
          simplifies the process and provides valuable data at your fingertips.
        </p>
        <>
          <p className="text-left mt-24 font-bold font-gayathri text-3xl">
            Key Features:
          </p>
          <ul className="mt-4 text-left font-sans text-xl list-disc">
            <li>
              <span className="font-semibold"> Retrieve DNS Records: </span>
              Quickly obtain DNS records for a specific domain name.
            </li>
            <li>
              <span className="font-semibold"> Check Domain Expiration:</span>
              Verify the expiration date of a domain to ensure it remains
              active.
            </li>
            <li>
              <span className="font-semibold"> Owner Information: </span> Access
              ownership details, including registrar and registrant information.
            </li>
          </ul>
        </>
        <>
          <p className="text-left mt-24 font-bold font-gayathri text-3xl">
            How to Use:
          </p>
          <p className="mt-4 text-left font-sans text-xl">
            Using DNS Lookup is straightforward. Enter the domain name you want
            to inspect into the input field, and either press the Enter key or
            click the search button. The application will promptly fetch and
            display the relevant information for the specified domain, allowing
            you to make informed decisions and better understand domain-related
            data.
          </p>
        </>

        <>
          <p className="text-left mt-24 font-bold font-gayathri text-3xl">
            Contact Us
          </p>
          <p className="mt-4 text-left font-sans text-lg md:text-xl">
            We value your feedback and welcome any inquiries or suggestions you
            may have. Please feel free to contribute in our project{" "}
            <a
              className="text-blue-600"
              href="https://github.com/ahmadswalih/dns-lookup"
            >
              https://github.com/ahmadswalih/dns-lookup.
            </a>
          </p>
        </>
      </div>
    </div>
  );
};

export default About;
