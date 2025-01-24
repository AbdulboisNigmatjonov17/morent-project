import React, { useState, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const PickUp = () => {
  const [PickData, PickCard] = useState([]);

  useEffect(() => {
    const getCard = async () => {
      try {
        const Pkcard = await axios.get("/Pick-Up");
        setCard(Pkcard.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCard();
  }, []);

  return (
    <div>
      <div>
        {PickData.map((item) => (
          <div key={item.id}>
          <h1>{item.h1}</h1>
          <img src={ExpandMoreIcon} alt="icon" />
          <p></p>
          </div>
        ))}
        <h1></h1>
      </div>
    </div>
  )
}

export default PickUp