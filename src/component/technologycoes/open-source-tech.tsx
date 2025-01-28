import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import opentech from "../../assets/images/open-tech.png";
import openssource from "../../assets/images/opens-source.jpg";
import openssourceapproach from "../../assets/images/opens-source-approach.jpg";
import opensourcetechbanner from "../../assets/images/banner/open-source-banner.jpg";
import "../../component/pages/pages.scss";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";

function opensourcetech() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Technology CoEs' ,link:'/ai-bi-data'},
    { label: 'Open Source Technologies' },

  ];

  const keywords = "Open source application services. custom web application development services, Web Portal Development company, Website Migration services, website upgrade services, Java software development company, PHP web development services, LAMP application development services, MERN stack development company, PHP web development company"

  return (
    <div className="open-source-tech">
       <Helmet>
       <meta name="robots" content="index,follow"/>
        <title>
        Custom Web Application Development Services | Synoverge
        </title>
        <meta
          name="description"
          content="Unlock business potential with Synoverge's custom web application development services. Tailored solutions for seamless integration and enhanced performance."
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical"href="https://www.synoverge.com/open-source-technologies" />
        <meta property="og:title" content="Custom Web Application Development Services | Synoverge" />
        <meta property="og:description" content="Unlock business potential with Synoverge's custom web application development services. Tailored solutions for seamless integration and enhanced performance." />
        <meta property="og:url" content="https://www.synoverge.com/open-source-technologies"/>
        <meta name="twitter:title" content="Custom Web Application Development Services | Synoverge" />
        <meta name="twitter:description" content="Unlock business potential with Synoverge's custom web application development services. Tailored solutions for seamless integration and enhanced performance." />
      </Helmet>
      <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                  <h1>Open Source Technologies</h1>
                  {/* <h1>Open technologies for diverse needs</h1> */}
                  <p>
                    We evaluate and build scalable solutions leveraging the open technologies
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img src={opensourcetechbanner} alt="open-source-tech" title="open-source-tech" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <div className="module">
        <Container>
        <CustomBreadcrumb items={breadcrumbItems} />
          <Row>
          <h3 className="hide-desktop">Overview</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Overview</h3>
                <p>
                  For a long time, open source technology has been around. It is
                  a licensing agreement that allows users to freely edit a work,
                  use it in new ways, integrate it into a bigger project, or
                  create a new work based on the original. The open source
                  movement is responsible for technology's fast pace during the
                  last two decades.
                </p>
                <p>
                  Open source applications are available for a variety of
                  operating systems, including Android, Windows, iOS, and Linux.
                  The main advantages of such apps are lower maintenance costs,
                  improved technical adaptability, and consistent performance.
                </p>
                <p>
                  We have worked with a wide range of open source tools. This
                  allows us to customize the solution to the needs of the
                  business. We keep you ahead of the technology curve by
                  leveraging the most innovative and cutting-edge technologies.
                  Our open source development processes are designed to save you
                  both time and money.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div className="overview-img">
                <img
                  src={opentech}
                  alt="open-tech"
                  title="open-tech"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Our Offerings</h3>
              <p>
                Synoverge is well-positioned to handle even the most difficult
                web development and open source projects, regardless of size or
                scope. In every part of development, our goal is to provide the
                finest quality open source development services.
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={openssource}
                  loading="lazy"
                  alt="opens-source"
                  title="opens-source"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <p>
                  We go beyond ordinary web application development and provide
                  ready-to-use open source IT application solutions to improve
                  client and partner engagement.
                </p>
                <p>
                  We provide open source development experience in the following
                  areas:
                </p>
                <ul className="icon-list mb-0">
                  <li>Custom Web Application Development</li>
                  <li>Content Management System</li>
                  <li>Open Source CRM & ERP Solutions</li>
                  <li>Web Portal Development</li>
                  <li>Module Development</li>
                  <li>Open-Source Integration</li>
                  <li>Website Migrations and Upgrades</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
          <h3 className="hide-desktop">Our Approach</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Our Approach</h3>
                <p>
                  We can assist you in handling the ever-changing technological
                  world. Your company will be able to achieve high targets by
                  developing effective mobile and web applications.
                </p>
                <p>
                  We provide open source development experience in the following
                  areas:
                </p>
                <ul className="icon-list mb-0">
                  <li>
                    Analysing Your Organization: We evaluate your business,
                    generate surveys, and debate unique ideas that evolve using
                    a client-centric approach.
                  </li>
                  <li>
                    Choose the Best Platform: Create a model with the
                    appropriate open source development platform from a variety
                    of options.
                  </li>
                  <li>
                    Customization and Design: We come up with the greatest
                    design that provides value quicker than it adds costs, based
                    on a concept to expand your business.
                  </li>
                  <li>
                    Customized Development: We understand the value of
                    evaluating as a reputable open source development firm, thus
                    we provide 100 percent customizable open source development
                    services.
                  </li>
                  <li>
                    Time and money saving: We strive to make the most of your
                    money by providing unsurpassed open source development and
                    customization services.
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={openssourceapproach}
                  loading="lazy"
                  alt="opens-source-approach"
                  title="opens-source-approach"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <div className="module syno-adv mildblue-bg p-5">
            <Row>
              <Col md={12}>
                <h3>Synoverge Advantage</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>Know what's new in terms of technology and trends</li>
                  <li>Experience of various open-source platforms</li>
                  <li>Website development options that are unique</li>
                  <li>Scalable and robust solutions</li>
                  <li>Website development options that are unique</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>Flexibility to fulfil specific requirements</li>
                  <li>
                    To ensure a completely satisfied output, use an interactive
                    development technique
                  </li>
                  <li>On-time delivery</li>
                  <li>Excellent client service</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default opensourcetech;
