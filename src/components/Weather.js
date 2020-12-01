import React, { Component } from "react";
import WeekContainer from '../WeekContainer';

class Weather extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div className="Weather">
       <WeekContainer />
       </div>
        <button type="button" onClick={() => this.handleClick()}>
          Home
        </button>
      </div>
    );
  }
}

export default Weather;
