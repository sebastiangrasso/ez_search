import React, { Component } from "react";
import SearchResult from "./SearchResult"

class NewsResult extends React.Component {
  constructor(props){
    super(props)
    console.log("in condition")
    console.log(props)
    this.state = {
          topic: "Donald Trump Loses",
    }
  }
  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="News Results">
       <SearchResult query = {this.state.topic} />
      </div>    );
  }

}

export default NewsResult;
