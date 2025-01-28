import React from 'react'

const Step3of4 = () => {

    const visa = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Flogo%2FVisa.png&w=96&q=75'
    const paypal = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Flogo%2FPayPal.png&w=96&q=75'
    const bitcoin = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Flogo%2FBitcoin.png&w=96&q=75'
    return (
        <div className='max-w-full bg-white py-5 px-10 rounded-lg'>
            <div className='w-full flex justify-between'>
                <div>
                    <h3 className='font-bold text-[20px]'>Billing Info</h3>
                    <h2>Please enter your billing info</h2>
                </div>
                <h3>Step 3 of 4</h3>
            </div>
            <form className='flex flex-col gap-5'>
                <div className='bg-[#eeee] py-2 px-3 rounded-md'>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-3'>
                            <input type="radio" id="age1" name="age" value="30" />
                            <label htmlFor="age1">
                                Credit Card
                            </label>
                        </div>
                        <div>
                            <img src={visa} alt="" />
                        </div>
                    </div>
                    <div className='py-2 px-4'>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col '>
                                <label htmlFor="name" className='font-semibold'>Name</label>
                                <input id='name' type="text" placeholder='Your name' className='outline-blue-500 py-2 max-w-[300px] px-5 rounded-lg bg-[#fff]' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="city" className='font-semibold'>Address</label>
                                <input id='city' type="text" placeholder='Town or city' className='outline-blue-500 py-2 max-w-[300px] px-5 rounded-lg bg-[#fff]' />
                            </div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold'>Phone</label>
                                <input type="text" placeholder='Address' className='outline-blue-500 py-2 px-5  max-w-[300px] rounded-lg bg-[#fff]' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-semibold'>Town / City</label>
                                <input type="text" placeholder='Town or city' className='outline-blue-500 py-2 max-w-[300px] px-5 rounded-lg bg-[#fff]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between py-2 px-4 pb-10 rounded-md bg-[#eeee]'>
                    <div className='flex gap-3'>
                        <input type="radio" id="age2" name="age" value="60" />
                        <label htmlFor="age2">
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
                        <label htmlFor="age3">
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
