import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';


// Klucz do api
const APIKey = '0b256c8b6afb7986cf3ac24aaa40b4b5';

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = (e) =>{
    this.setState({
      value: e.target.value,
    })
  }

  handleCitySubmit = (e) =>{
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(result => {
      const time = new Date().toLocaleString()
      this.setState(prevState =>({
        err: false,
        date: time,
        city: prevState.value,
        sunrise: result.sys.sunrise,
        sunset: result.sys.sunset,
        temp: result.main.temp,
        pressure: result.main.pressure,
        wind: result.wind.speed,
      }))
    })
    .catch(err => {
      console.log(err)
      this.setState(prevState =>({
        err:true,
        city: prevState.value,
      }))
    })

  }

  render() {
    return (
    <div className="App container">
      <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}  
      />
      <Result weather={this.state}/>
    </div>
    );
  }
}

export default App;
