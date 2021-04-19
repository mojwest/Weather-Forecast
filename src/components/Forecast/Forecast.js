import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import "./Forecast.css";

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});

  // API KEY AND URL (generally I would hide and gitignore the API key)
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

  const getForecast = async (e) => {
    e.preventDefault();
    const response = await fetch(apiUrl);
    const data = await response.json();
    setResponseObj(data);
  };

  return (
    <div>
      <h2>Lookup Local Weather Forecast:</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          className="textInput"
          onChange={(e) => setCity(e.target.value)}
        />
        <label className="radio">
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className="radio">
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button className="button" type="submit">
          Get Forecast
        </button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
