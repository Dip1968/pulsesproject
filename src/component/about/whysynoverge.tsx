import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import customer from "../../assets/images/animated-icons/community.gif";
import iconoverview from "../../assets/images/animated-icons/wireframe.gif";
import ontime from "../../assets/images/animated-icons/speedometer.gif";
import rating from "../../assets/images/animated-icons/goal.gif";
import feedback from "../../assets/images/animated-icons/language.gif";
import synoverge from "../../assets/images/why-synoverge.jpg";
import officeenvironment from "../../assets/images/office-environment.jpg";
import Infrastructure from "../../assets/images/infrastructure.jpg";
import GreatPlace from "../../assets/images/great-place.jpg";
import whysynovergebanner from "../../assets/images/banner/why-synoverge-banner.jpg";
import "../../component/pages/pages.scss";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";

function whysynoverge() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'About Synoverge',link:'/our-story' },
    { label: 'Why Synoverge' },
  ];

  return (
    <div className="why-synoverge">
       <Helmet>
        <title>
        Why choose Synoverge | Synoverge
        </title>
        <meta name="robots" content="index,follow"/>
        <meta
          name="description"
          content="With Synoverge, you may work with bright minds, have excellent growth opportunities, and have the perfect work-life balance."
        />
        <link rel="canonical"href="https://www.synoverge.com/why-synoverge" />
      </Helmet>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>Why Synoverge</h1>
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
                  src={whysynovergebanner}
                  alt="why-synoverge"
                  title="why-synoverge"
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
          <h3>Overview</h3>
            <Col md={12}>
              <p>
                It might be challenging to find the perfect software development
                business to help you realise your ambitions and make your online
                product a success. Here, we ensure that you have made the right
                selection for your project to begin with and that the outcome is
                shaped exactly how you want it to be. We do so because we keep
                things simple. Implementation of clean code with extensive
                testing.
              </p>
              <h3>Our Approach</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4} className="d-inline-flex">
              <div className="syno-card">
                <p>
                  <img
                    src={customer}
                    alt="customer"
                    title="customer"
                    className="w-25"
                  />
                </p>
                <h4>Consulting led approach</h4>
                <ul className="icon-list">
                  <li>Thought Leadership</li>
                  <li>Blueprinting</li>
                  <li>IT and Business Alignment</li>
                  <li>Research / Market Alignment</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-inline-flex">
              <div className="syno-card">
                <p>
                  <img
                    src={iconoverview}
                    alt="icon-overview"
                    title="icon-overview"
                    className="w-25"
                  />
                </p>
                <h4>Digital Epicenter </h4>
                <ul className="icon-list">
                  <li>Co-Innovation</li>
                  <li>Speed-to-Value</li>
                  <li>Prototype to Production</li>
                  <li>Digital Strategies</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-inline-flex">
              <div className="syno-card">
                <p>
                  <img
                    src={ontime}
                    alt="on-time"
                    title="on-time"
                    className="w-25"
                  />
                </p>
                <h4>Holistic solutions</h4>
                <ul className="icon-list">
                  <li>Digital Transformation</li>
                  <li>Platform Engineering</li>
                  <li>Enterprise Application</li>
                  <li>Verification & Validation</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-inline-flex">
              <div className="syno-card">
                <p>
                  <img
                    src={rating}
                    alt="rating"
                    title="rating"
                    className="w-25"
                  />
                </p>
                <h4>Inclusive Customer <br/> Growth</h4>
                <ul className="icon-list">
                  <li>Strategic Partnership</li>
                  <li>Collaboration</li>
                  <li>Co-Innovation</li>
                  <li>Shared Risk / Rewards</li>
                  <li>Customer 1st Approach</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-inline-flex">
              <div className="syno-card">
                <p>
                  <img
                    src={feedback}
                    alt="feedback"
                    title="feedback"
                    className="w-25"
                  />
                </p>
                <h4>Technology Accelerators & Enablement</h4>
                <ul className="icon-list">
                  <li>S3+ Delivery Framework</li>
                  <li>Scalable Engagement Model</li>
                  <li>Methodologies & Tools</li>
                  <li>250+ Professional Staff</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Why Synoverge</h3>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={synoverge}
                  loading="lazy"
                  alt="why-synoverge"
                  title="why-synoverge"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <ul className="icon-list mb-0">
                  <li>
                    Right-sized organization with required scale, expertise,
                    flexible engagement models and experienced leadership team
                  </li>
                  <li>
                    Sharing customer vision with our expertise and Consulting &
                    solution led approach
                  </li>
                  <li>
                    Proven delivery capabilities with project teams spread
                    across multiple time-zones
                  </li>
                  <li>
                    Differentiated services model which is based on bringing
                    synergies across entities (people, process, technologies),
                    applying technology innovation and convergence through
                    co-creation
                  </li>
                  <li>
                    Focus on building revenue through long term engagements and
                    strive for inclusive growth of all the stakeholders involved
                  </li>
                  <li>
                    Hybrid Model of Technology Practice and CoE in a
                    conventional Delivery organization
                  </li>
                  <li>
                    Bringing alignment with customer through joint workshops and
                    white-boarding sessions
                  </li>
                  <li>
                    Established Internal processes, Governance team and
                    Automation to achieve higher operational efficiencies and
                    faster scalability
                  </li>
                  <li>
                    Autonomous internal structure to empower employees and
                    nurture innovation within the team
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">State of the art infrastructure Modern Office Environment</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">State of the art infrastructure Modern Office Environment</h3>
                <ul className="icon-list mb-0">
                  <li>
                    Dedicated commercial facility spread across seven floors
                  </li>
                  <li>
                    Over 30k Sq. Feet Premise with separate recreational area
                  </li>
                  <li>Leased Lines for high-speed connectivity</li>
                  <li>Future expansion- ready to accommodate growing teams</li>
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={officeenvironment}
                  loading="lazy"
                  alt="office-environment"
                  title="office-environment"
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
          <h3 className="hide-desktop">ISMS Compliant IT Infrastructure</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={Infrastructure}
                  loading="lazy"
                  alt="Infrastructure"
                  title="Infrastructure"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">ISMS Compliant IT Infrastructure</h3>
                <ul className="icon-list mb-0">
                  <li>Authenticated access to workplace</li>
                  <li>Highly-secured network environment</li>
                  <li>Restricted access to systems & servers</li>
                  <li>
                    Anti-static raised floor server rooms with restricted access
                  </li>
                  <li>BCP-DR enabled</li>
                  <li>CCTV Surveillance</li>
                  <li>24x7 Physical Security</li>
                </ul>
              </div>
            </Col>
          </Row>
          </Container>
          </div>
          <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">Safe and Great Place </h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Safe and Great Place </h3>
                <ul className="icon-list mb-0">
                  <li>Environment to embrace new ideas & facilitate R&D</li>
                  <li>Equal opportunities to all to express and experiment</li>
                  <li>Focus on safety and fun at Workplace</li>
                  <li>
                    Internal team events and workshops – bring innovation to
                    solution development approaches
                  </li>
                  <li>Mentors to oversee & guide teams along the way</li>
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={GreatPlace}
                  loading="lazy"
                  alt="Great-Place"
                  title="Great-Place"
                  className="w-100 right-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default whysynoverge;
