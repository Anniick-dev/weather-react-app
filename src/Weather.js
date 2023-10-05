import React from "react";
import axios from "axios";

export default function Weather (props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}&degC`);

    let apiKey = "f97e6oa7271ce6b46a866b531489t0f6";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather/daily?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiURL).then(handleResponse);
    return <h2>Hello from Weather in New York</h2>
    }
}
