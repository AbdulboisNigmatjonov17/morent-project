import React from 'react'

const Step4of4 = () => {
  return (
    <div className='max-w-full bg-white py-5 px-10 rounded-lg'>
        <div className='w-full flex justify-between pb-5'>
                <div>
                    <h3 className='font-semibold text-[20px]'>Confirmation</h3>
                    <h2 className='text-[#646464aa] pl-1 font-medium'>We are getting to the end. Just few clicks <br /> and your rental is ready!</h2>
                </div>
                <h3>Step 4 of 4</h3>
            </div>
            <form className='flex flex-col gap-5 items-start'>
                <div className='flex gap-3 py-2 px-5 pb-10 rounded-md bg-[#eeee]'>
                    <input type="checkbox" id='checkbox1'/>
                    <label htmlFor="checkbox1" className='font-semibold text-lg'>
                    I agree with sending an Marketing and newsletter emails. No spam, promissed!
                    </label>
                </div>
                <div className='w-full flex gap-3 py-2 px-5 pb-10 rounded-md bg-[#eeee]'> 
                    <input type="checkbox" id='checkbox2'/>
                    <label htmlFor="checkbox2" className='font-semibold text-lg'>
                    I agree with our terms and conditions and privacy policy!
                    </label>
                </div>
                <button className='bg-blue-500 text-white py-2 rounded-md  px-3 font-semibold text-[18px]'>Rental now</button>
            </form>
    </div>
  )
}

export default Step4of4