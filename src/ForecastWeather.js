import React from "react";
import './App.css';
import axios from "axios";

export default function ForecastWeather (){

    function handleResponse(response){
    console.log(response.data);
    }

    let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
    let lat = 40.7;
    let lon = 74;
    let apiURL =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiURL).then(handleResponse);

    return (
    <div className="ForecastWeather">
    <div className="row g-0 col-12 m-0 weather-forecast" id="forecast">

<div className="col d-flex justify-content-center">
    <div className="row">
        <button className="bubbles">
        <span className="emoji">☀️</span>
          <span className="forecastTemperature">
            <span className="minTemp" id="minTemp">9 </span> |
            <span className="maxTemp" id="maxTemp"> 20</span>
          </span>
        </button>
        <span className="dayWeek">Monday | <span clclassNameass="dateWeek"> December 9</span></span>
      </div>
      </div>


                
                    </div>
                    </div>

    );
}