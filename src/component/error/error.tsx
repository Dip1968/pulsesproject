import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import errorimg from "../../assets/images/error.png";
import "./error.scss";
import { Helmet } from "react-helmet";

function Error() {
  return (
    <Container fluid className="px-0">
      <div className="error-page">
        <div className="module text-center">
          <Container>
            <Row>
              <Col md={12}>
                <img src={errorimg} alt="404" title="404" />
                <h3>404 Error</h3>
                <p>
                  We apologize, but the page you are seeking is no longer
                  available or has been moved.
                </p>
                <Button className="btn btn-knowmore" as={Link as any} to="/">
                  Go to Home
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Error;
