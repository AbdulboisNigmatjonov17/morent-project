import React, { useState, useEffect } from "react";
import axios from "axios";

const CarDetails = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cars");
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  const updateStar = (id, newStar) => {
    const updatedCars = cars.map((car) =>
      car.id === id
        ? {
            ...car,
            details: car.details.map((detail) => ({
              ...detail,
              star: newStar,
            })),
          }
        : car
    );
    setCars(updatedCars);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", padding: "1rem" }}>
      {cars.map((car) => (
        <div key={car.id} style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
          <img
            src={car.details[0].img}
            alt={car.details[0].description}
            style={{ width: "100%", height: "12rem", objectFit: "cover", borderRadius: "6px" }}
          />
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginTop: "0.5rem" }}>{car.about[0].title}</h2>
          <p style={{ marginTop: "0.5rem", color: "#555" }}>{car.details[0].description}</p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>Star: </strong>
            {car.details[0].star} ⭐
          </p>
          <p>
            <strong>Reviewers: </strong>
            {car.details[0].reviewer}
          </p>
          <button
            onClick={() => updateStar(car.id, car.details[0].star + 1)}
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Increase Star
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarDetails;
