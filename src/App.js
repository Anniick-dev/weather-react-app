import React from "react";
import './App.css';
import './Weather.css';
import Weather from "./Weather";

export default function App() {
    
  return (
    <div className="App">
     <div className="container">

     <Weather defaultCity="New York" />

        <footer className="github">
            <a href="github.com/Anniick-dev/weather-react-app" target="_blank"> Open-source code </a> by Annick
        </footer>
        </div>
        </div>
  );}