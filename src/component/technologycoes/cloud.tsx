import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cloudoverview from "../../assets/images/cloud.png";
import CloudAssessment from "../../assets/images/cloud-assessment.jpg";
import cloudmigration from "../../assets/images/cloud-migration.jpg";
import cloudappdev from "../../assets/images/cloud-app-dev.jpg";
import CloudOperation from "../../assets/images/cloud-operation.jpg";
import Cloudmanagement from "../../assets/images/cloud-management.jpg";
import cloudbanner from "../../assets/images/banner/cloud-banner.jpg";
import "../../component/pages/pages.scss";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";

function cloud() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Technology CoEs' ,link:'/ai-bi-data'},
    { label: 'Cloud' },

  ];

  const keywords = "Cloud technology services, Cloud migration services, Cloud computing solution company, Cloud application development services, AWS application development services company, AWS cloud development services, Azure Development services"

  return (
    <div className="cloud">
        <Helmet>
        <meta name="robots" content="index,follow"/>
        <title>
        Cloud  management solution | Synoverge
        </title>
        <meta
          name="description"
          content="Transform your business with our cloud technology services: cloud migration, application development, and complete cloud computing solutions"
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://www.synoverge.com/cloud" />
        <meta property="og:title" content="Cloud  management solution | Synoverge" />
        <meta property="og:description" content="Transform your business with our cloud technology services: cloud migration, application development, and complete cloud computing solutions" />
        <meta property="og:url" content="https://www.synoverge.com/cloud"/>
        <meta name="twitter:title" content="Cloud  management solution | Synoverge" />
        <meta name="twitter:description" content="Transform your business with our cloud technology services: cloud migration, application development, and complete cloud computing solutions" />
      </Helmet>
      <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                  <h1>Cloud</h1>
                  {/* <h1>Overcome the Anxiety of Cloud Adoption</h1> */}
                  <p>
                    Defining Cloud Strategy for maximum cost advantage
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img src={cloudbanner} alt="cloud" title="cloud" />
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
                  Cloud computing has emerged as a powerful strength in recent
                  years. It has enabled us to quickly adapt and accommodate to
                  the constantly changing needs of businesses. Cloud computing
                  can handle large amounts of data while also allowing for
                  global deployment, allowing businesses to develop more
                  innovative and dynamic ways of working.
                </p>
                <p>
                  Cloud application development involves various stages of
                  software development and each of which prepares your app for
                  launch and market acceptance. The cloud is a great way to run
                  a business and offers many advantages.
                </p>
                <p>
                  We are ready to collaborate with your teams to understand your
                  business needs and provide services to help you accelerate
                  your business. Our cloud services' primary mission is to
                  provide dependable, scalable, secure, cost-effective,
                  adaptive, and outcome-driven solutions. Our team assists you
                  in staying ahead of the competition and achieving your full
                  business potential.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div className="overview-img">
                <img
                  src={cloudoverview}
                  alt="cloud"
                  title="cloud"
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
                Synoverge offers a full spectrum of cloud services to modernize
                business processes, applications, and associated data
                architecture to establish the digital transformation that modern
                businesses run on. Our cloud expertise covers the breadth and
                depth in Azure and AWS
              </p>
            </Col>
            </Row>
            <Row className="mt-4">
            <h3 className="hide-desktop">Cloud Assessment & Adoption</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={CloudAssessment}
                  loading="lazy"
                  alt="Cloud-Assessment"
                  title="Cloud-Assessment"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Cloud Assessment & Adoption </h3>
                <p className="mb-0">
                  Assess your current business and applications, find the right
                  mix of cloud services for your workloads, identify gaps in
                  technology and skills, and make a cloud adoption plan. We help
                  client in cloud adoption by bringing cloud best practices as
                  part of actionable plan.
                </p>
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">Cloud Migration</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Cloud Migration </h3>
                <p>
                  Moving your application to Cloud requires a systematic
                  strategy. Synoverge makes it easy for you by,{" "}
                </p>
                <ul className="icon-list mb-0">
                  <li>Assessment & Analysis</li>
                  <li>Migration strategy</li>
                  <li>Migration Planning</li>
                  <li>Execution</li>
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={cloudmigration}
                  loading="lazy"
                  alt="cloud-migration"
                  title="cloud-migration"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">Cloud App Development & Modernization</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={cloudappdev}
                  loading="lazy"
                  alt="cloud-app-dev"
                  title="cloud-app-dev"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Cloud App Development & Modernization</h3>
                <p className="mb-0">
                  Cloud offers numerous possibilities in terms of agility,
                  scalability, and performance. However, to fully leverage its
                  immense potential and keeping the cost efficiency, application
                  modernization services is essential. We help clients in
                  adapting cloud paradigms – micro-services, multi-tenancy,
                  serverless computing, containerization and cloud native
                  services. Power the apps with advanced services (AI, ML, IoT
                  and more). We have expertise in application reengineering,
                  refactoring, SaaS implementation, and integration.
                </p>
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">Cloud DevOps</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Cloud DevOps</h3>
                <p className="mb-0">
                  Focus on DevOps ensures we improve efficiency, quality and
                  speed with flawless collaboration between development and
                  operations.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={CloudOperation}
                  loading="lazy"
                  alt="Cloud-Operation"
                  title="Cloud-Operation"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">Cloud Operation and Management</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={Cloudmanagement}
                  loading="lazy"
                  alt="Cloud-management"
                  title="Cloud-management"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Cloud Operation and Management</h3>
                <p className="mb-0">
                  Help clients to define the cloud capacity, adopt tools for
                  monitoring and management and backup & disaster recovery
                  plans.
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
                The approach used for the cloud services immensely matters as it
                dictates the quality and efficiency of the client modernization.
                The underlying notion of our approach is to ensure a
                high-quality solution in most optimized cost.
              </p>
              <p>The approach mainly constitutes following aspects:</p>
            </Col>
            <Col xs={12} md={6}>
              <ul className="icon-list">
                <li>
                  Assessment of Business objectives, processes & applications
                </li>
                <li>
                  Planning - development and management roadmap and a
                  prioritized features list{" "}
                </li>
                <li>
                  Cloud Solution Architecting- our focus on micro-services,
                  serverless, containers, availability, performance, security
                  and Infrastructure
                </li>
                <li>
                  Agile with Continuous Coloration, Integration, build and
                  testing using DevOps tools
                </li>
                <li>UI/UX – mock-ups, designing, re-designing </li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <ul className="icon-list">
                <li>
                  Assessment of Business objectives, processes & applications
                </li>
                <li>
                  Planning - development and management roadmap and a
                  prioritized features list{" "}
                </li>
                <li>
                  Cloud Solution Architecting- our focus on micro-services,
                  serverless, containers, availability, performance, security
                  and Infrastructure
                </li>
                <li>
                  Agile with Continuous Coloration, Integration, build and
                  testing using DevOps tools
                </li>
                <li>UI/UX – mock-ups, designing, re-designing </li>
              </ul>
            </Col>
            <Col md={12}>
              <p className="mb-0">
                We are cloud agnostic and recommend the cloud which fits best
                for a given client’s business objective considering aspects.
              </p>
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
                  <li>
                    Accelerated on-boarding of application to target platform
                  </li>
                  <li>Get equipped with technical experts</li>
                  <li>
                    Continuous Innovation in Product, Process & Delivery
                    Methodologies.
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>Faster time to market and optimize cost.</li>
                  <li>IP Protection.</li>
                  <li>Transparency and Flexibility</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default cloud;
