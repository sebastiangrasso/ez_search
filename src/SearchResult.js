import React, { Component } from "react";
//import { Form, Button } from "react-bootstrap";
//import WeatherResult from "../WeatherResult"
import SearchCard from "./SearchCard"

let q = "dogs"


class SearchResult extends Component {
  constructor(props) {
    super(props)
    console.log("in search")
    console.log(props)
    this.state = {
          query: this.props.query,
          results: []
    }
  }

  componentDidMount = () => {
    const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDaHnl96mDg_iT3NHzMlq7iWn9OBLKD0OQ&cx=f9a83606fabb88a5d&q=${this.state.query}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
        this.setState({
          query: q,
          results: data.items
        },
        console.log(this.state))
    })
  }

  formatResults = () => {
    return this.state.results.map((reading, index) => <SearchCard reading={reading} key={index} />)
  }


  handleClick() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
      <h1 className="display-1 jumbotron">Search Results</h1>
        <div className="row justify-content-center">
          {this.formatResults()}
        </div>
      </div>
    );
  }
}

export default SearchResult;
