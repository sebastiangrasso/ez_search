import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const divStyle = {
  marginLeft: "20px",
  marginRight: "20px",
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
        <Row className="justify-content-md-center" style={{ marginTop: 40 }}>
          <Col style={divStyle}>
            <h1>What type of search would you like to do?</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 40 }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs
            lg="12"
          >
            <Button
              variant="primary"
              size="lg"
              style={divStyle}
              block
              type="button"
              onClick={() => this.handleClick()}
            >
              Transactional
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 40 }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs
            lg="12"
          >
            <Button
              variant="primary"
              size="lg"
              block
              style={divStyle}
              type="button"
              onClick={() => this.handleClick2()}
            >
              Imformational
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 40 }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs
            lg="12"
          >
            <Button
              variant="primary"
              size="lg"
              style={divStyle}
              block
              type="button"
              onClick={() => this.handleClick3()}
            >
              Directions
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 40 }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs
            lg="12"
          >
            <Button
              variant="primary"
              size="lg"
              style={divStyle}
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
