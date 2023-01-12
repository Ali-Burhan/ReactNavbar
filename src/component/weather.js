import React, { Component } from 'react';
import axios from 'axios';
import Animation from "../animation/Animation.js"
class Weather extends Component {
  state = {
    temperature: '',
    weather: '',
    location: '',
    error: null
  }

  getWeather = async (location) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=25324049616cf90e3ed8d019a745dce1`);
      this.setState({
        temperature: response.data.main.temp,
        weather: response.data.weather[0].main,
        location: response.data.name,
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    return (
        <>
        <h1 className='text-center text-3xl mt-6'><Animation text="Weather Fetching API from openweathermap with Axios"/></h1>
      <div className='grid md:grid-cols-2'>
        <div className='text-center my-16'>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.getWeather(this.state.location);
          }}
        >
          <input
            type="text"
            placeholder="Enter a location"
            className='p-1 bg-slate-300 w-80 text-2xl my-3 rounded-md'
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
          <button className='p-1 rounded-md mx-2 text-white text-2xl bg-teal-400'>Get Weather</button>
        </form>
        </div>
        <div className='text-left my-16'>
        {this.state.temperature && (
          <div>
            <p className='text-3xl'>Temperature: {this.state.temperature}°F</p>
            <p className='text-3xl'>Weather: {this.state.weather}</p>
            <p className='text-3xl'>Location: {this.state.location}</p>
          </div>
        )}
        {this.state.error && <p>{this.state.error.message}</p>}
        </div>
      </div>
      </>
    );
  }
}

export default Weather;
