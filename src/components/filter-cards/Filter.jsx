import React from 'react'
import { NavLink } from 'react-router-dom'

const Filter = () => {
const handleClick = ()=>{
  focus();
}

  return (
    <form className='max-w-full px-5 py-5 bg-white flex flex-col gap-5'>
      <NavLink to={'/cards'}>
      <input type="checkbox" onClick={()=> handleClick}/> All
      </NavLink>
      <div>
        <h3>Type</h3>
        <ul>
          <div>
            <li className='flex gap-2 '>
              <NavLink to={'/cards/sport-type'}>
                <input type="checkbox" onClick={()=> handleClick}/>
              </NavLink>
              Sport <span>(2)</span>
            </li>
            <li className='flex gap-2'>
              <NavLink to={'/cards/sedan-type'}>
                <input type="checkbox" onClick={()=> handleClick}/>
              </NavLink>
              Sedan <span>(1)</span>
            </li>
            <li className='flex gap-2'>
              <NavLink to={'/cards/suv-type'}>
                <input type="checkbox" onClick={()=> handleClick}/>
              </NavLink>
              Suv <span>(4)</span>
            </li>
            <li className='flex gap-2'>
              <NavLink to={'/cards/hatchback-type'}>
                <input type="checkbox" onClick={()=> handleClick}/>
              </NavLink>
              Hatchaback <span>(1)</span>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <h3>Capacity</h3>
        <ul>
          <li className='flex gap-2'>
            <NavLink to={'/cards/2-people'}>
              <input type="checkbox" onClick={()=> handleClick}/>
            </NavLink>
            2 people <span>(2)</span>
          </li>
          <li className='flex gap-2'>
            <NavLink to={'/cards/4-people'}>
              <input type="checkbox" onClick={()=> handleClick}/>
            </NavLink>
            4 people <span>(1)</span>
          </li>
          <li className='flex gap-2'>
            <NavLink to={'/cards/6-people'}>
              <input type="checkbox" onClick={()=> handleClick}/>
            </NavLink>
            6 people <span>(5)</span>
          </li>
        </ul>
      </div>
    </form>
  )
}

export default Filter