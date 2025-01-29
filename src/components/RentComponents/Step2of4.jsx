import React from 'react'

const Step2of4 = () => {
    return (
        <div className='max-w-full bg-white p-5 rounded-lg'>
            <div className='w-full flex justify-between'>
                <div>
                    <h3 className='font-bold text-[20px]'>Rental Info</h3>
                    <h2 className='text-[#646464aa] font-medium text-[17px]'>Please eneter your billing info</h2>
                </div>
                <h3 className='text-[#646464aa] font-medium text-[17px]'>Step 2 of 4</h3>
            </div>
            <form className='mt-5'>
                <div className='flex items-center gap-3 mb-3'>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse">
                    </div>
                    <h1 className='text-xl font-semibold'>
                        Pick - Up
                    </h1>
                </div>
                <div className=''>
                    <div className='flex justify-between gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor='select' className='font-semibold text-lg'>Locations</label>
                            <select id="select" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' >
                                <option value="">Toshkent</option>
                                <option value="">Tokio</option>
                                <option value="">Madrid</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-lg'>Date</label>
                            <input type="date" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-semibold text-lg'>Time</label>
                        <input type="time" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                    </div>
                </div>
            </form>
            <form className='mt-5'>
                <div className='flex items-center gap-3 mb-3'>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse">
                    </div>
                    <h1 className='text-xl font-semibold '>
                        Drop - Off
                    </h1>
                </div>
                <div className=''>
                    <div className='flex justify-between gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-lg'>Locations</label>
                            <select id="" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' >
                                <option value="">Toshkent</option>
                                <option value="">Tokio</option>
                                <option value="">Madrid</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-lg'>Date</label>
                            <input type="date" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-semibold text-lg'>Time</label>
                        <input type="time" className='bg-[#eeee] w-[300px] py-3 px-5 rounded-lg' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Step2of4