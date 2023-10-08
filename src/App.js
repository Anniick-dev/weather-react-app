import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Hello from Weather in New York</h2><div className="container">
        <div className="card">
            <div className="row">
                <div className="col-2">
                    <label className="switch">
                        <input type="checkbox" className="switch-control-input"/>
                            <span className="slider round"></span>
                        </label>
                    <div className="switch-text">Celsius --- Fahrenheit</div>
                </div>
                <div className="col-6 m-0">
                    <div className="search-button">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search for your city"
                                className="city-input"
                                id="city-input"
                                autocomplete="on"
                                autofocus="on"/>
                            </div>
                    </div>
                <div className="col-1 m-0">
                    <button
                        type="submit"
                        id="city-search"
                        value="search"
                        className="vergrootglas">
                        <i className="fa fa-search"></i>🔍</button>
                    <button
                        type="button"
                        id="current-position"
                        value="search"
                        className="pindrop">
                        <i className="fa fa-search"></i>📍</button>
                </div>
                <div className="col-1">
                    <span className="date" id="date">  </span>
                </div>

            </div>

        </div>

        <div className="row myRow">
            <div className="col-5 todayDetails">
                <p className="cityName" id="city"></p>
                <div className="temperature-icon">
                    <img src="" className="main-image" alt="Clear" id="icon" />
                    <span className="tempElement" id="temperature"></span>
                    <span className="temperatureUnits">&degC</span>
                </div>
                <small>
                    Humidity: <span className="hum" id="hum"></span>%
                    <br />
                    Wind: <span className="wind" id="wind"></span>
                    <span className="windUnit">km/h</span>
                </small>
            </div>
            <div className="col-6">
                <h5 className="popup" id="description">
                </h5>
            </div>
        </div>
    </div><div className="weather-forecast" id="forecast">
        </div><footer className="github">
            <a href="https://github.com/Anniick-dev/Weather-App-Plus"> Open-source code </a> by Annick
        </footer>
        </div>
        </div>
  );}

export default App;