import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import GroupIcon from '@mui/icons-material/Group';
import BtnSM from "../btns/btnSM";

const Card = () => {
  const [cardData, setCard] = useState([]);

  useEffect(() => {
    const getCard = async () => {
      try {
        const ftcard = await axios.get("/cars");
        setCard(ftcard.data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };
    getCard();
  }, []);

  const handleLike = (itemId) => {
    const currentLikes = JSON.parse(localStorage.getItem('likedCars')) || [];
    
    if (currentLikes.includes(itemId)) {
      // Agar like mavjud bo'lsa, uni olib tashlang
      localStorage.setItem('likedCars', JSON.stringify(currentLikes.filter(id => id !== itemId)));
    } else {
      // Yangi like qo'shish
      localStorage.setItem('likedCars', JSON.stringify([...currentLikes, itemId]));
    }

    // API'ga so'rov yuborish (itemId'ni to'g'ri yuborish)
    const updatedData = { like: !currentLikes.includes(itemId) };
    try {
      axios.put(`/cars/${itemId}`, updatedData);  // itemId'ni to'g'ri yuborish
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 ">
      {cardData.map((item) => (
        item.about.map((aboutItem) => {
          const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
          const isLiked = likedCars.includes(item.id);

          return (
            <div key={item.id} className="bg-white p-4 rounded-lg w-full flex flex-col justify-between px-6">
  <div className="w-full flex justify-between">
    <div>
      <h1 className="text-xl font-bold mb-2">{aboutItem.title}</h1>
      <p className="text-sm text-[#7bbad1] mb-2">{aboutItem.type}</p>
    </div>
    <div className="cursor-pointer">
      {isLiked ? (
        <FavoriteOutlinedIcon 
          fontSize="large" 
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
    <img className="w-[250px] pt-4" src={aboutItem.img} alt="carFoto" />
  </div>
  <div className="text-center w-full flex justify-between pt-5">
    <p className="text-sm text-[#7bbad1] flex items-center gap-1"><LocalGasStationIcon /> {aboutItem.gasoline}L</p>
    <p className="text-sm text-[#7bbad1] flex items-center gap-1"><PanoramaFishEyeIcon /> Manual</p>
    <p className="text-sm text-[#7bbad1] flex items-center gap-1"><GroupIcon /> {aboutItem.capacity} people</p>
  </div>
  <div className="w-full flex justify-between items-center pt-5 mt-auto">
    <h1 className="text-lg font-semibold">${aboutItem.price} <span className="text-[#7bbad1]">/day</span></h1>
    <BtnSM text={'Rent Now'} btn_bg={'#3563E9'} />
  </div>
</div>

          );
        })
      ))}
    </div>
  );
};

export default Card;
