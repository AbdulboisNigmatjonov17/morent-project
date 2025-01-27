import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "../service/Api";
import ImportExportIcon from '@mui/icons-material/ImportExport';

const LocationData = () => {
  const [pickUpData, setPickUpData] = useState([]);
  const [dropOffData, setDropOffData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pickUpResponse = await axios.get("/Pick-Up");
        setPickUpData(pickUpResponse.data);

        const dropOffResponse = await axios.get("/Drop-Off");
        setDropOffData(dropOffResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center p-3 gap-5">
      <div className= " bg-white p-6 rounded-xl">
        <div className="flex gap-2 ">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <h2 className="text-xl font-semibold mb-4">Pick-Up</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {pickUpData.map((item) => (
            <div key={item.id}>
              <div
                className={`${
                  item.id === 3 ? "" : "border-r border-[#7bbad1]"} h-14`}
              >
                <h1 className="text-lg font-bold mb-2">{item.h1}</h1>
                <div className="flex items-center">
                  <p className="text-[#7bbad1]">{item.p}</p>
                  <ExpandMoreIcon className="mr-2 text-[#7bbad1]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
          <button className="text-white bg-blue-500 p-[16px] rounded-lg"> <ImportExportIcon /> </button>
        </div>
      <div className="bg-white px-[48px] py-[25px] rounded-xl">
      <div className="flex gap-2 ">
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
        <h2 className="text-xl font-semibold mb-4">Drop-Off</h2>
        </ div>
        <div className="grid grid-cols-3 gap-3">
          {dropOffData.map((item) => (
            <div key={item.id}>
              <div
                className={`${
                  item.id === 6 ? "" : "border-r border-[#7bbad1]"} h-14`}
              >
                <h1 className="text-lg font-bold mb-2">{item.h1}</h1>
                <div className="flex items-start">
                  <p className="text-[#7bbad1]">{item.p}</p>
                  <ExpandMoreIcon className="mr-2 text-[#7bbad1]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationData;