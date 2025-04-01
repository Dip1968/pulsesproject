import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import thankyouimg from "../../assets/images/thankyou.png";
import "./thank-you.scss";
import { Helmet } from "react-helmet";

function Thankyou() {
  return (
    <Container fluid className="px-0">
      <div className="error-page">
        <div className="module text-center">
          <Container>
            <Row>
              <Col md={12}>
                <img src={thankyouimg} alt="Thank-you" title="Thank-you" />
                <h3>Thank You For Contacting Us</h3>
                <p className="mb-0">
                  Our specialists will take a close look at your case and will
                  reach out soon to set up a non-binding call with the relevant
                  experts.
                </p>
                <p>We usually reply within an hour on business days.</p>
                <p>
                  If needed, we’re happy to sign a Non-Disclosure Agreement
                  (NDA) before the call.
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

export default Thankyou;
