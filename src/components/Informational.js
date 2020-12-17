import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SearchResult from "../SearchResult";

const divStyle = {
  marginLeft: "10px",
  marginRight: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
class Condition1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("in condition");
    console.log(props);
    this.state = {
      query: this.props.query,
    };
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="SearchResults">
        <SearchResult query={this.props.query} />
      </div>
    );
  }
}

class Condition2 extends React.Component {
  render() {
    return <div>No Search Results</div>;
  }
}

class Informational extends Component {
  constructor(props) {
    super(props);
    this.state = { prod: "", brand: "", price: "", condition: false };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
    //console.log(this.props)
    this.setState({ condition: true });
    //console.log(this.state.condition)
  }

  handleInput(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.setState({ condition: false });
  }

  orderquery() {
    let q = `${this.state.brand} ${this.state.prod} $${this.state.price}`;
    console.log(q);
    return q;
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <h1>Looking for information?</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Topic:
                <input type="text" name="prod" onChange={this.handleInput} />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form style={divStyle}>
              <label>
                Category:
                <input type="text" name="brand" onChange={this.handleInput} />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form>
              <label style={divStyle}>
                Other:
                <input type="text" name="price" onChange={this.handleInput} />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Button
              variant="primary"
              size="lg"
              type="button"
              onClick={() => this.handleClick()}
            >
              Search
            </Button>
          </Col>
        </Row>
        <div>
          {this.state.condition === true ? (
            <Condition1 query={this.orderquery()} />
          ) : (
            <Condition2 />
          )}
        </div>
      </Container>
    );
  }
}

export default Informational;
