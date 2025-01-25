import React from 'react'
import { NavLink } from 'react-router-dom'

const BtnAll = () => {
    return (
        <button className='text-blue-500 font-semibold text-[20px] capitalize'>
            <NavLink to={'/cards'}>
                view all
            </NavLink>
        </button>
    )
}

export default BtnAll