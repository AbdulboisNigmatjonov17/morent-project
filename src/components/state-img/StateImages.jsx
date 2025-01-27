import React, { useState } from 'react'

const StateImages = () => {
    const img1 = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fcar-detail-image-1.png&w=640&q=75'
    const img2 = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fcar-detail-image-2.png&w=640&q=75'
    const img3 = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fcar-detail-image-3.png&w=640&q=75'

    const [img, setImg] = useState(img1)

    return (
        <>
            <div className='w-[40%] flex flex-col gap-5'>
                <div className='w-full h-[370px]'>
                    <img src={img} alt="state-img-main" className='rounded-2xl w-full h-full' />
                </div>
                <div className="imgs flex justify-between ">
                    <img src={img1} width={150} height={150} onClick={() => setImg(img1)} alt="state-img-1" className='rounded-xl cursor-pointer' />
                    <img src={img2} width={150} height={150} onClick={() => setImg(img2)} alt="state-img-2" className='rounded-xl cursor-pointer' />
                    <img src={img3} width={150} height={150} onClick={() => setImg(img3)} alt="state-img-3" className='rounded-xl cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default StateImages