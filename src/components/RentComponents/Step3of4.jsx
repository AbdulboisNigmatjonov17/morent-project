import React from 'react'

const Step3of4 = () => {

    const visa = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Flogo%2FVisa.png&w=96&q=75'
    const paypal = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Flogo%2FPayPal.png&w=96&q=75'
    const bitcoin = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Flogo%2FBitcoin.png&w=96&q=75'
    return (
        <div className='max-w-full bg-white py-5 px-10 rounded-lg'>
            <div className='w-full flex justify-between mb-5'>
                <div>
                    <h3 className='font-bold text-[20px]'>Billing Info</h3>
                    <h2 className='text-[#646464aa] font-medium text-[17px]'>Please enter your billing info</h2>
                </div>
                <h3 className='text-[#646464aa] font-medium text-[17px]'>Step 3 of 4</h3>
            </div>
            <form className='flex flex-col gap-5'>
                <div className='bg-[#eeee] p-3 rounded-md'>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-3 mb-5'>
                            <input type="radio" id="age1" name="age" value="30" />
                            <label htmlFor="age1" className='font-semibold text-lg'>
                                Credit Card
                            </label>
                        </div>
                        <div>
                            <img src={visa} alt="" />
                        </div>
                    </div>
                    <div className='py-2 px-4 flex flex-col gap-10'>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='font-semibold'>Card number</label>
                                <input id='name' type="text" placeholder='Card number' className='outline-blue-500 py-2 max-w-[300px] px-5 rounded-lg bg-[#fff]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="city" className='font-semibold'>Expration Date</label>
                                <input id='city' type="date" placeholder='Town or city' className='outline-blue-500 py-2 max-w-[300px] px-12 rounded-lg bg-[#fff]' />
                            </div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>Card Holder</label>
                                <input type="text" placeholder='Card Holder' className='outline-blue-500 py-2 px-5  max-w-[300px] rounded-lg bg-[#fff]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='font-semibold'>CVC</label>
                                <input type="text" placeholder='CVC' className='outline-blue-500 py-2 max-w-[300px] px-5 rounded-lg bg-[#fff]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between py-2 px-4 pb-10 rounded-md bg-[#eeee]'>
                    <div className='flex gap-3'>
                        <input type="radio" id="age2" name="age" value="60" />
                        <label htmlFor="age2" className='font-semibold text-xl'>
                            PayPal
                        </label>
                    </div>
                    <div>
                        <img src={paypal} alt="" />
                    </div>
                </div>
                <div className='flex justify-between py-2 px-4 pb-10 rounded-md bg-[#eeee]'>
                    <div className='flex gap-3'>
                        <input type="radio" id="age3" name="age" value="100" />
                        <label htmlFor="age3" className='font-semibold text-xl'>
                            Bitcoin
                        </label>
                    </div>
                    <div>
                        <img src={bitcoin} alt="" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Step3of4;
