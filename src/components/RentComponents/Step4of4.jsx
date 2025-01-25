import React from 'react'

const Step4of4 = () => {
  return (
    <div className='bg-white w-[50%] py-5 px-10 rounded-lg'>
        <div className='w-full flex justify-between'>
                <div>
                    <h3 className='font-bold text-[20px]'>Confirmation</h3>
                    <h2>We are getting to the end. Just few clicks <br /> and your rental is ready!</h2>
                </div>
                <h3>Step 4 of 4</h3>
            </div>
            <form className='flex flex-col gap-5 items-start'>
                <div className='flex gap-3 py-2 px-5 pb-10 rounded-md bg-[#eeee]'>
                    <input type="checkbox" id='checkbox1'/>
                    <label htmlFor="checkbox1">
                    I agree with sending an Marketing and newsletter emails. No spam, promissed!
                    </label>
                </div>
                <div className='w-full flex gap-3 py-2 px-5 pb-10 rounded-md bg-[#eeee]'> 
                    <input type="checkbox" id='checkbox2'/>
                    <label htmlFor="checkbox2">
                    I agree with our terms and conditions and privacy policy!
                    </label>
                </div>
                <button className='bg-blue-500 text-white py-2 rounded-md  px-3 font-semibold text-[18px]'>Rental now</button>
            </form>
    </div>
  )
}

export default Step4of4