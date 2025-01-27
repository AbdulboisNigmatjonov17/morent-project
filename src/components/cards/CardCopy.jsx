import React, { useState, useEffect } from "react";
import axios from "../service/Api";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import GroupIcon from '@mui/icons-material/Group';
import BtnSM from "../btns/btnSM";
import { NavLink } from "react-router-dom";

const CardCopy = () => {
    const [cardData, setCard] = useState([]);
    const [likedCars, setLikedCars] = useState([]);

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

        // LocalStorage'dan like holatini olish
        const likedCarsString = localStorage.getItem("likedCars");
        const likedCars = likedCarsString ? JSON.parse(likedCarsString) : [];
        setLikedCars(likedCars);
    }, []);

    const handleLike = (itemId) => {
        let updatedLikes = [...likedCars];
        if (likedCars.includes(itemId)) {
            // Agar like qilingan bo'lsa, undan olib tashlash
            updatedLikes = updatedLikes.filter((id) => id !== itemId);
        } else {
            // Agar hali like qilinmagan bo'lsa, qo'shish
            updatedLikes.push(itemId);
        }
        setLikedCars(updatedLikes);
        localStorage.setItem("likedCars", JSON.stringify(updatedLikes));
    };

    return (
        <>
            <div className="w-full grid grid-cols-3 gap-5 p-8">
                {cardData.map((item) =>
                    item.about?.map((aboutItem) => {
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
                                    <img className="w-[250px] pt-4" src={aboutItem.img} alt="carFoto" />
                                </div>
                                <div className="text-center w-full flex justify-between pt-5">
                                    <p className="text-sm text-[#7bbad1] flex items-center gap-1">
                                        <LocalGasStationIcon /> {aboutItem.gasoline}L
                                    </p>
                                    <p className="text-sm text-[#7bbad1] flex items-center gap-1">
                                        <PanoramaFishEyeIcon /> Manual
                                    </p>
                                    <p className="text-sm text-[#7bbad1] flex items-center gap-1">
                                        <GroupIcon /> {aboutItem.capacity} people
                                    </p>
                                </div>
                                <div className="w-full flex justify-between items-center pt-5 mt-auto">
                                    <h1 className="text-lg font-semibold">
                                        ${aboutItem.price} <span className="text-[#7bbad1]">/day</span>
                                    </h1>
                                    <NavLink to={`/cardRent/${item.id}`}>
                                        <BtnSM text={"Rent Now"} btn_bg={"#3563E9"} />
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            <div className="w-full flex justify-center">
                <BtnSM btn_bg={'#3563E9'} text={'Show More Car'} />
            </div>
        </>
    );
};

export default CardCopy;
