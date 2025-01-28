import React from 'react'

const Step1of4 = () => {
  return (
    <div className='max-w-full bg-white py-5 px-10 flex flex-col gap-5 rounded-xl'>
        <div className='flex w-full justify-between'>
            <div>
                <h3 className='font-bold text-[20px]'>Billing Info</h3>
                <h2>Please enter your billing info</h2>
            </div>
            <h4>Step 1 of 4</h4>
        </div>
        <form className=' flex flex-col gap-5'>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col '>
                    <label htmlFor="name" className='font-semibold'>Name</label>
                    <input id='name' type="text" placeholder='Your name' className='outline-blue-500 py-2 w-[300px] px-5 rounded-lg bg-[#eeeeee]'/>
                </div>
                <div className='max-w-full flex flex-col'>
                    <label htmlFor="city" className='font-semibold'>Address</label>
                    <input id='city' type="text" placeholder='Town or city' className='outline-blue-500 py-2 w-[300px] px-5 rounded-lg bg-[#eeeeee]'/>
                </div>
            </div>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Phone</label>
                    <input type="text" placeholder='Address' className='outline-blue-500 py-2 px-5  w-[300px] rounded-lg bg-[#eeeeee]'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=""className='font-semibold'>Town / City</label>
                    <input type="text" placeholder='Town or city' className='outline-blue-500 py-2 w-[300px] px-5 rounded-lg bg-[#eeeeee]'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Step1of4