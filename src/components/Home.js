import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";​



const divStyle = {
  marginLeft: "20px",
  marginRight: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
​
const Home = () => {
  const history = useHistory();
  const handleClick = () => history.push("/weather");
  const handleClick2 = () => history.push("/sports");
  const handleClick3 = () => history.push("/ask");
  const handleClick4 = () => history.push("/news");
​
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
        <Col xs lg="12">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            What are you looking for?
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
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
            type="button"
            style={divStyle}
            onClick={handleClick}
          >
            Weather
          </Button>{" "}
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ marginTop: 35 }}>
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
            type="button"
            style={divStyle}
            onClick={handleClick3}
          >
            Search
          </Button>
​
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ marginTop: 35 }}>
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
          type="button"
          style={divStyle}
          onClick={handleClick4}
        >
          News
        </Button>
        </Col>
      </Row>
    </Container>
  );
};
​
export default Home;
