import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    search();
  }, []);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "f97e6oa7271ce6b46a866b531489t0f6";
    let apiURL=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData === null) {
    return "Loading...";
  }

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-2">
            <label className="switch">
              <input type="checkbox" className="switch-control-input" />
              <span className="slider round"></span>
            </label>
            <div className="switch-text">Celsius --- Fahrenheit</div>
          </div>
          <div className="col-8 m-0">
            <form className="search-button" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search for your city"
                  className="city-input"
                  id="city-input"
                  onChange={handleCityChange}
                  autoComplete="on"
                  autoFocus="on"
                />
              </div>
            </form>
          </div>
          <div className="col-2">
            <span className="date" id="date">
              {weatherData.date}
            </span>
          </div>
        </div>
      </div>

      {weatherData.ready && (
        <>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </>
      )}

<div className="row myRow">
    <div className="col-5 todayDetails">
        <p className="cityName" id="city">{props.defaultCity}</p>
        <div className="temperature-icon">
            <span className="tempElement" id="temperature">{weatherData.temperature}&deg;C</span>
            <span className="temperatureUnits">C</span>
        </div>
        <small>
            Humidity: <span className="hum" id="hum">80</span>%
            <br />
            Wind: <span className="wind" id="wind">7 </span>
            <span className="windUnit">km/h</span>
        </small>
    </div>
    <div className="col-6">
        <h5 className="popup" id="description">Today's weather is warm
        </h5>
    </div>
</div>
<div className="row g-0 col-12 weather-forecast" id="forecast">

               
                <div className="col d-flex justify-content-center">
                <button className="bubbles">
                <span className="emoji">☀️</span>

                <span className="forecastTemperature">
                    <span id="minTemp">8 | </span>
                    <span id="maxTemp">18</span>
                    </span>

                </button>        
                </div>
                </div>
                </div>
               
);
}
    