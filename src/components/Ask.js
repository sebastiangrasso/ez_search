import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const divStyle = {
  marginLeft: "10px",
  marginRight: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Ask extends Component {
  handleClick() {
    this.props.history.push("/transactional");
  }
  handleClick2() {
    this.props.history.push("/informational");
  }

  handleClick3() {
    this.props.history.push("/directions");
  }
  handleClick4() {
    this.props.history.push("/other");
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col style={divStyle}>
            <h1>What type of search would you like to do?</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={divStyle}>
            <Button
              variant="primary"
              size="lg"
              block
              type="button"
              onClick={() => this.handleClick()}
            >
              Transactional
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={divStyle}>
            <Button
              variant="primary"
              size="lg"
              block
              type="button"
              onClick={() => this.handleClick2()}
            >
              Imformational
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={divStyle}>
            <Button
              variant="primary"
              size="lg"
              block
              type="button"
              onClick={() => this.handleClick3()}
            >
              Directions
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col style={divStyle}>
            <Button
              variant="primary"
              size="lg"
              block
              type="button"
              onClick={() => this.handleClick4()}
            >
              Other
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Ask;
