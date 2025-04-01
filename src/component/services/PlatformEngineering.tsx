import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Platformengineering from "../../assets/images/platform-engineering.png";
import product from "../../assets/images/product-ideation.jpg";
import design from "../../assets/images/design-development-maintenance.jpg";
import quality from "../../assets/images/quality-assurance.jpg";
import devops from "../../assets/images/devops-automation.jpg";
import legacy from "../../assets/images/legacy-modernization.jpg";
import platformapproch from "../../assets/images/platform-engineering-our-approach.jpg";
import PlatformEngineeringbanner from "../../assets/images/banner/platform-engineering-banner.jpg";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import { Helmet } from "react-helmet";

function PlatformEngineering() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/digital-transformation" },
    { label: "Platform Engineering" },
  ];

  const keywords =
    "Software product engineering services, technology and data migration service, product engineering services, product lifecycle management services, product ideation services, open source software development services, product modernization services, Legacy Modernization Services, Legacy application Modernization Services, Software Re-engineering Services";
  return (
    <div className="Platform-Engineering">
      <Helmet>
        <meta name="robots" content="index,follow" />
        <title>Software Product Engineering Services </title>
        <meta
          name="description"
          content="Synoverge, a top product engineering company, partners with ISVs and enterprises to create market-leading products."
        />
        <meta name="keywords" content={keywords} />
        <link
          rel="canonical"
          href="https://www.reliancepulses.com/product-engineering-services"
        />
        <meta
          property="og:title"
          content="Software Product Engineering Services "
        />
        <meta
          property="og:description"
          content="Synoverge, a top product engineering company, partners with ISVs and enterprises to create market-leading products."
        />
        <meta
          property="og:url"
          content="https://www.reliancepulses.com/product-engineering-services"
        />
        <meta
          name="twitter:title"
          content="Software Product Engineering Services "
        />
        <meta
          name="twitter:description"
          content="Synoverge, a top product engineering company, partners with ISVs and enterprises to create market-leading products."
        />
      </Helmet>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>Platform Engineering</h1>
                {/* <h1>Trust your Platform and Product Engineering with us</h1> */}
                <p>
                  Extensive Experience in Building and Modernizing Platforms
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img
                  src={PlatformEngineeringbanner}
                  alt="Platform-Engineering"
                  title="Platform-Engineering"
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
            <h3 className="hide-desktop">Overview</h3>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Overview</h3>
                <p>
                  Product and platform engineering has taken center stage across
                  the globe. Meeting the demands of today's digital consumer has
                  led organizations to change the way they deliver their
                  services and products. Organizations today acknowledge that
                  the line between products and services is continuously
                  blurring. As monetization models evolve, product companies are
                  looking to secure long term revenue through IP-led development
                  and faster time to market.
                </p>
                <p>
                  Synoverge understands that Building digital platforms that
                  offer scale, agility, and intuitive experience to the clients
                  is critical to businesses and ISV's. Our extensive experience
                  in building all-encompassing platforms has helped over 30
                  organizations and millions of users across the globe.
                </p>
                <p>
                  We have lived by our tag-line and energized the ideas of our
                  ISV clients by becoming their technology partners and drive
                  their product and technology roadmap. We are passionate about
                  building grounds up products/platforms as well as
                  re-engineering legacy products into state of the art digital
                  platforms.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              className="common-sec"
            >
              <div className="overview-img img75">
                <img
                  src={Platformengineering}
                  alt="Platform-Engineering"
                  title="Platform-Engineering"
                  className=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Our Offerings</h3>
              <p>
                Synoverge offers a full suite of technology and platform
                engineering services for companies looking to take their digital
                presence and abilities to the next level. Our expertise covers
                the breadth and the depth across technologies, systems,
                platforms, and domains.
              </p>
              <p className="mb-0">
                We focus on leveraging the right mix of technology, people, and
                processes to cater to the current clients that can rapidly scale
                when the need arises.
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <h3 className="hide-desktop">Product Ideation</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={product}
                  loading="lazy"
                  alt="Product-Ideation"
                  title="Product-Ideation"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Product Ideation</h3>
                <p>
                  To facilitate new product ideation services, Synoverge
                  provides full lifecycle R&amp;D services. We also engage with
                  start-up companies and work with them as advisors and
                  partners. Our clients access our network of technology
                  alliances, marketing firms, hosting, and SEO providers.
                </p>
                <p>
                  By leveraging Synoverge for Product ideation, you discover new
                  high-potential products, markets, needs & features. We not
                  only help in shaping the vision, but also help validate the
                  technology, flexibility, and budget. Synoverge helps create a
                  road-map and equips our clients with tools that help in
                  continuous visibility and reducing risks through Agile
                  development methods.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <h3 className="hide-desktop">Design, Development & Maintenance</h3>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">
                  Design, Development & Maintenance
                </h3>
                <p>
                  Our experience in building large scale platforms includes
                  development from scratch, re-engineering platforms, and
                  working collaboratively in an onsite/offshore model for
                  already existing platforms. We work with you to understand
                  your business and devise customized solutions that maximize
                  the output in multiple areas - availability, agility, and
                  predictability.
                </p>
                <p>
                  Our frameworks comprising a combination of tools,
                  technologies, and processes ensure end-to-end visibility,
                  starting from ideation to user stories to release management.
                </p>
                <p className="mb-0">
                  We've built centres of excellence around Microsoft, Cloud,
                  Open Source Technologies, Artificial Intelligence & Big Data
                  technologies.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              className="common-sec"
            >
              <div>
                <img
                  src={design}
                  loading="lazy"
                  alt="Design-Development-Maintenance"
                  title="Design-Development-Maintenance"
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
            <h3 className="hide-desktop">
              Test Engineering & Quality Assurance
            </h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={quality}
                  loading="lazy"
                  alt="Test Engineering & Quality Assurance"
                  title="Test Engineering & Quality Assurance"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">
                  Test Engineering & Quality Assurance
                </h3>
                <p className="mb-0">
                  Continuous testing has become the need of the hour in today's
                  world. While engineering platforms, integrated testing needs
                  to be embedded in the product development lifecycle. Adopting
                  this approach enables your Agile & DevOps initiatives and
                  helps put your offerings into the hands of your end-users
                  faster. Synoverge gives extreme focus to quality to deliver an
                  exceptional experience to the end-users. We have over the
                  years, helped multiple enterprises reach their goals of
                  providing quality products to their customers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <h3 className="hide-desktop">
              DevOps, Automation & Product Lifecycle Management
            </h3>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">
                  DevOps, Automation & Product Lifecycle Management
                </h3>
                <p className="mb-0">
                  At any stage in the product's life cycle, the emphasis on
                  collaboration, automation, integration, and communication is
                  given utmost importance. Our focus on DevOps ensures the
                  on-boarding of applications by facilitating continuous
                  integration and development and automating end-to-end delivery
                  pipeline across several leading platforms.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              className="common-sec"
            >
              <div>
                <img
                  src={devops}
                  loading="lazy"
                  alt="DevOps, Automation & Product Lifecycle Management"
                  title="DevOps, Automation & Product Lifecycle Management"
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
            <h3 className="hide-desktop">
              Legacy Modernization & Re-engineering
            </h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={legacy}
                  loading="lazy"
                  alt="Legacy Modernization & Re-engineering"
                  title="Legacy Modernization & Re-engineering"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">
                  Legacy Modernization & Re-engineering
                </h3>
                <p className="mb-0">
                  Synoverge has proven experience in helping its clients migrate
                  and re-engineer their products to state-of-the-art,
                  future-ready platforms. Our re-engineering services include
                  data migration, technology migration, user experience
                  upgrades, and forward engineering.
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
            <Col xs={12} md={12} className="common-sec">
              <div>
                <h3 className="hide-mobile">Our Approach</h3>
                <p>
                  At any stage in the product's life cycle, the emphasis on
                  collaboration, automation, integration, and communication is
                  given utmost importance. Our focus on DevOps ensures the
                  on-boarding of applications by facilitating continuous
                  integration and development and automating end-to-end delivery
                  pipeline across several leading platforms.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 3 }}
              lg={{ span: 6, order: 2 }}
              className="common-sec"
            >
              <div className="approach content-spacing-right">
                <p>The approach mainly constitutes following aspects:</p>
                <ul className="icon-list">
                  <li>Define the user groups and their behaviour</li>
                  <li>Focus on Usability and Prototyping</li>
                  <li>Competition Analysis</li>
                  <li>
                    Focus on non-functional aspects of the product along with
                    functional
                  </li>
                  <li>
                    Agile or Iterative methodologies which are flexible and
                    matured for quicker releases
                  </li>
                  <li>Complete Product life-cycle approach</li>
                  <li>Collaborative approach</li>
                </ul>
                <p>
                  Our intention and aim is to work as an extended team which is
                  highly integrated with the other functions and vision.
                </p>
                <p>
                  We are technology agnostic and recommend the technology which
                  fits best for a given platform based on all aspects.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 3 }}
              className="common-sec"
            >
              <div>
                <img
                  src={platformapproch}
                  alt="platform-engineering-our-approach"
                  title="platform-engineering-our-approach"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <div className="syno-adv mildblue-bg p-5">
            <Row>
              <Col md={12}>
                <h3>Synoverge Advantage</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <ul className="icon-list">
                  <li>Faster time to market and optimize cost.</li>
                  <li>IP Protection.</li>
                  <li>Transparency and Flexibility.</li>
                  <li>Access to Diverse Technologies.</li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <ul className="icon-list">
                  <li>Scalable & Flexible team structures.</li>
                  <li>Robust Processes & Governance Models.</li>
                  <li>State-of-the-art Infrastructure.</li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <ul className="icon-list">
                  <li>COE's for emerging architectures & technologies.</li>
                  <li>Comprehensive Quality Management.</li>
                  <li>
                    Innovation in Product, Process & Delivery Methodologies.
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

export default PlatformEngineering;
