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
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
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
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
        <div className="container">
            <div className="card">
            <div className="row">
                <div className="col-2">
                    <label className="switch">
                        <input type="checkbox" className="switch-control-input"/>
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
                                autocomplete="on"
                                autofocus="on"/>
                            </div>
                    </form>
                
                <div className="col-2">
                    <span className="date" id="date"> october 8 </span>
                </div>

                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />

            </div>

        </div>

        <div className="row myRow">
            <div className="col-5 todayDetails">
                <p className="cityName" id="city">Amsterdam</p>
                <div className="temperature-icon">
                    <img src="" className="main-image" alt="Clear" id="icon" />
                    <span className="tempElement" id="temperature">temperature</span>
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

                    <div className="col d-flex justify-content-center">
                        <button className="bubbles">
                        <span className="emoji">☀️</span>

                        <span className="forecastTemperature">
                            <span id="minTemp">8 | </span>
                            <span id="maxTemp">18</span>
                            </span>

                        </button>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <button className="bubbles">
                        <span className="emoji">☀️</span>

                        <span className="forecastTemperature">
                            <span id="minTemp">8 | </span>
                            <span id="maxTemp">18</span>
                            </span>

                        </button>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <button className="bubbles">
                        <span className="emoji">☀️</span>

                        <span className="forecastTemperature">
                            <span id="minTemp">8 | </span>
                            <span id="maxTemp">18</span>
                            </span>

                        </button>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <button className="bubbles">
                        <span className="emoji">☀️</span>

                        <span className="forecastTemperature">
                            <span id="minTemp">8 | </span>
                            <span id="maxTemp">18</span>
                            </span>

                        </button>
                    </div>

                    <div className="col d-flex justify-content-center">
                        <button className="bubbles">
                        <span className="emoji">☀️</span>

                        <span className="forecastTemperature">
                            <span id="minTemp">8 | </span>
                            <span id="maxTemp">18</span>
                            </span>

                        </button>
                    </div>

                    
    </div><div className="weather-forecast" id="forecast">
        </div>
        </div>
        </div>
    );
} else {
    search();
    return "Loading...";
  }
}