import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/pages.scss";
import prashant from "../../assets/images/prashant-halari.jpg";
import Vaseem from "../../assets/images/vaseem-lahori.jpg";
import Dhwanil from "../../assets/images/dhwanil-shah.jpg";
import Manish from "../../assets/images/manish-patel.jpg";
import Anita from "../../assets/images/anita-upadhyay.jpg";
import Venkat from "../../assets/images/venkat-gandhi.jpg";
import Namrata from "../../assets/images/namrata-gupta.jpg";
import ritesh from "../../assets/images/ritesh-dave.jpg";
import jayanta from "../../assets/images/jayanta-sarkar.jpg";
import leadershipteambanner from "../../assets/images/banner/Leadership-banner.jpg";
import Sumit from "../../assets/images/sumit-udani.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import { Helmet } from "react-helmet";

function leadershipTeam() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "About Synoverge", link: "/our-story" },
    { label: "Leadership Team" },
  ];
  return (
    <div className="leadership-Team">
       <Helmet> 
        <title>
        Meet Our Leadership Team | Synoverge
        </title>
        <meta name="robots" content="index,follow"/>
        <meta
          name="description"
          content="Have you yet been to our leadership team? This is an overview of the company's top industry professionals. To view their profiles, click this link."
        />
        <link rel="canonical"href="https://www.synoverge.com/leadership-team" />
      </Helmet>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>Leadership Team</h1>
                {/* <h1>Transforming Data into Intelligence</h1> */}
                <p>
                  Improve decision making through business insights with our
                  analytics roadmap
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img
                  src={leadershipteambanner}
                  alt="leadership-Team"
                  title="leadership-Team"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <CustomBreadcrumb items={breadcrumbItems} />
          <Row>
            <h3>Our Leaders</h3>
            <Col md={12}>
              <p>
                Synoverge leadership thrives on building world class technology
                solutions with focus on quality services. Trusted by clients and
                stakeholders across the globe for over a decade.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="">
          <Container>
            <Row>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={prashant} alt="prashant" title="prashant" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Prashant Halari</h5>
                      <p>CEO & Managing Director</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/prashant-halari-225442/"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Namrata} alt="Namrata" title="Namrata" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Namrata Gupta</h5>
                      <p>Co-Founder & COO</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/namrata-gupta-74673319/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={ritesh} alt="ritesh" title="ritesh" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Ritesh Dave</h5>
                      <p>Co-Founder & Director - Sales</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/riteshdave/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={jayanta} alt="jayanta" title="jayanta" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Jayanta Sarkar</h5>
                      <p>Co-Founder & Head- Enterprise Application Practice</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/jayanta-sarkar-1212785/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Venkat} alt="VENKAT" title="VENKAT" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Venkat Gandhi</h5>
                      <p>President - Synoverge Japan Co. Ltd.</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/venkatgandhi/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Anita} alt="ANITA" title="ANITA" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Anita Upadhyay</h5>
                      <p>Ex. Vice President Delivery & Operations</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/anitau/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Manish} alt="Manish" title="Manish" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Manish Patel</h5>
                      <p>VP - Delivery</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/manish-patel-25614653/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Dhwanil} alt="Dhwanil" title="Dhwanil" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Dhwanil Shah</h5>
                      <p>
                        Head Technology & Solutions - Digital Transformation
                      </p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/dhwanilshah1/"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Vaseem} alt="Vaseem" title="Vaseem" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Vaseem Lahori</h5>
                      <p>VP - Technology & Solutions</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://in.linkedin.com/in/vaseem-lahori-a4b542b"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3} className="d-inline-flex">
                <div className="team-item">
                  <div className="team-image">
                    <img src={Sumit} alt="Sumit" title="Sumit" />
                  </div>
                  <div className="card-bg">
                    <div className="team-content">
                      <h5>Sumit Udani</h5>
                      <p>VP - Technology & Solutions</p>
                    </div>
                    <div className="team-content-social">
                      <ul>
                        <li>
                          <Link
                            to="https://in.linkedin.com/in/sumit-udani"
                            target="blank"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default leadershipTeam;
