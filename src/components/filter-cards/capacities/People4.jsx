import React, { useEffect, useState } from 'react'
import axios from "../../service/Api";
import { v4 as uuidv4 } from 'uuid'
import CardComp from '../../cards/CardComp'
const People4 = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getFilteredCars = async () => {
      try {
        const res = await axios.get('/cars')
        const filteredData = res.data.filter(item =>
          item.about.some(aboutItem => aboutItem.capacity === 4)
        )

        if (filteredData.length > 0) {
          setData(filteredData)
        } else {
          setError('Car not found')
        }
      } catch (error) {
        setError('An error occurred')
        console.log(error)
      }
    };

    getFilteredCars();
  }, []);

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className='max-w-full grid grid-cols-3 gap-5'>
      {
        data.length > 0 && data.map((item) => (
          item.about.map((aboutItem) => aboutItem.capacity === 4 && (
            <CardComp item={item} about={aboutItem} key={uuidv4()} />
          ))
        ))
      }
    </div>
  )
}

export default People4
