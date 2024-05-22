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
          <Col md={12} className="text-left">
            <h2>Coolie No1 covered you</h2>
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
                  style={{ width: "40px", height: "40px" }}
                />
                <h3>Explore Top services</h3>
              </div>
              <p>
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
                  style={{ width: "40px", height: "40px" }}
                />
                <h3>Fast and Flexible</h3>
              </div>
              <p>
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
                  style={{ width: "34px", height: "40px" }}
                />
                <h3>Support when you need it</h3>
              </div>
              <p>
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
