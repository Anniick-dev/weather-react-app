
import React from "react";
import axios from "axios";

export default function Weather () {
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
                    <span className="date" id="date"> october 8 </span>
                </div>

            </div>

        </div>

        <div className="row myRow">
            <div className="col-5 todayDetails">
                <p className="cityName" id="city">Amsterdam</p>
                <div className="temperature-icon">
                    <img src="" className="main-image" alt="Clear" id="icon" />
                    <span className="tempElement" id="temperature">20</span>
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
    )
}