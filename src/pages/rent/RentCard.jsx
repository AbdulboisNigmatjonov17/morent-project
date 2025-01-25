import React from 'react'
import Step1of4 from '../../components/RentComponents/Step1of4'
import Step2of4 from '../../components/RentComponents/Step2of4'
import Step3of4 from '../../components/RentComponents/Step3of4'
import Step4of4 from '../../components/RentComponents/Step4of4'

const RentCard = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Step1of4/>
      <Step2of4/>
      <Step3of4/>
      <Step4of4/>
    </div>
  )
}

export default RentCard