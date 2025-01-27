import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const CarCard = ({ car, toggleLike }) => {
  return (
    <div className="card">
      <img src={car.about[0].img} alt={car.about[0].title} />
      <h2>{car.about[0].title}</h2>
      <p>{car.details[0].description}</p>
      <button onClick={() => toggleLike(car.id)} className="bg-blue-500 text-white p-2">
        {car.like ? "Liked" : "Like"}
      </button>
      <Link to={`/car/${car.id}`} className="bg-green-500 text-white p-2 ml-2">View Details</Link>
    </div>
  );
};

const CarDetail = ({ car }) => {
  return (
    <div className="car-detail">
      <img src={car.about[0].img} alt={car.about[0].title} />
      <h1>{car.about[0].title}</h1>
      <p>{car.details[0].description}</p>
      <p>Price: ${car.about[0].price}</p>
      <p>Capacity: {car.about[0].capacity} people</p>
    </div>
  );
};

const Cartext = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cars')
      .then(response => response.json())
      .then(data => setCarsData(data));
  }, []);

  const toggleLike = (id) => {
    setCarsData(prevState => prevState.map(car => 
      car.id === id ? { ...car, like: !car.like } : car
    ));
  };

  return (
    <Router>
      <div className="App">
        <h1>Popular Cars</h1>
        <div className="car-list">
          {carsData.map(car => (
            <CarCard key={car.id} car={car} toggleLike={toggleLike} />
          ))}
        </div>

        <Routes>
          <Route path="/car/:id" element={<CarDetail car={car} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Cartext;
