import BtnSm from '../btns/btnSM'

const BannerCard = ({ id, title, description, btnBgColor, bgColor, img }) => {

    return (
        <>
            <div className="bannerCard" key={id}>
                <div className="bannerCard-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <BtnSm bgColor={'bg-[#3563E9]'}/>
                </div>
            </div>
        </>
    )
}

export default BannerCard