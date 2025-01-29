import axios from "../../components/service/Api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const carInformation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/cars");
        const filteredData = res.data.find((item) => item.id === params.id);
        if (filteredData) {
          setData(filteredData);
          console.log(filteredData);
          console.log(filteredData.about);
        } else {
          setError("Car not found");
        }
      } catch (error) {
        setError("An error occurred");
        console.log(error);
      }
    };
    getData();
  }, [params.id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="bg-white max-w-full p-5 rounded-xl">
      {data &&
        data.about &&
        data.about.map((about) => (
          <div key={uuidv4()}>
            <h1 className="text-lg font-bold">Rental Summary</h1>
            <p className="text-xs text-[#7bbad1] pt-2">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
            <div className="flex gap-8 items-center pl-4 pt-8">
              <img className="h-[40px]" src={about.img} alt="CarFoto" />
              <div>
                <h1 className="text-2xl font-semibold">{about.title}</h1>
                <h2>{about.reviewer}+Reviewer</h2>
              </div>
            </div>
            <div className="flex justify-between pt-[30px]">
              <h1 className="text-[#7bbad1]">Subtotal</h1>
              <h1 className="text-lg font-semibold">${about.price}.00</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[#7bbad1]">Tax</h1>
              <h1 className="text-lg font-semibold">$0</h1>
            </div>

            <div className="border-b-2 pt-5"></div>

            <div className="flex justify-between pt-[30px]">
              <h1 className="text-[#7bbad1]">Subtotal</h1>
              <h1 className="text-lg font-semibold">${about.price}.00</h1>
            </div>

            <div className="relative  w-full pt-6">
              <input
                type="text"
                placeholder="Apply Promo code"
                className="w-full bg-[#F6F7F9] rounded-lg px-3 py-3 pr-20 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black px-3 pt-6 rounded font-semibold">
                Apply now
              </button>
            </div>
            <div className="flex justify-between items-center pt-5">
              <div>
              <h1 className="font-semibold text-lg">Total Total Rental Price</h1>
              <p className="text-sm text-[#7bbad1]">Overall price rental</p>
              </div>
              <div>
              <h1 className="text-lg font-semibold">${about.price}.00</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default carInformation;
