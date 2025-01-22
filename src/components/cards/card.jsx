import React, { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cardData.map((item) => (
          item.about.map((aboutItem) => (
            <div 
              key={item.id} 
              className="bg-white p-4 rounded-lg  "
            >
              <h1 className="text-xl font-bold mb-2">{aboutItem.title}</h1>
              <p className="text-sm text-[#7bbad1] mb-2">{aboutItem.type}</p>
              <div className="w-full flex justify-center">  
              <img src={aboutItem.img} alt="carFoto" />
              </div>
              <div className="text-center flex justify-center gap-4">
              <p className="text-sm text-[#7bbad1]">{aboutItem.gasoline}L</p>
              <p className="text-sm text-[#7bbad1]">{aboutItem.capacity} people</p>
              </div>
              <h1 className="text-lg font-semibold  mt-2">${aboutItem.price} /day</h1>
            </div>
          ))
        ))}
      </div>
    </header>
  );
}
export default Card;

