import React, { Component } from 'react'

import './WeatherResult.css'

import GiphyImage from './GiphyImage'

class WeatherResult extends Component {
  render() {
    return (
      <div className="WeatherResults">
        {this.props.results.map(image => <GiphyImage key={image.id} image={image} />)}
      </div>
    )
  }
}

export default WeatherResult
