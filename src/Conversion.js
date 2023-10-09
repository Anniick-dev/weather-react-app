import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  let temperature = unit === "celsius" ? props.celsius : (props.celsius * 9) / 5 + 32;

  return (
    <div className="Conversion">
      <span className="tempElement" id="temperature">
        {Math.round(temperature)}
      </span>
      <span className="units">
        <a href="/" onClick={showCelsius}>
          C 
        </a>{" "}
         | {" "}
        <a href="/" onClick={showFahrenheit}>
           F
        </a>
      </span>
    </div>
  );
}
