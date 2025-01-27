import React, { useEffect, useState } from 'react'
import Card from '../../components/cards/CardComp';
import axios from '../../components/service/Api';

const LikePage = () => {
    const [like, setLike] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () =>{
            try{
                const res = await axios.get('/cars')
                setData(res.data)
            }catch(error){
                console.log('error:', error)
            }
        }
        const getLikes = () => {
            try {
                const likedCars = JSON.parse(localStorage.getItem('likedCars')) || []
                setLike(likedCars)
            } catch (error) {
                console.log(error)
                alert("Failed to load liked cars");
            }
        }
        // getLikes()
        // getData()
    }, [])
      
    return (
        <div className='w-full grid grid-cols-4 gap-10'>
            {like.length > 0 ? (
                like.map((item) => (
                    <Card item={item} about={item.about || "No description"} key={item.id} setData={setData} />
                ))
            ) : (
                <div className='flex w-full h-[50vh] justify-center items-center'>
                    <p>No liked cars yet...</p>
                </div>
            )}
        </div>
    )
}

export default LikePage
//   <Card item={item} about={item.about} key={item.id} setData={setData} />

// import React, { useEffect, useState } from 'react'
// import Card from '../../components/cards/CardComp';
// import axios from '../../components/service/Api';

// const LikePage = () => {
//     const [like, setLike] = useState([]);  // liked cars
//     const [data, setData] = useState([]);  // All car data

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const res = await axios.get('/cars');  // Fetch all cars data
//                 setData(res.data);
//             } catch (error) {
//                 console.log('error:', error);
//             }
//         };

//         const getLikes = () => {
//             try {
//                 const likedCars = JSON.parse(localStorage.getItem('likedCars')) || [];
//                 setLike(likedCars);  // Set liked cars
//             } catch (error) {
//                 console.log(error);
//                 alert("Failed to load liked cars");
//             }
//         };

//         getLikes();
//         getData();
//     }, []);

//     return (
//         <div className='grid grid-cols-4 gap-10'>
//             {like.length > 0 ? (
//                 like.map((likedItem) => {
//                     // Find the matching item from 'data' based on id
//                     const matchedItem = data.find((item) => item.id === likedItem.id);

//                     // If there's a match, pass the data to the Card component
//                     return matchedItem ? (
//                         <Card 
//                             key={likedItem.id} 
//                             item={matchedItem} 
//                             about={matchedItem.about || "No description"} 
//                             setData={setData} 
//                         />
//                     ) : null;  // If no match found, don't render the card
//                 })
//             ) : (
//                 <p>No liked cars</p>
//             )}
//         </div>
//     );
// };

// export default LikePage;
