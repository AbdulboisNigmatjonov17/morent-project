import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import GroupIcon from '@mui/icons-material/Group';
import BtnSM from "../btns/btnSM";
import { NavLink } from 'react-router-dom';

const Card = ({ item, about, setData }) => {

  const handleLike = (id) => {
    const likedCarsString = localStorage.getItem("likedCars");
    const likedCars = likedCarsString ? JSON.parse(likedCarsString) : [];

    if (likedCars.includes(id)) {
      // Agar like qilingan bo'lsa, undan olib tashlash
      // const updatedLikes = likedCars.filter((id) => id !== id);
      const updatedLikes = likedCars.filter((likedId) => likedId !== id);
      localStorage.setItem("likedCars", JSON.stringify(updatedLikes));
    } else {
      // Agar hali like qilinmagan bo'lsa, qo'shish
      localStorage.setItem("likedCars", JSON.stringify([...likedCars, id]));
    }

    // Like qilingan ma'lumotlarni qayta yuklash
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  // LocalStorage'dan like holatini olish
  const likedCarsString = localStorage.getItem("likedCars");
  const likedCars = likedCarsString ? JSON.parse(likedCarsString) : [];
  const isLiked = likedCars.includes(item.id);

  return (
    <>
      <div key={item.id} className="bg-white p-4 rounded-lg w-full flex flex-col justify-between px-6">
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-xl font-bold mb-2">{about.title}</h1>
            {/* <h1 className="text-xl font-bold mb-2">{about?.title || 'No title available'}</h1> */}
            <p className="text-sm text-[#7bbad1] mb-2">{about.type}</p>
          </div>
          <div className="cursor-pointer">
            {isLiked ? (
              <FavoriteOutlinedIcon
                fontSize="large"
                className="text-red-500"
                onClick={() => handleLike(item.id)}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                fontSize="large"
                onClick={() => handleLike(item.id)}
              />
            )}
          </div>
        </div>
        <div className="flex justify-center h-[150px] items-center">
          <NavLink to={`/card/${item.id}`}>
            <img className="w-[250px] pt-4" src={about.img} alt="cardImg" />
          </NavLink>
        </div>
        <div className="text-center w-full flex justify-between pt-5">
          <p className="text-sm text-[#7bbad1] flex items-center gap-1">
            <LocalGasStationIcon /> {about.gasoline}L
          </p>
          <p className="text-sm text-[#7bbad1] flex items-center gap-1">
            <PanoramaFishEyeIcon /> Manual
          </p>
          <p className="text-sm text-[#7bbad1] flex items-center gap-1">
            <GroupIcon /> {about.capacity} people
          </p>
        </div>
        <div className="w-full flex justify-between items-center pt-5 mt-auto">
          <div>
            <h1 className="text-lg font-semibold">
              ${about.price} <span className="text-[#7bbad1]">/day</span>
            </h1>
            {
              about.discout ? <s className='text-[#aaaa] text-[18px] font-semibold'>{about.discout_price}</s> : ''
            }
            
          </div>
          <NavLink to={`/cardRent/${item.id}`}>
            <BtnSM text={"Rent Now"} btn_bg={"#3563E9"} />
          </NavLink>
        </div>

      </div>

    </>
  );
};

export default Card;