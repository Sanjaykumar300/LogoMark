import React from "react";
import { useEffect, useState } from "react";
import "../weather.css";

function WeatherWidget() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    const handleApi = async function () {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=63cdbdf7ff1be9ed8de0b0b5b93454de&units=metric"
      );

      try {
        const data = await res.json();
        console.log(data);

        setTemp(Math.floor(data.main.temp));
      } catch (e) {
        console.log("There was a problem with the fetch operation: " + e);
      }
    };

    handleApi();
  }, []); // Added empty dependency array to prevent infinite loop

  return (
    <section className="weather-container">
      <div className="weather-content">
        <img src="/cloud-drizzle.png" alt="weather icon" />
        <h2>{temp ? temp : ""}°C</h2>
        <p>{temp ? "Bengaluru" : "Loading"}</p>
      </div>
    </section>
  );
}

export default WeatherWidget;
