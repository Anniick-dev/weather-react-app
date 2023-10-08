import React from "react";

export default function FormattedDate(props) {
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let dayIndex = props.date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let date = props.date.getDate();

  let monthIndex = props.date.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div className="dateIsFormatted">
      {days[dayIndex]} {months[monthIndex]} {date} | {hours}:{minutes}
    </div>
  ); }