import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const divStyle = {
  marginLeft: "10px",
  marginRight: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Directions extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <h1>Looking for directions?</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Street Address:
                <input type="text" name="name" />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                City:
                <input type="text" name="name" />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                State:
                <input type="text" name="name" />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Directions;
