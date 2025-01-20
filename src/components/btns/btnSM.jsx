import React from 'react'

const BtnSM = ({btn_bg, text}) => {
  return (
    <button className={`bg-[${btn_bg}] hover:bg-opacity-50 text-white py-2 px-6 rounded-lg font-medium text-[18px]`} >{text}</button>
  )
}

export default BtnSM