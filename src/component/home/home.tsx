import React, { Fragment, Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import enterpriseapp from "../../assets/images/animated-icons/destination.gif";
import digitrans from "../../assets/images/animated-icons/transform.gif";
import platformengg from "../../assets/images/animated-icons/indentation.gif";
import verifyvalidate from "../../assets/images/animated-icons/safe.gif";
import webicon from "../../assets/images/animated-icons/settings.gif";
import mobility from "../../assets/images/animated-icons/computer.gif";
import cloud from "../../assets/images/animated-icons/clouds.gif";
import code from "../../assets/images/animated-icons/coding.gif";
import search from "../../assets/images/animated-icons/search.gif";
import microsofticon from "../../assets/images/animated-icons/microsoft-logo.gif";
import journey from "../../assets/images/journey-so-far.gif";
import about from "../../assets/images/about.gif";
import reliancepulses from "../../assets/images/reliance-pulses.gif";
import pulses from "../../assets/images/pulses-and-lentils.jpg";
import qualityassurance from "../../assets/images/quality-assurance.jpg";
import sustainabilityinitiatives from "../../assets/images/sustainability_initiatives.png";
import custompackaging from "../../assets/images/custom-packaging.png";
import supplychain from "../../assets/images/supply_chain_excellence.png";
import globaldistribution from "../../assets/images/global_distribution.png";
import customersupport from "../../assets/images/customer-support.png";
import rajma from "../../assets/images/rajma.jpeg";
import grains from "../../assets/images/grains.jpg";
import masala from "../../assets/images/masala.jpeg";
import healthyfoods from "../../assets/images/healthy-and-nutri-foods.jpg";
import nutsandseeds from "../../assets/images/nuts-and-seeds.jpg";
import globalcustomerfootprint from "../../assets/images/global-customer-footprint.jpg";
import usericon1 from "../../assets/images/user.png";
import usericon2 from "../../assets/images/user.png";
import lijjat from "../../assets/images/clients/lijjat-papad.png";
import shreeji from "../../assets/images/clients/shreeji.png";
import angur from "../../assets/images/clients/angur.png";

import clutch from "../../assets/images/clutch.png";
import microsoft from "../../assets/images/microsoft-lg-1.png";
import nasscom from "../../assets/images/nasscom-lg-1.png";
import ISOlogo from "../../assets/images/ISO-27001-logo.png";
import ISOlogo1 from "../../assets/images/ISO-9001-logo.png";
import reading from "../../assets/images/animated-icons/fast-forward.gif";
import ReactPlayer from "react-player/youtube";
import { Helmet } from "react-helmet";
import "./home.scss";

import CountUp from "react-countup";
import { ControlBar } from "video-react";

function Home() {
  //  for scrolling postion then increase number
  const [isVisible, setIsVisible] = useState(false);
  const endCount = 40000;
  const endCount1 = 50;
  const endCount2 = 20;
  const endCount3 = 100;
  const endCount4 = 35;
  const endCount5 = 13;

  const handleScroll = () => {
    const section = document.querySelector(".synoverge-glance");
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  //  scroll event listener when the component mounts

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scrolls to the top of the page when called
    window.scrollTo(0, 0);
  };

  //for seo
  const keywords =
    "software development company, software development services, software product development, software product development service, mobile app software development service, web software development services, mobile software development company, mobile app development services";

  return (
    <Fragment>
      <Helmet>
        <title>Reliance Pulses</title>
      </Helmet>
      <div className="landing-page">
        <Container>
          <section className="banner-sec">
            <br />
            <Row>
              <Col lg={6}>
                <div></div>
                <div className="banner-content">
                  <h1>
                    Pulses • Grains
                    <br />
                    Food Ingrediants
                  </h1>
                  <br />
                  <h3> Integrated Agri Processing & Distribution Company.</h3>
                  <button className="btn btn-knowmore none">Know More</button>
                </div>
              </Col>
              <Col lg={6}>
                <div className="banner-img">
                  <div className="bannerframe"></div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>

        <section className="services-sec">
          <Container>
            <Row>
              <Col lg={12} md={12}>
                <h2 className="sectitle">
                  Reliance <span>Pulses</span>
                </h2>
              </Col>
              <Col lg={12} md={12}>
                <div className="center-sec">
                  <Row>
                    <Col lg={8} md={8}>
                      <div className="about-sec">
                        <br />
                        <p>
                          Reliance Pulses has established itself as a trusted
                          name in the Urad and Toor Dal industry, renowned for
                          its unwavering commitment to quality. Based in
                          Himmatnagar, Gujarat — the global hub for Toor Dal
                          processing — we take immense pride in our rich
                          heritage and dedication to delivering excellence in
                          every grain.
                        </p>
                        <p>
                          At Reliance Pulses, three core values define us:
                          quality, trust, and consistency. These values have
                          earned us the loyalty of countless customers over the
                          years, making our flagship product, Lijjat Toor Dal, a
                          household name and a leading brand in India.
                        </p>
                        <p>
                          Expanding beyond the domestic market, our overseas
                          marketing arm and export unit have taken Reliance
                          Pulses to international heights. Today, the superior
                          quality of our Urad Dal and Toor Dal has earned
                          widespread acclaim, transcending borders and winning
                          the hearts of families worldwide.
                        </p>
                        <p>
                          Our journey begins at the heart of India's pulse
                          industry — Himmatnagar, Gujarat. Here, we bring you
                          meticulously processed pulses that exemplify
                          consistent taste, premium quality, and unparalleled
                          freshness. From Indian households to global kitchens,
                          Reliance Pulses has become a symbol of trust and
                          excellence, enriching lives with every serving.
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div className="img-div desktop-view ">
                        <img src={reliancepulses} alt="" loading="lazy" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="techcoes-sec">
          <Container fluid="md">
            <h2 className="sectitle">
              Our <span>Products</span>{" "}
            </h2>
            <Row>
              <Col lg={4} md={6}>
                <div className="tech-coes ">
                  <div className="tech-ico light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={pulses}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h4>Pulses & Lentils</h4>
                  <p>
                    At Reliance Pulses, we offer a premium range of pulses and
                    lentils, including Toor Dal, Urad Dal, Masoor Dal, and Moong
                    Dal. Our products are carefully sourced and processed to
                    ensure exceptional quality and flavor, catering to
                    households and kitchens worldwide.
                  </p>
                  <Link to="pulses" onClick={scrollToTop}>
                    Continue Reading{" "}
                    <img
                      width="16px"
                      height="16px"
                      src={reading}
                      alt="banner"
                      loading="lazy"
                      className="animate-service-icon"
                    />
                  </Link>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="tech-coes ">
                  <div className="tech-ico light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={grains}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h4>Grains & Millets</h4>
                  <p>
                    We provide a diverse selection of high-quality grains and
                    millets, such as wheat, rice, bajra, jowar, and ragi.
                    Perfect for a balanced and healthy diet, our grains are
                    sourced directly from trusted farms to meet the highest
                    standards of nutrition and taste.
                  </p>
                  <Link to="grains">
                    Continue Reading{" "}
                    <img
                      width="16px"
                      height="16px"
                      src={reading}
                      alt="banner"
                      loading="lazy"
                      className="animate-service-icon"
                    />
                  </Link>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="tech-coes  ">
                  <div className="tech-ico mild-blue">
                    <img
                      width="80px"
                      height="80px"
                      src={nutsandseeds}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h4>Nuts & Seeds</h4>
                  <p>
                    Our extensive collection of nuts and seeds includes
                    groundnuts, peanuts, chia seeds, flaxseeds, and more. Packed
                    with essential nutrients, these products are perfect for
                    snacking, cooking, and enhancing your daily diet with
                    wholesome goodness.
                  </p>
                  <Link to="nutsandseeds">
                    Continue Reading{" "}
                    <img
                      width="16px"
                      height="16px"
                      src={reading}
                      alt="banner"
                      loading="lazy"
                      className="animate-service-icon"
                    />
                  </Link>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="tech-coes ">
                  <div className="tech-ico light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={rajma}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h4>Rajma Kidney Beans</h4>
                  <p>
                    Reliance Pulses brings you premium Rajma (Kidney Beans)
                    known for their superior taste, texture, and nutritional
                    value. Our Rajma is sourced and processed with care to
                    ensure it meets the demands of both traditional Indian
                    dishes and global cuisines.
                  </p>
                  <Link to="rajmakidneybeans">
                    Continue Reading{" "}
                    <img
                      width="16px"
                      height="16px"
                      src={reading}
                      alt="banner"
                      loading="lazy"
                      className="animate-service-icon"
                    />
                  </Link>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="tech-coes ">
                  <div className="tech-ico light-green">
                    <img
                      width="80px"
                      height="80px"
                      src={masala}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h4>Masala & Spices</h4>
                  <p>
                    We deliver an authentic range of masalas and spices,
                    including turmeric, cumin, fennel, and chili powder. Our
                    spices are carefully processed to retain their aroma and
                    flavor, ensuring your dishes are rich in taste and quality.
                  </p>
                  <Link to="masalaandspices">
                    Continue Reading{" "}
                    <img
                      width="16px"
                      height="16px"
                      src={reading}
                      alt="banner"
                      loading="lazy"
                      className="animate-service-icon"
                    />
                  </Link>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="tech-coes ">
                  <div className="tech-ico mild-purple">
                    <img
                      width="80px"
                      height="80px"
                      src={healthyfoods}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <h4>Healthy & Nutry Foods</h4>
                  <p>
                    Our healthy and nutri foods range includes protein-packed
                    snacks, superfoods, and wholesome ingredients designed to
                    support a balanced and nutritious lifestyle. At Reliance
                    Pulses, we prioritize health without compromising on taste
                    or quality.
                  </p>
                  <Link to="healthyandnutrifoods">
                    Continue Reading{" "}
                    <img
                      width="16px"
                      height="16px"
                      src={reading}
                      alt="banner"
                      loading="lazy"
                      className="animate-service-icon"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="our-services-sec">
          <Container fluid="md">
            <h2 className="sectitle">
              Our <span>Services</span>{" "}
            </h2>
            <p className="sec-description">
              We are committed to delivering the finest quality pulses, ensuring
              every grain embodies the purity and flavor you trust. Our
              expertise and dedication make us a leader in the pulses industry,
              offering a variety of services that cater to your needs.
            </p>
            <Row className="justify-content-center mb-2">
              <Col md={6} sm={12}>
                <div className="service-box">
                  <div className="service-icon light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={qualityassurance}
                      alt="Quality Assurance"
                      loading="lazy"
                    />
                  </div>
                  <h4>Quality Assurance</h4>
                  <p>
                    We guarantee the highest standards of quality for our
                    pulses, processed using advanced technology to maintain
                    their natural taste and nutritional value.
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="service-box">
                  <div className="service-icon light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={sustainabilityinitiatives}
                      alt="Sustainability Initiatives"
                      loading="lazy"
                    />
                  </div>
                  <h4>Sustainability Initiatives</h4>
                  <p>
                    We are committed to sustainable farming practices, working
                    closely with farmers to promote environmental
                    responsibility.
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="service-box">
                  <div className="service-icon light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={custompackaging}
                      alt="Custom Packaging"
                      loading="lazy"
                    />
                  </div>
                  <h4>Custom Packaging</h4>
                  <p>
                    Our flexible packaging solutions meet the diverse needs of
                    our customers, ensuring freshness with every purchase.
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="service-box">
                  <div className="service-icon light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={supplychain}
                      alt="Supply Chain Excellence"
                      loading="lazy"
                    />
                  </div>
                  <h4>Supply Chain Excellence</h4>
                  <p>
                    Our robust supply chain ensures timely delivery of pulses,
                    preserving quality throughout the journey.
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="service-box">
                  <div className="service-icon light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={globaldistribution}
                      alt="Global Distribution"
                      loading="lazy"
                    />
                  </div>
                  <h4>Global Distribution</h4>
                  <p>
                    With a strong international presence, we export our premium
                    pulses worldwide, bringing authentic Indian taste to
                    families across the globe.
                  </p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="service-box">
                  <div className="service-icon light-magenta">
                    <img
                      width="80px"
                      height="80px"
                      src={customersupport}
                      alt="Customer Support"
                      loading="lazy"
                    />
                  </div>
                  <h4>Customer Support</h4>
                  <p>
                    Our dedicated customer support team is always available to
                    assist with queries and ensure satisfaction with our
                    services.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Container>
          <section className="synoverge-glance">
            {/* <h2 className="sectitle">
              Synoverge at a <span>Glance</span>
            </h2> */}
            <Row>
              <Col lg={3} md={4} sm={12}>
                <div className="yearsofexcellence">
                  <div className="yoex-value">
                    {isVisible && (
                      <>
                        <CountUp end={endCount} delay={0.15} />
                        <span>+</span>
                      </>
                    )}
                  </div>
                  <p>Volume MT Annual</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={12}>
                <div className="engagements">
                  <div className="yoex-value1">
                    {isVisible && (
                      <>
                        <CountUp end={endCount1} />
                        <span>+</span>
                      </>
                    )}
                  </div>
                  <p>Products</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={12}>
                <div className="yearsofexcellence">
                  <div className="yoex-value">
                    {isVisible && (
                      <>
                        <CountUp end={endCount2} delay={0.15} />
                        <span>+</span>
                      </>
                    )}
                  </div>
                  <p>Country</p>
                </div>
              </Col>
              <Col lg={3} md={4} sm={12}>
                <div className="engagements">
                  <div className="yoex-value1">
                    {isVisible && (
                      <>
                        <CountUp end={endCount3} delay={0.15} />
                        <span>+</span>
                      </>
                    )}
                  </div>
                  <p>Customers</p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>

        {/* <section className="journey-so-far desktop-view">
          <Container>
            <h2 className="sectitle">
              Journey <span>so far</span>{" "}
            </h2>
            <div className="journey-img">
              <img
                width="1100px"
                height="263px"
                src={journey}
                alt=""
                loading="lazy"
              />
            </div>
          </Container>
        </section> */}

        {/* <section className="client-say">
          <Container>
            <h2 className="sectitle">
              What our <span>Clients Say</span>
            </h2>
            <div>
              <Carousel interval={5000} className="carousel desktop-view">
                <Carousel.Item interval={5000}>
                  <div>
                    <Row>
                      <Col lg={6}>
                        <Link
                          to="https://clutch.co/profile/synoverge-technologies-private#highlights"
                          target="_blank"
                        >
                          <img
                            width="115px"
                            height="100%"
                            src={clutch}
                            alt="clutch"
                            loading="lazy"
                          />
                        </Link>

                        <Link to="#" target="_blank">
                          <img
                            width="115px"
                            height="100%"
                            src={microsoft}
                            alt="microsoft"
                            loading="lazy"
                          />
                        </Link>

                        <Link to="#" target="_blank">
                          <img
                            width="115px"
                            height="100%"
                            src={nasscom}
                            alt="nasscom"
                            loading="lazy"
                          />
                        </Link>

                        <Link to="#" target="_blank">
                          <img
                            width="115px"
                            height="100%"
                            src={ISOlogo}
                            alt="ISOlogo"
                            loading="lazy"
                          />
                        </Link>

                        <Link to="#" target="_blank">
                          <img
                            width="115px"
                            height="100%"
                            src={ISOlogo1}
                            alt="ISOlogo1"
                            loading="lazy"
                          />
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Container>
        </section> */}
        <section className="award-sec">
          <Container>
            <Col xs={12} md={12}>
              <section className="awards">
                <Container>
                  <div>
                    <h2 className="title">
                      Our <span>Clients</span>
                    </h2>
                    <Carousel
                      indicators={false}
                      controls={false}
                      interval={1000}
                      fade={true}
                      pause="hover"
                    >
                      <Carousel.Item>
                        <a
                          href="https://clutch.co/profile/synoverge-technologies-private#highlights"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            width="115px"
                            height="100%"
                            src={lijjat}
                            alt="Lijjat - Papad"
                            loading="lazy"
                          />
                        </a>
                      </Carousel.Item>
                      <Carousel.Item>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <img
                            width="115px"
                            height="100%"
                            src={shreeji}
                            alt="Shreeji"
                            loading="lazy"
                          />
                        </a>
                      </Carousel.Item>
                      <Carousel.Item>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <img
                            width="115px"
                            height="100%"
                            src={angur}
                            alt="Angur"
                            loading="lazy"
                          />
                        </a>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Container>
              </section>
            </Col>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <section className="workprocess">
                  <h2 className="title">
                    Global <span>Customer Footprint</span>
                  </h2>
                  <div className="position-relative video-text">
                    <img
                      // width="750px"
                      height="100%"
                      src={globalcustomerfootprint}
                      alt="Global Customer Footprint"
                      loading="lazy"
                    />
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fragment>
  );
}

export default Home;
