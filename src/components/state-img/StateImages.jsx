import React, { useState } from 'react'

const StateImages = () => {
    const img1 = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fcar-detail-image-1.png&w=640&q=75'
    const img2 = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fcar-detail-image-2.png&w=640&q=75'
    const img3 = 'https://morent-website.vercel.app/_next/image?url=%2Fimages%2Fcar-detail-image-3.png&w=640&q=75'

    const [img, setImg] = useState(img1)

    return (
        <>
            <div className='w-[50%] flex flex-col gap-5'>
                <img src={img} alt="state-img-main" className='rounded-2xl max-w-full'/>
                <div className="imgs flex justify-between ">
                    <img src={img1} width={200} height={200} onClick={() => setImg(img1)} alt="state-img-1" className='rounded-xl' />
                    <img src={img2} width={200} height={200} onClick={() => setImg(img2)} alt="state-img-2" className='rounded-xl' />
                    <img src={img3} width={200} height={200} onClick={() => setImg(img3)} alt="state-img-3" className='rounded-xl' />
                </div>
            </div>
        </>
    )
}

export default StateImages