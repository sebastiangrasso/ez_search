import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SearchResult from "../SearchResult"

class Condition1 extends React.Component {
  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="SearchResults">
       <SearchResult query = {this.props} />
      </div>    );
  }
}

class Condition2 extends React.Component {
  render() {
    return (
        <div>No Search Results</div>
    );
  }
}


const divStyle = {
  marginLeft: "10px",
  marginRight: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Transactional extends Component {

  constructor(props) {
    super(props);
    this.state = { prod: '', brand: '', price: '', condition: false};
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state)
    //console.log(this.props)
    this.setState({condition: true})
    //console.log(this.state.condition)
  }

  handleInput(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <h1>Looking to buy something?</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Product:
                <input type="text" name="prod" onChange={this.handleInput} />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Brand:
                <input type="text" name="brand" onChange={this.handleInput} />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Price Range:
                <input type="text" name="price" onChange={this.handleInput} />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <button type="button" onClick={() => this.handleClick()}>
                Search
            </button>
          </Col>
        </Row>
        <div>
            {this.state.condition === true ? <Condition1 /> : <Condition2 />}
        </div>
      </Container>

    );
  }
}

export default Transactional;
