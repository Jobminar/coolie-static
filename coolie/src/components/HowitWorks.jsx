import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HowItworksImage from "../components/assets/Howitworks.png";
import "./styles/Howitworks.css";
const HowItWorks = () => {
  return (
    <Container className="how-it-works">
      <h2>How It Works</h2>
      <Row>
        <Col>
          <img src={HowItworksImage} alt="How It Works" />
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;
