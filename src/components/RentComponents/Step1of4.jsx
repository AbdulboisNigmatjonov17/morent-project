import React from 'react'

const Step1of4 = () => {
  return (
    <div className='max-w-full bg-white p-5 flex flex-col gap-5 rounded-xl'>
        <div className='flex w-full justify-between'>
            <div>
                <h3 className='font-bold text-[20px]'>Billing Info</h3>
                <h2 className='text-[#646464aa] text-[18px]'>Please enter your billing info</h2>
            </div>
            <h4 className='text-[#646464aa] text-[18px] font-medium'>Step 1 of 4</h4>
        </div>
        <form className=' flex flex-col gap-7'>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col '>
                    <label htmlFor="name" className='font-semibold text-[17px]'>Name</label>
                    <input id='name' type="text" placeholder='Your name' className='outline-blue-500 py-3 w-[300px] px-5 rounded-lg bg-[#eeeeee]'/>
                </div>
                <div className='max-w-full flex flex-col'>
                    <label htmlFor="city" className='font-semibold text-[17px]'>Address</label>
                    <input id='city' type="text" placeholder='Town or city' className='outline-blue-500 py-3 w-[300px] px-5 rounded-lg bg-[#eeeeee]'/>
                </div>
            </div>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-semibold text-[17px]'>Phone</label>
                    <input type="text" placeholder='Address' className='outline-blue-500 py-3 px-5  w-[300px] rounded-lg bg-[#eeeeee]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=""className='font-semibold text-[17px]'>Town / City</label>
                    <input type="text" placeholder='Town or city' className='outline-blue-500 py-3 w-[300px] px-5 rounded-lg bg-[#eeeeee]'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Step1of4