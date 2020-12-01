import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class News extends Component {
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return (
      <Form>
        <h1>News</h1>
        <Button variant="primary" size="lg" onClick={() => this.handleClick()}>
          Home
        </Button>
      </Form>
    );
  }
}

export default News;
