import React , { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

export default function ForecastWeather (props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState([]);

    useEffect(() => {
        let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiURL =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      
        axios.get(apiURL).then((response) => {
            setForecast(response.data.daily.slice(0, 5));
            setLoaded(true);
          });
        }, [props.coordinates]);
            
            if (loaded) {
                return (
                  <div className="ForecastWeather">
                    <div className="row g-0 col-12 m-0 weather-forecast" id="forecast">
                      {forecast.map((dayData, index) => (
                        <div key={index} className="col d-flex justify-content-center">
                          <div className="row">
                            <button className="bubbles">
                            <img src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`} alt="Weather Icon" />
                              <span className="forecastTemperature">
                                <span className="minTemp" id="minTemp">
                                  {Math.round(dayData.temp.min)} 
                                </span>{" "}
                                 | 
                                <span className="maxTemp" id="maxTemp">
                       {Math.round(dayData.temp.max)}
                    </span>
                  </span>
                </button>
                <span className="dayWeek">
                  {new Date(dayData.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}{" "} | {" "}
                  <span className="dateWeek">
                    {new Date(dayData.dt * 1000).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return "Loading forecast";
  }
}