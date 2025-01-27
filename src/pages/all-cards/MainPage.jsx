import React from 'react'
import Filter from '../../components/filter-cards/Filter'
import { Outlet } from 'react-router-dom'
import LocationData from '../../components/PIck-Up/PickUp'
const MainPage = () => {
  return (
    <section className='w-full flex justify-between gap-5'>
      <nav className='max-w-[20%]'>
        <Filter />
      </nav>
      <section className='max-w-[85%]'>
        <LocationData />
        <Outlet />
      </section>
    </section>
  )
}

export default MainPage