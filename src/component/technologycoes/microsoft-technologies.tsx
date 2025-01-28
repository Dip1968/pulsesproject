import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import microsofttechnologies from "../../assets/images/microsoft-technologies-overview.png";
import ouroffering from "../../assets/images/microsoft-technologies-our-offering.png";
import webprogramming from "../../assets/images/animated-icons/coding-solution.gif";
import mobility from "../../assets/images/animated-icons/cloud-protection.gif";
import support from "../../assets/images/animated-icons/agreement.gif";
import erp from "../../assets/images/animated-icons/api.gif";
import mcapproach from "../../assets/images/microsoft-technologies-approach.png";
import glimpsearchitecture from "../../assets/images/glimpse-architecture-expertise.png";
import microsofttechnologiesbanner from "../../assets/images/banner/Microsoft-Technologies-banner.jpg";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";

import CountUp from "react-countup";

function MicrosoftTechnologies() {
  //  for scrolling postion then increase number
  const [isVisible, setIsVisible] = useState(false);
  const clients = 45
  const platformdevelopment = 13
  const productdevelopment = 15
  const portaldevelopment = 16
  const customprojects = 70
  const hoursofwork = 425000
  const expertcombining = 80
  const yearofexp = 470


  const handleScroll = () => {
    const section = document.querySelector(".salient-points");
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

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Technology CoEs' ,link:'/ai-bi-data'},
    { label: 'Microsoft Technologies' },

  ];

  const keywords = "Microsoft Development Services, microsoft Application development services, application migration services, Enterprise software development services, application development services, software customization services"

  return (
    <div className="microsoft-technologies">
      <Helmet>
        <meta name="robots" content="index,follow"/>
        <title>
        Enterprise Software Development Services | Synoverge
        </title>
        <meta
          name="description"
          content="Transform your business with Synoverge's Microsoft Technologies expertise, offering innovative solutions, seamless integrations, and expert consulting services."
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical"href="https://www.synoverge.com/microsoft-technologies" />
        <meta property="og:title" content="Enterprise Software Development Services | Synoverge" />
        <meta property="og:description" content="Transform your business with Synoverge's Microsoft Technologies expertise, offering innovative solutions, seamless integrations, and expert consulting services." />
        <meta property="og:url" content="https://www.synoverge.com/microsoft-technologies"/>
        <meta name="twitter:title" content="Enterprise Software Development Services | Synoverge" />
        <meta name="twitter:description" content="Transform your business with Synoverge's Microsoft Technologies expertise, offering innovative solutions, seamless integrations, and expert consulting services." />
              </Helmet>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>Microsoft Technologies</h1>
                {/* <h1>Keep up with the latest in Microsoft</h1> */}
                <p>Microsoft Gold Partner and Active Community member</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img src={microsofttechnologiesbanner} alt="microsoft-technologies" title="microsoft-technologies" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module ">
        <Container>
          <CustomBreadcrumb items={breadcrumbItems} />
          <Row>
          <h3 className="hide-desktop">Overview</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Overview</h3>
                <p>
                  Microsoft has done relatively well in recent decades. This has
                  stimulated other businesses to use the company's production
                  strategies to elevate their daily operations. This has
                  significantly increased the level of competition in the
                  industry.
                </p>

                <p>
                  Its popularity stems from extensive tooling experience, multiple
                  libraries, and editors, which reduce the risks and costs
                  associated with development. Microsoft Technology includes free,
                  cross-platform, and open-source frameworks with an
                  ever-expanding development space for building web, mobile,
                  desktop, gaming, and IoT applications.
                </p>

                <p>
                  Microsoft Technology practice at Synoverge offers a wide range
                  of custom projects and product engineering services to clients
                  globally. We stand out for high level of quality, on-time
                  delivery, and adherence to a tried-and-true method.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div className="overview-img img75">
                <img
                  src={microsofttechnologies}
                  alt="Microsoft Technologies"
                  title="Microsoft Technologies"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <h3 className="mb-5">Salient points about our relationship with clients</h3>
          <Row>
            <Col md={3}>
              <div className="client-relation salient-points">
                {isVisible && <><CountUp end={clients} delay={0.25} /><span>+</span><p>Clients</p></>}
                {/* <CountUp end={45} delay={0.25} /><span>+</span><p>Clients</p> */}
              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={13} delay={0.25} /><span>+</span><p>Platform Development</p> */}
                {isVisible && <><CountUp end={platformdevelopment} delay={0.25} /><span>+</span><p>Platform Development</p></>}
              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={15} delay={0.25} /><span>+</span><p>Product Development</p> */}
                {isVisible && <><CountUp end={productdevelopment} delay={0.25} /><span>+</span><p>Product Development</p></>}
              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={16} delay={0.25} /><span>+</span><p>Portal Development</p> */}
                {isVisible && <><CountUp end={portaldevelopment} delay={0.25} /><span>+</span><p>Portal Development</p></>}
              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={70} delay={0.25} /><span>+</span><p>Custom Projects</p> */}
                {isVisible && <><CountUp end={customprojects} delay={0.25} /><span>+</span><p>Custom Projects</p></>}
              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={425000} delay={0.25} /><span>+</span><p>Hours of Work Excellency</p> */}
                {isVisible && <><CountUp end={hoursofwork} delay={0.25} /><span>+</span><p>Hours of Work Excellency</p></>}

              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={80} delay={0.25} />+<p>Experts combining</p> */}
                {isVisible && <><CountUp end={expertcombining} delay={0.25} /><span>+</span><p>Experts combining</p></>}
              </div>
            </Col>
            <Col md={3}>
              <div className="client-relation">
                {/* <CountUp end={13} delay={0.25} />+<p>Yrs of Experience</p> */}
                {isVisible && <><CountUp end={yearofexp} delay={0.25} /><span>+</span><p>Yrs of Experience</p></>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module ">
        <Container>
          <Row>
          <h3 className="hide-desktop">Our Offerings</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Our Offerings</h3>

                <p>
                  While we don’t limit ourselves to just below key areas but we
                  mould ourselves to your business needs as Co-Creation Partner
                  that can fall in any - Consultancy, Development, Vendor or
                  Preferred Partner to name few.
                </p>

                <p className="mb-0">
                  We enable you to take advantage of Unified Microsoft Technology
                  Stack with various parameters. We can help you develop
                  business-driven applications that can integrate with inhouse or
                  external applications easily with our large experience.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={ouroffering}
                  loading="lazy"
                  alt="Microsoft Technologies Our Offering"
                  title="Microsoft Technologies Our Offering"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <h3>Our Focus</h3>
          <Row>
            <Col md={3}>
              <div className="syno-card">
                <div>
                  <img
                    src={webprogramming}
                    alt="Solution Development"
                    title="Solution  Development"
                  />
                </div>
                <h4>Solution Development</h4>
                <p>
                  Leveraging cutting edge MS tools and technologies to develop
                  bespoke applications and solutions.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="syno-card">
                <div>
                  <img
                    src={mobility}
                    alt="Cloud & Mobility"
                    title="Cloud & Mobility"
                  />
                </div>
                <h4>Cloud & Mobility</h4>
                <p>
                  Leveraging Cloud based technologies, to deliver rich content
                  and automation to your platform consumers.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="syno-card">
                <div>
                  <img src={erp} alt="ERP Solutions" title="ERP Solutions" />
                </div>
                <h4>ERP Solutions</h4>
                <p>
                  Leveraging Cloud based technologies, to deliver rich content
                  and automation to your platform consumers.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="syno-card">
                <div>
                  <img
                    src={support}
                    alt="Enterprise Collaboration"
                    title="Enterprise Collaboration"
                  />
                </div>
                <h4>Enterprise Collaboration</h4>
                <p>
                  Tools and services that streamline collaboration within the
                  Microsoft ecosystem
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Our Approach</h3>
              <p>
                We work with approach – “Vision 2 Clear Solutions” methodology.
                We help to build backlog, suggest/work as prioritized with
                constant business values delivery. We Look solution within
                problems, keep you modern always, bring teamwork as an extended
                team.
              </p>


            </Col>
            <div className="col-md-8 d-block mx-auto">
              <img
                src={mcapproach}
                loading="lazy"
                alt="Approach"
                title="Approach"
                className="w-100 py-4"
              />
            </div>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Glimpse of Architecture Expertise</h3>
              <p>
                We build “Systems for business clients” with curated and
                consistent architecture and best practice. Our engineering code
                gets “Green Card” when scanned with industry leading Static Code
                Analysis tool – SonarQube.
              </p>
            </Col>
            <div className="col-md-8 d-block mx-auto">
              <img
                src={glimpsearchitecture}
                loading="lazy"
                alt="Glimpse Architecture"
                title="Glimpse Architecture"
                className="w-100 py-4"
              />
            </div>


          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <div className="module syno-adv mildblue-bg p-5">
            <h3>Synoverge Advantage</h3>
            <Row>
              <Col xs={12} md={6}>
                <div>
                  <ul className="icon-list">
                    <li>
                      Work with Open Discussion Model - We find solution within
                      problems
                    </li>
                    <li>
                      Worked as an extend team – “Knowledge Shared = Knowledge
                      2”, not just a technology partner, we push ourselves
                      beyond to that
                    </li>
                    <li>
                      Enable help you to forgot “Past”, live “Today” but keep
                      you ready for “Future”
                    </li>
                    <li>
                      You find all - Humans for creative work and Automation for
                      repetitive work
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div>
                  <ul className="icon-list">
                    <li>
                      Speaking of security – Not to compromise Intellectual
                      Property as well Application Security
                    </li>
                    <li>
                      Believe in Process – Certified ISO 2015 and ISMS 27001 –
                      happy outcome from many decades’ standard practice
                      recommended by experts
                    </li>
                    <li>
                      Open Door working model – Get periodic transparent
                      progress updates, risks, migration and engagement reviews
                      to align expectations.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MicrosoftTechnologies;
