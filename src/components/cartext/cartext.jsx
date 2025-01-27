import axios from "../service/Api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import BtnSM from "../btns/btnSM";

const CarText = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/cars");
        const filteredData = res.data.find(
          (item) => item.id === parseInt(params.id, 10)
        );
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
    <div>
      {data &&
        data.about &&
        data.about.map((about) => (
          <div key={uuidv4()}>
            <div className="bg-white px-[50px] py-[40px] rounded-lg">
              <h1 className="text-3xl font-bold">{about.title}</h1>
              <h2 className="text-[#7bbad1] text-xl font-semibold pt-[10px]">
                yulduz qoy
                 {about.reviewer}+Reviewer
              </h2>
              <p className="text-[#7bbad1] pt-[25px] w-[350px]">{about.description}</p>
              <div className="flex justify-start gap-5 pt-[10px] text-lg">
                <div className="text-[#7bbad1]">
                  <h2>Type Car</h2>
                  <h2>Capacity</h2>
                </div>
                <div className="font-semibold">
                  <h2 className="flex justify-end">Sport</h2>
                  <h2>{about.capacity} People</h2>
                </div>
                <div className="text-[#7bbad1]">
                  <h2>Steering</h2>
                  <h2>Gasoline</h2>
                </div>
                <div className="font-semibold">
                  <h2>Manual</h2>
                  <h2 className="flex justify-end">{about.gasoline}L</h2>
                </div>
              </div>
              <div className="flex gap-[180px] pt-[35px]">
                <div>
                <h1 className="text-lg font-bold">
                  ${about.price}.00/
                  <span className="text-[#7bbad1] text-sm">days</span>
                </h1>
                {
              about.discout ? <s className='text-[#aaaa] text-[18px] font-semibold'>${about.discout_price}.00</s> : ''
            }
                </div>
                <NavLink to={`/cardRent/${params.id}`}>
                  <BtnSM btn_bg={"#4457ff"} text={"Rent Now"} />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default CarText;
