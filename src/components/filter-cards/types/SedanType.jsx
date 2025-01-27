import React, { useEffect, useState } from 'react'
import axios from "../../service/Api";
import Card from '../../cards/CardComp';
import { v4 as uuidv4 } from 'uuid'

const SedanType = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getFilteredCars = async () => {
      try {
        const response = await axios.get("/cars");
        const cars = response.data;
        console.log("Response data:", cars);

        const filteredCars = cars.filter((car) =>
          car.about.some((item) => {
            console.log("Checking type:", item.type);
            return String(item.type) === 'Sedan';
          })
        );

        console.log("Filtered Cars:", filteredCars);
        setData(filteredCars);
      } catch (error) {
        console.error("Error fetching cars:", error.message);
      }
    };

    getFilteredCars();
  }, []);

  return (
    <div className='max-w-full grid grid-cols-3 gap-5'>
      {
        data.map((item) => (
          <Card key={uuidv4()} item={item} about={item.about} setData={setData} />
        ))
      }
    </div>
  )
}

export default SedanType