import React from 'react'
import Filter from '../../components/filter-cards/Filter'
import { Outlet } from 'react-router-dom'
const MainPage = () => {
  return (
    <section className='w-full flex justify-between gap-5'>
      <nav className='max-w-[30%]'>
        <Filter />
      </nav>
      <section className='max-w-[70%]'>
      <Outlet />
      </section>
    </section>
  )
}

export default MainPage