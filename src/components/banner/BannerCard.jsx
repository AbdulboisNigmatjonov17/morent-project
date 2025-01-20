import BtnSm from '../btns/btnSM'

const BannerCard = ({ id, title, description, btn_bg, bgColor, img }) => {

    return (
        <>
            <div className={`bannerCard w-[50%] flex flex-col rounded-2xl h-[400px] relative bg-[${bgColor}] text-white py-10 px-7`} key={id}>
                <div className="bannerCard-content flex flex-col gap-5 items-start bg-inherit w-72">
                    <h3 className='bg-inherit font-medium text-[30px]'>{title}</h3>
                    <p className='bg-inherit'>{description}</p>
                    <BtnSm btn_bg={btn_bg} text={'Retal Car'} />
                </div>
                <img src={img} width={400} alt="banner-card-img" className=' bg-inherit absolute right-[10%] bottom-10'/>
            </div>
        </>
    )
}

export default BannerCard