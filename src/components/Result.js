import React from 'react';

import sun from '../icons/icons8-sun-64.png'
import clock from '../icons/icons8-clock-40.png'
import temper from '../icons/icons8-temperature-48.png'
import pressures from '../icons/icons8-pressure-40.png'
import winds from '../icons/icons8-wind-64.png'
import sunrises from '../icons/icons8-sunrise-49.png'
import sunsets from '../icons/icons8-sunset-49.png'

const Result = (props) => {
    const {err, city, value, date, sunrise, sunset, temp, pressure, wind} = props.weather
    let content = null;
    if(!err && city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div className="weather-result">
                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Pogoda dla miasta: {city} 
                    </div> 
                    <img className="col-md-1 col-sm-2" src={sun} alt="" />
                </div>

                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Data: {date} 
                    </div> 
                    <img className="col-md-1 col-sm-2" src={clock} alt="" />
                </div>

                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Tempertura: {temp} &#176;C 
                    </div> 
                    <img className="col-md-1 col-sm-2" src={temper} alt="" />
                </div>

                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Ciśnienie: {pressure} hPa 
                    </div> 
                    <img className="col-md-1 col-sm-2" src={pressures} alt="" />
                </div>

                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Siła wiatru: {wind} m/s
                    </div>  
                    <img className="col-md-1 col-sm-2" src={winds} alt="" />
                </div>

                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Wschód słońca: {sunriseTime} 
                    </div> 
                    <img className="col-md-1 col-sm-2" src={sunrises} alt="" />
                </div>

                <div className="col-12 weather-result__wrapper">
                    <div className="col-8 weather-result__text">
                        Zachód słońca: {sunsetTime} 
                    </div> 
                    <img className="col-md-1 col-sm-2" src={sunsets} alt="" />
                </div>

            </div>
        )
    }
    return ( 
        <div className="result">
            {err ? `Nie ma w bazie takiego ${city}` : content }
        </div>
     );
}
 
export default Result;