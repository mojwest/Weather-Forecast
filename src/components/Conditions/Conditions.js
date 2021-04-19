import React from "react";
import DailyWeather from "../DailyWeather/DailyWeather";
import "./Conditions.css";

const conditions = (props) => {
  const weatherList = props.responseObj.list;
  return (
    <div>
      {props.responseObj.cod === "200" ? (
        <div>
          {
            <div className="city">
              {props.responseObj.city.name} Five Day Forecast
            </div>
          }
          {
            <div className="container">
              <DailyWeather day={0} list={weatherList} />
              <DailyWeather day={8} list={weatherList} />
              <DailyWeather day={16} list={weatherList} />
              <DailyWeather day={24} list={weatherList} />
              <DailyWeather day={32} list={weatherList} />
            </div>
          }
        </div>
      ) : null}
    </div>
  );
};

export default conditions;
