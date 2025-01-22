import React, { useState, useEffect } from "react";
import axios from "../service/Api";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
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

  const handleLike = async (itemId) => {
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
      await axios.put(`/cars/${itemId}`, updatedData);  // itemId'ni to'g'ri yuborish
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cardData.map((item) => (
        item.about.map((aboutItem) => {
          const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
          const isLiked = likedCars.includes(item.id);

          return (
            <div key={item.id} className="bg-white p-4 rounded-lg w-full">
              <div className="w-full flex justify-between">
                <div>
                  <h1 className="text-xl font-bold mb-2">{aboutItem.title}</h1>
                  <p className="text-sm text-[#7bbad1] mb-2">{aboutItem.type}</p>
                </div>
                <div className="cursor-pointer">
                  {isLiked ? (
                    <FavoriteOutlinedIcon 
                      fontSize="large" 
                      onClick={() => handleLike(item.id)} // item.id'ni yuborish
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon 
                      fontSize="large" 
                      onClick={() => handleLike(item.id)} // item.id'ni yuborish
                    />
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center">
                <img src={aboutItem.img} alt="carFoto" />
              </div>
              <div className="text-center w-full flex justify-center gap-4">
                <p className="text-sm text-[#7bbad1]">{aboutItem.gasoline}L</p>
                <p className="text-sm text-[#7bbad1]">Manual</p>
                <p className="text-sm text-[#7bbad1]">{aboutItem.capacity} people</p>
              </div>
              <div className="w-full flex justify-between items-center">
                <h1 className="text-lg font-semibold mt-2">${aboutItem.price} /day</h1>
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
