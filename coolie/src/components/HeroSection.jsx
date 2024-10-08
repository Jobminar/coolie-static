import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/HeroSection.css";
import fastandFlexibleIcon from "./assets/fast-flexible.png";
import ExploreTopIcon from "./assets/Explore_top_service.png";
import SupportIcon from "./assets/support-icon.png";

const HeroSection = () => {
  return (
    <div className="custom-hero-section">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 6 }} className="text-left">
            <h2>Task tigers covered you</h2>
          </Col>
        </Row>
        <Row className="custom-service-cards justify-content-center">
          <Col className="d-flex">
            <div
              className="custom-service-card"
              style={{ backgroundColor: "#FADCC0" }}
            >
              <div className="custom-service-card-header">
                <img
                  src={ExploreTopIcon}
                  alt="Explore Top services"
                  style={{ width: "60px", height: "60px" }}
                />
                <h3 style={{ fontSize: "24px" }}>Explore Top services</h3>
              </div>
              <p style={{ fontSize: "18px" }}>
                We offer a wide range of cleaning services for your home and
                appliances.
              </p>
            </div>
          </Col>
          <Col className="d-flex">
            <div
              className="custom-service-card"
              style={{ backgroundColor: "#E1F4D2" }}
            >
              <div className="custom-service-card-header">
                <img
                  src={fastandFlexibleIcon}
                  alt="Fast and Flexible"
                  style={{ width: "60px", height: "60px" }}
                />
                <h3 style={{ fontSize: "24px" }}>Fast and Flexible</h3>
              </div>
              <p style={{ fontSize: "18px" }}>
                Our team of experienced professionals can handle any job, big or
                small.
              </p>
            </div>
          </Col>
          <Col className="d-flex">
            <div
              className="custom-service-card"
              style={{ backgroundColor: "#E1E5F4" }}
            >
              <div className="custom-service-card-header">
                <img
                  src={SupportIcon}
                  alt="Support when you need it"
                  style={{ width: "50px", height: "60px" }}
                />
                <h3 style={{ fontSize: "24px" }}>Support when you need it</h3>
              </div>
              <p style={{ fontSize: "18px" }}>
                We can repair a wide range of appliances, including
                refrigerators, ovens, washers, and dryers.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
