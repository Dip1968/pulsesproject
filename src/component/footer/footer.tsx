import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";
import call from "../../assets/images/phone-icon.svg";
import mail from "../../assets/images/email-icon.svg";
import skype from "../../assets/images/skype.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import facebook from "../../assets/images/facebook.svg";
import insta from "../../assets/images/instagram.svg";

export const Footer = () => {
  const scrollToTop = () => {
    // Scrolls to the top of the page when called
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <Container>
        <Row>
          <Col xs="12" sm="6" lg="4">
            <div className="footer-nav">
              <h5>Discover Reliance Pulses</h5>
              <ul>
                <li>
                  <Link to="/" onClick={scrollToTop}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="contact-us" onClick={scrollToTop}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="4">
            <div className="footer-nav">
              <h5>Products</h5>
              <ul>
                <li>
                  <Link to="pulses" onClick={scrollToTop}>
                    Pulses & Lentils
                  </Link>
                </li>
                <li>
                  <Link to="grains" onClick={scrollToTop}>
                    Grains & Millets
                  </Link>
                </li>
                <li>
                  <Link to="nutsandseeds" onClick={scrollToTop}>
                    Nuts & Seeds
                  </Link>
                </li>
                <li>
                  <Link to="rajmakidneybeans" onClick={scrollToTop}>
                    Rajma Kidney Beans
                  </Link>
                </li>
                <li>
                  <Link to="masalaandspices" onClick={scrollToTop}>
                    Masala & Spices
                  </Link>
                </li>
                <li>
                  <Link to="healthyandnutrifoods" onClick={scrollToTop}>
                    Healthy & Nutry Foods
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className="footer-nav pe-lg-10">
              <h5>Contact Us</h5>
              <p>
                B/H Acropolis , N.H. No.: 48 (8),
                <br />
                Sahkarijin Cross Road, At & Po. Kanknol,
                <br />
                Himatnagar, Pin: 383001, Dist. S.K. (GUJ), India.
              </p>
              <p>
                <img src={call} alt="logo" />
                Phone: <Link to="tel:+919879106400">+91 9879106400</Link>
              </p>
              <p>
                <img src={mail} alt="logo" />
                Email:{" "}
                <Link to="mailto:reliancepulses@gmail.com">
                  reliancepulses@gmail.com
                </Link>
              </p>
              {/* <div className="icon-footer">
                <ul className="pt-3">
                  <li className="ps-0">
                    <Link
                      to="https://twitter.com/i/flow/login?redirect_after_login=%2FSynoverge"
                      target="_blank"
                    >
                      <img src={twitter} alt="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.linkedin.com/company/synoverge-technologies-pvt.-ltd."
                      target="_blank"
                    >
                      <img src={linkedin} alt="linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.facebook.com/SynovergeTechnologiesPvtLtd"
                      target="_blank"
                    >
                      <img src={facebook} alt="facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/synoverge_ideasenergized/"
                      target="_blank"
                    >
                      <img src={insta} alt="instagram" />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
        <Row className="border-top footer-bottom ">
          <Col xs="12" lg="12">
            <p className="pt-4 text-center">
              {" "}
              @2025 Reliance Pulses, All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
