import React, { useEffect, useState } from "react";
import Package from "./notices";
import axios from 'axios';
const URL = "http://localhost:5000/notices";


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Notices = () => {
  const [packages, setPackages] = useState();
  useEffect(() => {
    fetchHandler()
      .then(data => setPackages(data.packages))

  }, []);
  console.log(packages);






  //search
  function filterContent(profile, searchTerm) {
    console.log(profile)
    console.log(searchTerm)
    const result = profile.filter(
      (r) =>
        r.Title.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setPackages(result);
  }





  
  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get(URL).then((res) => {
      if (res.data.packages) {
        filterContent(res.data.packages, searchTerm);
      }
    });
  };








  return (
    <>
      <div className="flex items-center m-[80px] ml-[700px]">
        <div className="flex space-x-1">
        <input
            type="text" onChange={handleTextSearch}
            style={{ width: '600px'}}
            className="block w-120 px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />

          <button className="px-4 text-white bg-purple-600 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>


      <div>
        <ul>
          {packages &&
            packages.map((packag, i) => (
              <li key={i}>
                <Package packag={packag} />
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Notices;