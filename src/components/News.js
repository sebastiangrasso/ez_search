import React, { Component } from "react";
//import { Form, Button } from "react-bootstrap";
import NewsResult from "../NewsResult"

class News extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div className="Weather">
       <NewsResult />
       </div>
        <button type="button" onClick={() => this.handleClick()}>
          Home
        </button>
      </div>
    );
  }
}

export default News;
