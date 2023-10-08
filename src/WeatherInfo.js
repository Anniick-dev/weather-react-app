import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="row myRow">
                        <div className="col-5 todayDetails">
                            <h1 className="cityName" id="city">{props.data.city}</h1>
                            <div className="temperature-icon">
                            <WeatherIcon code={props.data.icon} size={52} />
                            <span className="tempElement" id="temperature"></span>
                            <span className="temperatureUnits">&degC</span>
                            <WeatherTemperature celsius={props.data.temperature} />

                        </div>
                            <small>
                                Humidity: <span className="hum" id="hum"> {props.data.humidity} </span>%
                            <br/>
                            Wind: <span className="wind" id="wind">{props.data.wind}</span>
                            <span className="windUnit"> km/h</span>
                        </small> 
                        </div>
                        <div className="col-6">
                            <h5 className="popup" id="description"> {props.data.description}
                            </h5> 
                        </div>
                    </div>
       )
                    ; }