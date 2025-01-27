import BtnSm from '../btns/btnSM'

const BannerCard = ({ onClick, id, title, description, btn_bg, bgColor, img }) => {

    const scroll = (id) => {
        const cardID = document.getElementById(id);
        if(cardID){
            cardID.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <>
            <div className={`bannerCard w-[50%] flex flex-col rounded-2xl h-[400px] relative bg-[${bgColor}] text-white py-10 px-7`} key={id}>
                <div className="bannerCard-content flex flex-col gap-5 items-start w-72">
                    <h3 className='font-medium text-[30px]'>{title}</h3>
                    <p>{description}</p>
                    <BtnSm btn_bg={btn_bg} text={'Retal Car'} onClick={scroll}/>
                </div>
                <img src={img} width={400} alt="banner-card-img" className='absolute right-[10%] bottom-10'/>
            </div>
        </>
    )
}

export default BannerCard