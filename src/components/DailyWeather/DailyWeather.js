import React from "react";
import "./DailyWeather.css";

const DailyWeather = (props) => {
  return (
    <>
      {console.log(props.list)}
      <div className="single-day">
        <p className="date">{props.list[props.day].dt_txt.substring(0, 10)}</p>
        {Math.round(props.list[props.day].main.temp)} degrees{" "}
        {props.list[props.day].weather[0].description}
      </div>
    </>
  );
};

export default DailyWeather;
