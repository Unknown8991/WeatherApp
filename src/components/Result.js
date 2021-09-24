import React from 'react';

const Result = (props) => {
    const {err, city, value, date, sunrise, sunset, temp, pressure, wind} = props.weather
    let content = null;
    if(!err && city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
                <div>Pogoda dla miasta: {city}</div>
                <div>Dane dla dnia i godziny: {date}</div>
                <div>Tempertura: {temp} &#176;C</div>
                <div>Ciśnienie: {pressure} hPa</div>
                <div>Siła wiatru: {wind} m/s</div>
                <div>Wschód słońca {sunriseTime}</div>
                <div>Zachód słońca: {sunsetTime}</div>
            </div>
        )
    }
    return ( 
        <div className="result">
            {err ? `Nie ma w bazie takiego ${city}` : content }
            {/* <div>Pogoda dla miasta: {city}</div>
            <div>Tempertura: {temp}</div>
            <div>Ciśnienie: {pressure}</div>
            <div>Siła wiatru: {wind}</div>
            <div>Wschód słońca {city}</div>
            <div>Zachód słońca: {sunset}</div> */}
        </div>
     );
}
 
export default Result;