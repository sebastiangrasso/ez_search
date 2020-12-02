import React from 'react';
import DayCard from './DayCard'

//const googleKey = 'AIzaSyDaHnl96mDg_iT3NHzMlq7iWn9OBLKD0OQ'

let user_zip = '11102'
let city = 'New York'
let state = 'NY'


const getAddress = (lat, long, googleKey) => {
  const locationURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDaHnl96mDg_iT3NHzMlq7iWn9OBLKD0OQ`
  console.log (locationURL)
  fetch(locationURL)
    .then(res => res.json())
    .then(address => setZip(address))
  }


const setZip = (address) => {
  city = address.results[5].address_components[2].short_name
  state = address.results[5].address_components[4].short_name
  user_zip = address.results[5].address_components[0].short_name
}

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      console.log(lat, long)
      getAddress(lat, long)
    });

    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${user_zip}&units=imperial&APPID=4e2f926c98f19cc625c4f96afef5a53c`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div className="container">
      <h1 className="display-1 jumbotron">Weather</h1>
      <h5 className="display-5 text-muted">{city}, {state}</h5>
        <div className="row justify-content-center">
          {this.formatDayCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer;
