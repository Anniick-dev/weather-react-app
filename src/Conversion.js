import React, { useState }from "react";

export default function Conversion(props){
    let [unit, setUnit] = useState("celsius");
    if (unit===`celsius`) {
    return (
        <div className="Conversion">
        <span className="tempElement" id="temperature">{Math.round(props.celsius)}</span>
        <span className="units">C </span>
        </div>

    );
} else {
    return "F"
}
}