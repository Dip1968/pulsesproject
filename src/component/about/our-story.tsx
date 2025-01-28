import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ourmission from "../../assets/images/our-mission.jpg";
import Vision from "../../assets/images/our-vision.jpg";
import OurPrinciples from "../../assets/images/our-principle.jpg";
import OurStrength from "../../assets/images/our-strength.jpg";
import next from "../../assets/images/next.jpg";
import ourstorybanner from "../../assets/images/banner/our-story-banner.jpg";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";


function ourstory() {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'About Synoverge',link:'/our-story' },
        { label: 'Our Story' },
      ];
  return (
        <div className="our-story">
            <Helmet>
        <title>
        IT solutions and services | Our Story | Synoverge
        </title>
        <meta name="robots" content="index,follow"/>
        <meta
          name="description"
          content="Check out Synoverge's IT solutions and services, and find out how we can help you with your technology consulting needs."
        />
      </Helmet>
      <link rel="canonical"href="https://www.synoverge.com/our-story" />
       <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                    <h1>Our Story</h1>
                  {/* <h1>Energizing Ideas, Transforming Businesses</h1> */}
                  <p>Helping customers achieve goals and create value with their technology investments</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img src={ourstorybanner} alt="ourstory" title="ourstory" />
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
                        <p>Synoverge is a global Digital Transformation & Platform Engineering services company working as strategic partner with organizations globally, across industry verticals. We facilitate business transformation through technology adoption. Our innovative S3+ service delivery framework provides tomorrow’s solutions to our clients with faster turn around and higher predictability. At Synoverge, we believe in co-creating and energizing ideas through mutual synergies.</p>
                        <p>Synoverge was founded in 2010 and now has hundreds of bright engineering minds working together with one mission – Help our customers succeed! Synoverge operates out of state-of-the-art infrastructure in the city of Ahmedabad. Synoverge has a modern office environment and IT infrastructure that is ISMS compliant. Synoverge’s mature work environment facilitates innovation on our client engagements through:</p>
                        <ul className="icon-list">
                            <li>An environment that embraces new ideas & facilitate R&D</li>
                            <li>Providing equal opportunities to all to express and experiment</li>
                            <li>Focus on safety and fun at Workplace</li>
                            <li>Internal team events and workshops – bring innovation to solution development approaches</li>
                            <li>Mentors to oversee & guide teams along the way</li>                            
                        </ul>
                        <p>Synoverge is an ISO 9001:2015 certified company, indicating the maturity of our delivery processes, adherence to internationally recognized standards, and continued dedication to Quality and Organizational Excellence.</p>
                        <p>We have established enormous confidence among our increasing circles of clients because of our persistent conviction in inclusive growth, our high-quality services, and our solid support system. This never-ending quest for trustworthiness has allowed us to service customers across United States, UK, Canada, Germany, Netherlands, India, Japan, and Australia.</p>
                    </Col>
                </Row>
                </Container>
            </div>
            <div className="module module-gray">
                <Container>
                    <Row>
                    <h3 className="hide-desktop">Our Mission</h3>
                        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
                            <div className="content-spacing-right">
                                <h3 className="hide-mobile">Our Mission</h3>
                                <p>We are on mission to build an organization that delivers integrated IT solutions aligned with clients’ business needs with focus on:</p>
                                <ul className="icon-list mb-0">
                                    <li>Continuous innovation</li>
                                    <li>Service delivery excellence</li>
                                    <li>Transformation through Technology adoption</li>
                                    <li>Nurturing talent and grooming potential leaders</li>
                                    <li>Inclusive growth</li>
                                    <li>Co-Creation and Co-innovation</li>
                                    <li>Strategic partnership & collaboration</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
                            <div>
                                <img src={ourmission} loading="lazy" alt="Our Mission" title="Our Mission" className="w-100 right-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="module">
                <Container>
                    <Row>
                    <h3 className="hide-desktop">Vision</h3>
                        <Col xs={12} lg={6} className="common-sec">
                            <div>
                                <img src={Vision} loading="lazy" alt="Vision" title="Vision" className="w-100 left-img" />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="common-sec">
                            <div className="content-spacing-left">
                                <h3 className="hide-mobile">Vision</h3>
                                <p className="mb-0">Synoverge Vision is to be a progressive organization offering competitive edge to enterprises globally and be their first choice as a technology partner in the ever changing business environment; thus creating a value for stakeholders</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="module module-gray">
                <Container>
                    <Row>
                    <h3 className="hide-desktop">Our Principles</h3>
                        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
                            <div className="content-spacing-right">
                                <h3 className="hide-mobile">Our Principles</h3>
                                <p>Synoverge has been founded by a team of professionals having a strong pedigree; with each one of them bringing a rich & credible experience of working with Tier -1 IT consulting companies & building scale around technology Services lines. At Synoverge, we value and practice:</p>
                                <ul className="icon-list mb-0">
                                    <li>Team work and collaboration</li>
                                    <li>Transparency</li>
                                    <li>Innovation</li>
                                    <li>Ethics and Integrity</li>
                                    <li>Agility and Speed</li>
                                    <li>Quality and Excellence </li>
                                    <li>Being socially responsible</li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
                            <div>
                                <img src={OurPrinciples} loading="lazy" alt="Our Principles" title="Our Principles" className="w-100 right-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="module">
                <Container>
                    <Row>
                    <h3 className="hide-desktop">Our Strength</h3>
                        <Col xs={12} lg={6} className="common-sec">
                            <div>
                                <img src={OurStrength} loading="lazy" alt="Our Strength" title="Our Strength" className="w-100 left-img" />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="common-sec">
                            <div className="content-spacing-left">
                                <h3 className="hide-mobile">Our Strength</h3>
                                <p>We share our customer’s vision and help them accomplish it with our expertise & commitment.</p>
                                <ul>
                                <li>Right-sized organization with required scale, expertise, flexible engagement models and experienced leadership team </li>
                                <li>Sharing customer vision with our expertise and Consulting & solution led approach</li>
                                <li>Proven delivery capabilities with project teams spread across multiple time-zones</li>
                                <li>Differentiated services model which is based on bringing synergies across entities (people, process, technologies), applying technology innovation and convergence through co-creation</li>
                                <li>Focus on building revenue through long term engagements and strive for inclusive growth of all the stakeholders involved</li>
                                <li>Hybrid model of Technology Practice and CoE in a conventional Delivery organization</li>
                                <li>Bringing alignment with customer through joint workshops and white-boarding sessions</li>
                                <li>Established internal processes, Governance team and Automation to achieve higher operational efficiencies and faster scalability </li>
                                <li>Autonomous internal structure to empower employees and nurture innovation within the team</li>
                                </ul>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="module module-gray">
                <Container>
                    <Row>
                    <h3 className="hide-desktop">What’s Next?</h3>
                        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
                            <div className="content-spacing-right">
                                <h3 className="hide-mobile">What’s Next?</h3>
                                <p>Inventing and creating incredible technology solutions that endure the test of time, creating value for stakeholders.</p>
                                <p className="mb-0">With ongoing sustainable inventions and accomplishments for clients, we are determined to realize our goals. We endeavour to achieve our organizational objectives with greater vigour, innovation, enhanced service delivery, and a broader outreach to impact businesses and lives, positively.</p>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
                            <div>
                                <img src={next} loading="lazy" alt="what Next" title="what Next" className="w-100 right-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
  );
}

export default ourstory;
