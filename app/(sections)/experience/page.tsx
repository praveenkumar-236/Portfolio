import React from "react";

const Data = [
  // {
  //   name: "",
  //   logo: "",
  //   timeSpan: "",
  //   role: " ",
  //   about1: "",
  //   about2: "",
  //   about3: "",
  //   about4: "",
  // }, 
  //  
  {
    name: "AVPS Technologies Inc.",
    logo: "https://www.avpstech.com/Images/300/logo.png",
    timeSpan: "Oct 2022 - Present",
    role: "Software Developer ",
    about1: "Contributed code for projects in Java and React languages, using Eclipse and VSCode IDEs .",
    about2: " Familiar with the MVC design pattern, API frameworks such as REST, and JUnit Testing",
    about3:"  Built microservices for API projects by using technologies such as GitHub, Spring Boot, Maven, Kafka,Docker, MongoDB, and AWS",
    about4:" Utilized IBM Operational Decision Manager (ODM), using Rule Designer, Decision Server and Decision Center interfaces"
  },
];

function page() {
  return (
    <div className="flex flex-col my-20 gap-10">
      <h1 className="text-center text-3xl font-bold">Experience</h1>
      <div className="max-w-[32rem] flex justify-center items-center mx-auto">
        <ol className="relative border-s  border-gray-200 dark:border-gray-700">
          {Data.map((data) => (
            <li className="mb-10 ms-6" key={data.name}>
              <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-6  bg-blue-500">
                <img
                  src={data.logo}
                  className="rounded-full p-1"
                  alt={data.name}
                />
              </span>
              <h3 className="flex flex-col md:flex-row mb-1 text-lg font-semibold">
                {data.name}
                <span className="bg-blue-100 items-center my-2 max-w-fit text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded md:ms-3">
                  {data.timeSpan}
                </span>
              </h3>
              <time className="block mb-2 text-base font-normal leading-none text-blue-400-200 ">
                {data.role}
                <ul
                  color="gary"
                  className="list-disc font-sans text-sm mt-3 ml-5 "
                >
                  <li className="my-1">{data.about1}</li>
                  <li className="my-1">{data.about2}</li>
                  <li className="my-1">{data.about3}</li>
                  <li className="my-1">{data.about4}</li>


                </ul>
              </time>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default page;
