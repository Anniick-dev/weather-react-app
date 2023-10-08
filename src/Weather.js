import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature,
      humidity: response.data.temperature.humidity,
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

  if (weatherData.ready) {
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
            </div>
            <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
      </div>
);
} else {
    search();
return "Loading...";
} }