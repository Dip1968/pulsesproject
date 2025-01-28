import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import SYPopup from "../../controls/popup";
import { useState } from "react";
import arrow from "../../assets/images/arrow.png";
import whitearrow from "../../assets/images/arrow-white.png";
import careerimg from "../../assets/images/career.png";
import "./career.scss";

import contactusbanner from "../../assets/images/banner/career-banner.jpg";
import fastforward from "../../assets/images/animated-icons/fast-forward.gif";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import { careers } from "./careers";
import { Helmet } from "react-helmet";

function Career() {
  const [GargiStory, setShow] = useState(false);
  const [BhumiStory, setShow3] = useState(false);
  const [DilipStory, setShow4] = useState(false);
  const [SivaStory, setShow5] = useState(false);
  const [AdityaStory, setShow7] = useState(false);
  const [JayantStory, setShow6] = useState(false);
  const [NensiStory, setShow8] = useState(false);

  const breadcrumbItems = [{ label: "Home", link: "/" }, { label: "Career" }];
  return (
    <Container fluid className="px-0">
      <div className="career">
        <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                  <h1>Career</h1>
                  <p>
                    Join our team and make a difference in the world by
                    contributing to a sustainable future through innovative and
                    environmentally responsible solutions in agriculture. Our
                    organization is dedicated to improving agricultural
                    practices and finding new ways to support the industry while
                    minimizing its impact on the environment.
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img
                    src={contactusbanner}
                    alt="Contactus"
                    title="Contactus"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className="module">
            <CustomBreadcrumb items={breadcrumbItems} />
            {/* <Row>
              <h3>Join Our Team</h3>
              {careers.map((career, index) => {
                return (
                  <Col xs={12} md={6} key={index}>
                    <Link to={`./${career.id}`}>
                      <div className="Job-col">
                        <div className="job-logo">
                          <img src={career.img} alt=".net" title=".net" />
                        </div>
                        <div className="job-position">
                          {career.jobPosition}{" "}
                        </div>
                        <div className="job-exp">
                          Exp.: {career.experience} | Positions:{" "}
                          {career.positions}
                        </div>
                        <div className="arrow">
                          <Link to={`./${career.id}`}>
                            <img
                              src={arrow}
                              alt="arrow"
                              title="arrow"
                              className="black-arrow"
                            />{" "}
                            <img
                              src={whitearrow}
                              alt="arrow"
                              title="arrow"
                              className="white-arrow"
                            />{" "}
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })}
            </Row> */}
            <Row>
              <Col xs={12}>
                <div className="career-details">
                  <div className="career-img">
                    <img src={careerimg} alt="career" />
                  </div>
                  <p>
                    Discover exciting career opportunities and take the first
                    step towards joining our team by applying at{" "}
                    <Link to="mailto:reliancepulses@gmail.com">
                      {" "}
                      reliancepulses@gmail.com
                    </Link>{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default Career;
