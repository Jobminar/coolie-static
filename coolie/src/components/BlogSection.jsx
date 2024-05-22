import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BlogSection = () => {
  return (
    <Container className="blog-section">
      <h2>Latest from our Blog</h2>
      <Row>
        {/* Repeat this Col for each blog post */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="blog-post1.jpg" />
            <Card.Body>
              <Card.Title>Blog Post 1</Card.Title>
              <Card.Text>Snippet of Blog Post 1</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSection;
