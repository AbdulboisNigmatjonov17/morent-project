import React from 'react'

const Step2of4 = () => {
    return (
        <div className='max-w-full bg-white py-5 px-10 rounded-lg'>
            <div className='w-full flex justify-between'>
                <div>
                    <h3 className='font-bold text-[20px]'>Rental Info</h3>
                    <h2>Please eneter your billing info</h2>
                </div>
                <h3>Step 2 of 4</h3>
            </div>
            <form className='mt-5'>
                <h1 className='text-[25px] font-semibold'>
                    Pick - Up
                </h1>
                <div className=''>
                    <div className='flex justify-between gap-5'> 
                        <div className='flex flex-col'> 
                            <label>Locations</label>
                            <select id="" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' >
                                <option value="">Toshkent</option>
                                <option value="">Tokio</option>
                                <option value="">Madrid</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label>Date</label>
                            <input type="date" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label>Time</label>
                        <input type="time" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                    </div>
                </div>
            </form>
            <form className='mt-5'>
                <h1 className='text-[25px] font-semibold'>
                    Drop - Off
                </h1>
                <div className=''>
                    <div className='flex justify-between gap-5'> 
                        <div className='flex flex-col'> 
                            <label>Locations</label>
                            <select id="" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' >
                                <option value="">Toshkent</option>
                                <option value="">Tokio</option>
                                <option value="">Madrid</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label>Date</label>
                            <input type="date" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label>Time</label>
                        <input type="time" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Step2of4