import React from 'react'

const btnSM = ({bgColor, text}) => {
  return (
    <button className={`${bgColor} text-white py-2 px-4 rounded-lg`} >{text}</button>
  )
}

export default btnSM