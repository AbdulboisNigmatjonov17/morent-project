import React, { useState, useEffect } from 'react';
import axios from '../service/Api';
import CardComp from './CardComp'

const PopularCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/cars?popular=true'); // Faqat popular = true bo'lgan ma'lumotlarni olish
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Popular Cards</h1>
            <div className='grid grid-cols-4 justify-between gap-10'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            {
                                item.about.map((about, index) => (
                                    <CardComp id={`${item.id}-${index}`} item={item} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularCards;
