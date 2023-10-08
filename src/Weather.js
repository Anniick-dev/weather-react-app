
import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: "it's very warm today",
      icon: response.data.weather.icon,
      date: new Date (response.data.dt * 1000),
    })

    setReady(true);
  }

  if (ready) {
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
                    <form className="search-button">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search for your city"
                                className="city-input"
                                id="city-input"
                                autocomplete="on"
                                autofocus="on"/>
                            </div>
                    </form>
                
                <div className="col-2">
                    <span className="date" id="date"> 

                    <FormattedDate />
                    
                    </span>
                </div>

            </div>

        </div>

        <div className="row myRow">
            <div className="col-5 todayDetails">
                <p className="cityName" id="city">{weatherData.city}</p>
                <div className="temperature-icon">
                    <img src={weatherData.icon} className="main-image" alt={weatherData.description} id="icon" />
                    <span className="tempElement" id="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="temperatureUnits">C</span>
                </div>
                <small>
                    Humidity: <span className="hum" id="hum"> {weatherData.humidity}</span>
                    <span className="windUnit">%</span>

                    <br />
                    Wind: <span className="wind" id="wind"> {weatherData.wind} </span>
                    <span className="windUnit">km/h</span>
                </small>
            </div>
            <div className="col-6">
                <h5 className="popup" id="description">{weatherData.description}
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
    )
} else {

  let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
  let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse);

  return ("Loading...")
}
}