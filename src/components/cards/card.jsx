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
      <div>
        {cardData.map((index) => (
          <div key={index.id}>
            <h1>{index.title}</h1>
            <p>{index.Sport}</p>
            <img src={index.img} alt={`Image of ${index.title}`} />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Card;

