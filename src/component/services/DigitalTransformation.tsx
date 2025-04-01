import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Digitaltransformation from "../../assets/images/digital-transformation.png";
import offering from "../../assets/images/digital-transformation-offering.jpg";
import approach from "../../assets/images/digital-transformation-approach.jpg";
import bannerimg from "../../assets/images/banner/digital-transformation-banner.jpg";
import "../../component/pages/pages.scss";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import { Helmet } from "react-helmet";

function DigitalTransformation() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/digital-transformation" },
    { label: "Digital Transformation" },
  ];

  // for seo
  const keywords =
    "IT digital transformation services, digital transformation services, digital product engineering services, digital transformation consulting services, digital transformation solutions ";

  return (
    <div className="digital-trasformation">
      <Helmet>
        <meta name="robots" content="index,follow" />
        <title>
          Digital Product Engineering Services | Digital Transformation
        </title>
        <meta
          name="description"
          content="Delivering digital transformation for enterprises and ISVs through our expertise in Digital Product Engineering Services."
        />
        <meta name="keywords" content={keywords} />
        <link
          rel="canonical"
          href="https://www.reliancepulses.com/digital-transformation"
        />
        <meta
          property="og:title"
          content="Digital Product Engineering Services | Digital Transformatio"
        />
        <meta
          property="og:description"
          content="Delivering digital transformation for enterprises and ISVs through our expertise in Digital Product Engineering Services."
        />
        <meta
          property="og:url"
          content="https://www.reliancepulses.com/digital-transformation"
        />
        <meta
          name="twitter:title"
          content="Digital Product Engineering Services | Digital Transformatio"
        />
        <meta
          name="twitter:description"
          content="Delivering digital transformation for enterprises and ISVs through our expertise in Digital Product Engineering Services."
        />
      </Helmet>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                {/* <h1>
                  Digital Transformation that fits your ever changing needs
                </h1> */}
                <h1>Digital Transformation</h1>
                <p>
                  Helping transform businesses using relevant and optimum
                  technology
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img src={bannerimg} alt="banner" title="banner" />
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
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Overview</h3>
                <p>
                  Digital transformation is essential for all businesses, from
                  small to large. It's all about value, people, optimization,
                  and the ability to quickly adapt when necessary through the
                  intelligent application of technology and data.
                </p>
                <p>
                  New investment and growth standards are being fascinated by
                  digital transformation. It's not just about incorporating new
                  technology into a company; it's a massive change that's
                  affecting almost every aspect of the business. Existing
                  products are being reimagined, manual processes are being
                  replaced with automated models, and data-driven
                  decision-making is becoming more precise. As a result, digital
                  transformation is much more than just a technology revolution.
                  It's all about training people and changing processes to get
                  the most out of a business' most powerful tool.
                </p>
                <p>
                  Using our experience with revolutionary digital technologies
                  such as IoT, Data Analytics, and AI. We can help you use
                  sophisticated digital solutions to automate data collection,
                  process integrations, and real-time data insights to adapt and
                  fulfill your ever-changing consumer demands.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              className="common-sec"
            >
              <div className="overview-img">
                <img
                  src={Digitaltransformation}
                  alt="Digital-Transformation"
                  title="Digital-Transformation"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <Row>
            <h3 className="hide-desktop">Our Offerings</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={offering}
                  alt="Our Offerings"
                  title="Our Offerings"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Our Offerings</h3>
                <p>
                  We're on a mission to create your digital shift as painless
                  and efficient as possible. We provide a variety of DX services
                  to partner with them through there digital journey. Take a
                  look at what we have to offer below:
                </p>
                <ul className="icon-list">
                  <li>
                    Advice and insights to help you discover critical areas of
                    your business that need to be digitalized.
                  </li>
                  <li>Services for developing DX strategies.</li>
                  <li>Services for prototyping and pilot implementation.</li>
                  <li>Services for change management and training.</li>
                </ul>
                <p className="mb-0">
                  Synoverge provides you with high-quality, personalized and
                  cost-effective services to ensure your company's Digital
                  Transformation is a success. Our team of experienced digital
                  transformation experts helps you migrate to a new and
                  efficient digital ecosystem utilizing a proven and trusted
                  digitalization strategy, whether it's a legacy system or a
                  Greenfield project.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <h3 className="hide-desktop">Our Approach</h3>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Our Approach</h3>
                <p>
                  To help you accomplish your business's digital transformation,
                  we work with you to use digital technologies such as RPA, AI,
                  Mobile Application, Web Application, Internet of Things, and
                  Cloud to increase the efficiency, transparency, and
                  decision-making of your processes.
                </p>
                <ul className="icon-list mb-0">
                  <li>
                    To set up the business outcomes of the DX process, we must
                    first understand your industry's business needs.
                  </li>
                  <li>
                    Determine the core business operations that require
                    digitalization by understanding existing processes.
                  </li>
                  <li>
                    Identifying To-Be Processes in order to develop a DX
                    strategy that is both successful and efficient.
                  </li>
                  <li>The backend process is being reoriented.</li>
                  <li>Prototyping to improve the user experience.</li>
                  <li>
                    Pilot projects are being used to implement the digital
                    transformation plan.
                  </li>
                  <li>
                    After the DX strategy has been successfully implemented at
                    the pilot stage, it will be scaled up to all of the required
                    areas.
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              className="common-sec"
            >
              <div>
                <img
                  src={approach}
                  alt="Approach"
                  title="Our Approach"
                  loading="lazy"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module ">
        <Container>
          <div className=" syno-adv mildblue-bg p-5">
            <Row>
              <Col md={12}>
                <h3>Synoverge Advantage</h3>
                <p>
                  Synoverge's digital business transformation services help you
                  achieve measurable results and increase company agility by
                  optimizing solutions based on an assessment of your present
                  capabilities:
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>
                    Aids in the development of responsive operations based on
                    actionable data and insights.
                  </li>
                  <li>
                    Implement a corporate strategy that fully utilizes
                    exponential technology.
                  </li>
                  <li>
                    Create new revenue streams and possibilities for market
                    expansion.
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>
                    Rethink and rethink how you interact with your clients,
                    employees, and potential partners.
                  </li>
                  <li>
                    Assist you in making decisions on how to use or adapt
                    emerging technologies.
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default DigitalTransformation;
