import React from 'react'
import { NavLink } from 'react-router-dom'

const MainLaout = () => {
  return (
    <div className='max-w-full px-5 py-5 bg-white flex flex-col gap-5'>
      <NavLink to={'/cards'}>
      <input type="radio" /> All
      </NavLink>
      <div>
        <h3>Type</h3>
        <ul>
          <form>
            <li className='flex gap-2'>
              <NavLink to={'/cards/sport-type'}>
                <input type="radio" />
              </NavLink>
              Sport <span>(2)</span>
            </li>
            <li className='flex gap-2'>
              <NavLink to={'/cards/sedan-type'}>
                <input type="radio" />
              </NavLink>
              Sedan <span>(1)</span>
            </li>
            <li className='flex gap-2'>
              <NavLink to={'/cards/suv-type'}>
                <input type="radio" />
              </NavLink>
              Suv <span>(4)</span>
            </li>
            <li className='flex gap-2'>
              <NavLink to={'/cards/hatchback-type'}>
                <input type="radio" />
              </NavLink>
              Hatchaback <span>(1)</span>
            </li>
          </form>
        </ul>
      </div>
      <div>
        <h3>Capacity</h3>
        <ul>
          <li className='flex gap-2'>
            <NavLink to={'/cards/2-people'}>
              <input type="radio" />
            </NavLink>
            2 people <span>(2)</span>
          </li>
          <li className='flex gap-2'>
            <NavLink to={'/cards/4-people'}>
              <input type="radio" />
            </NavLink>
            4 people <span>(1)</span>
          </li>
          <li className='flex gap-2'>
            <NavLink to={'/cards/6-people'}>
              <input type="radio" />
            </NavLink>
            6 people <span>(5)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainLaout