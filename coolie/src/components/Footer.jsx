import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { FiPhone, FiMail } from "react-icons/fi";
import mailIcon from "./assets/Mail.png";
import coolieLogo from "./assets/coolie-logo.png";
import "./styles/Footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your email subscription logic here
    console.log("Subscribed with email:", email);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location.pathname]); // Listen for changes in pathname

  return (
    <footer className="footer mt-auto">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={coolieLogo} alt="Coolie Logo" />
          </div>
          {/* <Form onSubmit={handleSubmit} className="subscribe-form">
            <InputGroup className="subscribe-input">
              <InputGroup.Text>
                <img src={mailIcon} alt="Mail Icon" />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder=" Please enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="primary" type="submit">
                SUBSCRIBE
              </Button>
            </InputGroup>
          </Form> */}
        </div>
        <div className="footer-top">
          <div className="footer-section">
            <h5>COMPANY</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/aboutpage">About Us</Link>
              </li>
              {/* <li>
                <a href="#reviews">Reviews</a>
              </li> */}
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>OUR SERVICES</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/servicebook">Services</Link>
              </li>
              {/* <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-section">
            <h5>TERMS & POLICIES</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>CONTACT</h5>
            <p>
              <FiPhone /> Phone: +91 9959668703
            </p>
            <p>
              <FiMail /> Email: thecoolieinfo@gmail.com
            </p>
            <p>
              Address: 18-5-294/A, <br />
              Sapthagiri Nagar, Kapilateertham Road,
              <br />
              Tirupati (Urban), Chittoor- 517501, Andhra Pradesh
            </p>
          </div>
        </div>
        <Row className="copyright">
          <Col>
            <p>&copy; 2024 coolieno1.com. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
