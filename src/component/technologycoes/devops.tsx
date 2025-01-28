import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import devops from "../../assets/images/devops.png";
import devopsassessment from "../../assets/images/devops-assessment.jpg";
import devopsprocess from "../../assets/images/devops-process.jpg";
import devopsmicroservices from "../../assets/images/devops-microservices.jpg";
import devopspilot from "../../assets/images/devops-pilot.jpg";
import cicdpipeline from "../../assets/images/cicd-pipeline.jpg";
import devopsbanner from "../../assets/images/banner/devops-banner.jpg";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";

function Devops() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Technology CoEs' ,link:'/ai-bi-data'},
    { label: 'DevOps' },

  ];

  const keywords = "DevOps Consutling services, Devops transformation services, Devops implementation services, DevOps consulting company, DevOps Consulting & Implementation Services"

  return (
    <div className="devops">
      <Helmet>
      <meta name="robots" content="index,follow"/>
        <title>
        DevOps Consulting Company | Synoverge
        </title>
        <meta
          name="description"
          content="Accelerate innovation and speed with DevOps consulting services. Build, test, and deploy faster using automated CI/CD pipelines to streamline release cycles."
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://www.synoverge.com/devops" />
        <meta property="og:title" content="DevOps Consulting Company | Synoverge" />
        <meta property="og:description" content="Accelerate innovation and speed with DevOps consulting services. Build, test, and deploy faster using automated CI/CD pipelines to streamline release cycles." />
        <meta property="og:url" content="https://www.synoverge.com/devops"/>
        <meta name="twitter:title" content="DevOps Consulting Company | Synoverge" />
        <meta name="twitter:description" content="Accelerate innovation and speed with DevOps consulting services. Build, test, and deploy faster using automated CI/CD pipelines to streamline release cycles." />
      </Helmet>
      <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                  <h1>DevOps</h1>
                  {/* <h1>Effective Application Life Cycle Management</h1> */}
                  <p>Tools, Process, Automation, and Monitoring – we bring them all together</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img src={devopsbanner} alt="devops" title="devops" />
                </div>                
              </Col>
            </Row>
          </Container>
        </div>
      <div className="module module-gray">
        <Container>
        <CustomBreadcrumb items={breadcrumbItems} />
          <Row>
          <h3 className="hide-desktop">Overview</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
              <h3 className="hide-mobile">Overview</h3>
              <p>
                While DevOps usage continues to grow in both major businesses
                and web-native organizations, there is still some confusion
                about what the term actually implies. Is DevOps a culture, a
                movement, a methodology, a philosophy, or any combination of
                these? Or does DevOps have various connotations for different
                people?
              </p>

              <p>
                DevOps is a contemporary software development process that
                improves cooperation among IT teams, speeds up deployment
                cycles, and provides better user experiences. People are
                emphasized, and efforts are made to strengthen communication
                between operations and development teams.
              </p>

              <p>
                DevOps consulting services from us are the foundation of your
                modern software development. Implement DevOps procedures in your
                enterprise and employ cutting-edge tools to supplement
                frameworks. We automate your cloud infrastructure and operations
                while assuring continuous delivery and continuous integration to
                get your product to market as rapidly as possible.
              </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div className="overview-img">
                <img
                  src={devops}
                  alt="Devops"
                  title="Devops"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <Col>
              <h3>Our Offerings</h3>
              <p>
                DevOps leverages collaboration, monitoring, tool-chain
                pipelines, automation and Cloud adoption. With our DevOps as a
                service offering, we ensure rapid on-boarding of applications by
                automating end-to-end delivery pipeline and facilitate
                continuous integration and development across leading cloud
                platforms.
              </p>
              <p>
                We automate end-to-end delivery pipeline across cloud platforms
                for faster time to market, increased efficiency and reduced
                cost. Our DevOps solutions help organizations to align with the
                goals, rapidly and reliably, producing high-quality
                software-based products and services. We focus on leveraging the
                right mix of technology, people, and processes to cater to the
                current clients that can rapidly scale when the need arises.
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
          <h3 className="hide-desktop">Assessment</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={devopsassessment}
                  loading="lazy"
                  alt="Devops Assessment"
                  title="Devops Assessment"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Assessment</h3>
                <p className="mb-0">
                  A DevOps evaluation is simply a collection of questions that
                  employees from various departments can answer. The
                  organization can determine whether it is headed in the right
                  path based on the study of the responses. A DevOps assessment
                  can help you define your current maturity level and map out a
                  path for progress.
                </p>
              </div>
            </Col>
          </Row>
          </Container>
        </div>
        <div className="module">
        <Container>
          <Row>
          <h3 className="hide-desktop">Process Implementation</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Process Implementation</h3>
                <p className="mb-0">
                  You must transition from a traditional to a cloud-based
                  approach employing a devOps plan to stay ahead of the
                  competition and stay ahead of the curve. As a DevOps partner,
                  we evaluate your current processes, infrastructure, and
                  pipelines to determine the appropriate tools for the change.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={devopsprocess}
                  loading="lazy"
                  alt="Devops Process"
                  title="Devops Process"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module">
        <Container>
          <Row>
          <h3 className="hide-desktop">Microservices</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={devopsmicroservices}
                  loading="lazy"
                  alt="Devops Microservices"
                  title="Devops Microservices"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Microservices</h3>
                <p className="mb-0">
                  Microservices is a programming architecture that differs from
                  traditional monolithic programmes (where the entire
                  application is considered and developed as a single entity).
                  The microservice architecture divides the app into several
                  loosely connected services.
                </p>
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module">
        <Container>
          <Row>
          <h3 className="hide-desktop">Pilot Framework Creation</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Pilot Framework Creation</h3>
                <p className="mb-0">
                  We combine your existing tools with our extensive ecosystem of
                  open source and licenced products. Once the project is online
                  and you've captured the lessons learned and rolled them back
                  into your DevSecOps processes, you can exit the pilot project
                  stage.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={devopspilot}
                  loading="lazy"
                  alt="Devops pilot"
                  title="Devops pilot"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module">
        <Container>
          <Row>
          <h3 className="hide-desktop">CI/CD Pipeline</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={cicdpipeline}
                  loading="lazy"
                  alt="CI/CD Pipeline"
                  title="CI/CD Pipeline"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">CI/CD Pipeline</h3>
                <p className="mb-0">
                  A CI/CD pipeline seeks to reduce the risks associated with
                  delivering software into production. However, because its
                  effectiveness is primarily reliant on automation, success with
                  DevOps is determined by how efficiently the development
                  department works with automation and whatever technologies are
                  available to them.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <Row>
            <Col>
              <h3>Our Approach</h3>
              <p>
                As DevOps is intended to be a cross-functional mode of working,
                those who practice the methodology use different sets of tools -
                referred to as “toolchains” rather than a single one. These
                toolchains are expected to fit into one or more of the following
                categories, reflective of key aspects of the development and
                delivery process.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div>
                <ul className="icon-list">
                  <li>
                    Coding – code development and review, source code management
                    tools, code merging.
                  </li>
                  <li>
                    Building – continuous integration tools, build status.
                  </li>
                  <li>
                    Testing – continuous testing tools that provide quick and
                    timely feedback on business risks.
                  </li>
                  <li>
                    Packaging – artifact repository, application pre-deployment
                    staging.
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div>
                <ul className="icon-list">
                  <li>
                    Releasing – change management, release approvals, release
                    automation.
                  </li>
                  <li>
                    Configuring – infrastructure configuration and management,
                    infrastructure as code tools.
                  </li>
                  <li>
                    Monitoring – applications performance monitoring, end-user
                    experience.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="mb-0">
                We are technology agnostic and recommend the technology which
                fits best for a given platform based on all aspects.
              </p>
            </Col>
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
                    <li>Organizational investment</li>
                    <li>Team leaders' experience and effectiveness</li>
                    <li>Continuous delivery</li>
                    <li>
                      The ability of different disciplines (development,
                      operations, and infosec) to achieve win-win outcomes
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div>
                  <ul className="icon-list">
                    <li>Organizational performance</li>
                    <li>Special focus on deployment pain</li>
                    <li>Lean management and agile practices</li>
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

export default Devops;
