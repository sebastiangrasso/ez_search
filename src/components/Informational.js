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

class Informational extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <h1>Looking for information?</h1>
          </Col>
        </Row>

        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Button>Search</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Informational;
