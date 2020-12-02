import React, { Component } from "react";
//import { Form, Button } from "react-bootstrap";
import SearchResult from "../SearchResult"

class News extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div className="Weather">
       <SearchResult />
       </div>
        <button type="button" onClick={() => this.handleClick()}>
          Home
        </button>
      </div>
    );
  }
}

export default News;
