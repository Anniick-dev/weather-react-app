
import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import ForecastWeather from "./ForecastWeather";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      description:`Today, it's ${response.data.weather[0].description} in ${city}. Make sure to make it a good!`,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date (response.data.dt * 1000),
      coordinates: response.data.coord,
    })

    setReady(true);
  }

  function search() {
    let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
    search(city);
  }

  function handleCityChange(event){
    setCity(event.target.value);
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
                    <form className="search-button" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search for your city"
                                className="city-input"
                                id="city-input"
                                autocomplete="on"
                                autofocus="on"
                                onChange={handleCityChange} />
                            </div>
                    </form>
                
                <div className="col-2">
                    <span className="date" id="date"> 

                    <FormattedDate date={weatherData.date}/>
                    
                    </span>
                </div>

            </div>

        </div>

        <WeatherInfo data={weatherData} />

        <ForecastWeather coordinates={weatherData.coordinates}/>

    </div>
        </div>
    )
} else {
    search();
  return ("Loading...")
}
}