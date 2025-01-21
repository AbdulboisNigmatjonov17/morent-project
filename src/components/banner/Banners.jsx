import { useEffect, useState } from "react"
import BannerCard from "./BannerCard"
import axios from "../service/Api"

const Banners = () => {

    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const bnData = await axios.get('/banners')
                setBannerData(bnData.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    return (
        <>
            <div className="banners my-10 w-full flex gap-10 justify-between px-10">
                {
                    bannerData.map((item) => {
                        return <BannerCard id={item.id} title={item.title} description={item.description} btn_bg={item.btn_bg} bgColor={item.bg} img={item.img} />
                    })
                }
            </div>
        </>
    )
}
// const updatedData = bnData.data.map((item) => ({
//     ...item,
//     like: true
// }));
export default Banners