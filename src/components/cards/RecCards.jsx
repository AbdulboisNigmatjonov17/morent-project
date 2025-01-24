import React, { useState, useEffect } from 'react';
import axios from '../service/Api';
import CardComp from './CardComp'
import BtnAll from '../btns/btnAll';

const RecCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/cars?recomended=true');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <div id='cards'>
            <div className='w-full flex justify-between px-5 my-5'>
                <h1 className='text-[20px] font-semibold'>Recomended Cards</h1>
                <BtnAll />
            </div>
            <div className='grid grid-cols-4 justify-between gap-10'>
                {
                    data.map((item) => (
                        <div key={item.id}>
                            {
                                item.about.map((about) => (
                                    <CardComp setData={setData} id={`${item.id}-${about}`} item={item} about={about} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecCards;
