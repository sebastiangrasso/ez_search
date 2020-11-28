import React from 'react';
import DayCard from './DayCard'

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const weatherURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=4e2f926c98f19cc625c4f96afef5a53c'

    console.log(weatherURL)


    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
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
      <h5 className="display-5 text-muted">New York, US</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer;
