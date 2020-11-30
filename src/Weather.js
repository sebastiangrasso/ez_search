import React, { Component } from 'react'
//import ReactDOM from 'react-dom';
//import './weather.css';
import WeekContainer from './WeekContainer';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <WeekContainer />
      </div>
    );
  }
}

export default Weather;
