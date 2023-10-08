import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props) {

    return (
        <div className="WeatherInfo">
        <div className="row myRow">
            <div className="col-5 todayDetails">
                <p className="cityName" id="city">{props.data.city}</p>
                <div className="temperature-icon">
                    <img src={props.data.icon} className="main-image" alt={props.data.description} id="icon" />
                    <span className="tempElement" id="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="temperatureUnits">C</span>
                </div>
                <small>
                    Humidity: <span className="hum" id="hum"> {props.data.humidity}</span>
                    <span className="windUnit">%</span>

                    <br />
                    Wind: <span className="wind" id="wind"> {props.data.wind} </span>
                    <span className="windUnit">km/h</span>
                </small>
            </div>
            <div className="col-6">
                <h5 className="popup" id="description">{props.data.description}
                </h5>
            </div>
            </div>
            </div>
    )
}