import axios from '../service/Api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const CarText = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/cars')
        const filteredData = res.data.find(item => item.id === params.id)

        if (filteredData) {
          setData(filteredData)
          console.log(filteredData)
          console.log(filteredData.about)
        } else {
          setError('Car not found')
        }
      } catch (error) {
        setError('An error occurred')
        console.log(error)
      }
    }
    getData()
  }, [params.id])

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h2>ID: {params.id}</h2>
      {
        data && data.about && data.about.map((about) => (
          <div key={uuidv4()}>
            <h1>revi{about.title}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default CarText
