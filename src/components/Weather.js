import React, { Component } from "react";

class Weather extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <button type="button" onClick={() => this.handleClick()}>
          Home
        </button>
      </div>
    );
  }
}

export default Weather;
