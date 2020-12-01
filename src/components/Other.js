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

class Other extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <h1>Search for something else?</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Search by category:
                <input type="text" name="name" />
              </label>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
          <Col style={divStyle}>
            <Form>
              <label>
                Search by keyword:
                <input type="text" name="name" />
              </label>
            </Form>
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

export default Other;
