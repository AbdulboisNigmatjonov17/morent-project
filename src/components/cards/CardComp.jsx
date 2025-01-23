// import React, { useState, useEffect } from "react";
// import axios from "../service/Api";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import GroupIcon from '@mui/icons-material/Group';
import BtnSM from "../btns/btnSM";

const Card = ({item}) => {
  // LocalStorage bilan ishlash uchun like funksiyasi
  const handleLike = (id) => {
    const likedCarsString = localStorage.getItem("likedCars");
    const likedCars = likedCarsString ? JSON.parse(likedCarsString) : [];
  
    if (likedCars.includes(id)) {
      // Agar like qilingan bo'lsa, undan olib tashlash
      const updatedLikes = likedCars.filter((id) => id !== id);
      localStorage.setItem("likedCars", JSON.stringify(updatedLikes));
    } else {
      // Agar hali like qilinmagan bo'lsa, qo'shish
      localStorage.setItem("likedCars", JSON.stringify([...likedCars, id]));
    }
  
    // Like qilingan ma'lumotlarni qayta yuklash
    setCard((prevData) =>
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
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8"> */}
        {/* {cardData.map((item) => (
          item.about?.map((aboutItem) => {
             */}

        {/* return ( */}
        <div key={item.id} className="bg-white p-4 rounded-lg w-full flex flex-col justify-between px-6">
          <div className="w-full flex justify-between">
            <div>
              <h1 className="text-xl font-bold mb-2">{item.title}</h1>
              <p className="text-sm text-[#7bbad1] mb-2">{item.type}</p>
            </div>
            <div className="cursor-pointer">
              {isLiked ? (
                <FavoriteOutlinedIcon
                  fontSize="large"
                  className="text-red-500"
                  onClick={() => handleLike(id)}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  fontSize="large"
                  onClick={() => handleLike(id)}
                />
              )}
            </div>
          </div>
          <div className="flex justify-center h-[150px] items-center">
            <img className="w-[250px] pt-4" src={item.img} alt="cardImg" />
          </div>
          <div className="text-center w-full flex justify-between pt-5">
            <p className="text-sm text-[#7bbad1] flex items-center gap-1">
              <LocalGasStationIcon /> {item.gasoline}L
            </p>
            <p className="text-sm text-[#7bbad1] flex items-center gap-1">
              <PanoramaFishEyeIcon /> Manual
            </p>
            <p className="text-sm text-[#7bbad1] flex items-center gap-1">
              <GroupIcon /> {item.capacity} people
            </p>
          </div>
          <div className="w-full flex justify-between items-center pt-5 mt-auto">
            <h1 className="text-lg font-semibold">
              ${item.price} <span className="text-[#7bbad1]">/day</span>
            </h1>
            <BtnSM text={"Rent Now"} btn_bg={"#3563E9"} />
          </div>
        {/* </div> */}
        {/* ); */}
        {/* })
        ))} */}
      </div>
      {/* <div className="w-full flex justify-center">
        <BtnSM btn_bg={'#3563E9'} text={'Show More Car'} />
      </div> */}
    </>
  );
};

export default Card;

// const [cardData, setCard] = useState([]);

// useEffect(() => {
//   const getCard = async () => {
//     try {
//       const ftcard = await axios.get("/cars");
//       setCard(ftcard.data);
//     } catch (error) {
//       console.error("Error fetching card data:", error);
//     }
//   };
//   getCard();
// }, []);

