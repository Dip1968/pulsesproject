import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mobilities from "../../assets/images/mobilities.png";
import ios from "../../assets/images/ios.jpg";
import android from "../../assets/images/android.jpg";
import crossplatform from "../../assets/images/cross-platform.jpg";
import iotapproach from "../../assets/images/iot-approach.jpg";
import search from "../../assets/images/animated-icons/search-icon.gif";
import wireframe from "../../assets/images/animated-icons/wireframe.gif";
import uxdesign from "../../assets/images/animated-icons/ul-ux.gif";
import technicalsupport from "../../assets/images/animated-icons/tech.gif";
import mobileapp from "../../assets/images/animated-icons/destination.gif";
import search1 from "../../assets/images/animated-icons/test.gif";
import fileupload from "../../assets/images/animated-icons/upload.gif";
import helpdesk from "../../assets/images/animated-icons/tech-support.gif";
import iotmobilitybanner from "../../assets/images/banner/iot-banner.jpg"
import "../../component/pages/pages.scss";
import "./technologycoes.scss";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import { Helmet } from "react-helmet";

function IotMobilityDevices() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Technology CoEs' ,link:'/ai-bi-data'},
    { label: 'IOT, Mobility & Devices' },

  ];

  const keywords = "IoT services, iOS app development services, android app development services, android app software services, cross platform app development services, iOS app development company, iOS App Development Services, Internet of Things services, IoT solutions, Mobile app development services"

  return (
    <div className="iot-mobility">
       <Helmet>
       <meta name="robots" content="index,follow"/>
        <title>
        iOS and Android App Development Services
        </title>
        <meta
          name="description"
          content="Maximize ROI with Synoverge's leading iOS and Android app development services, enabling enterprises to create innovative services with measurable results."
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://www.synoverge.com/iot-mobility-devices" />
        <meta property="og:title" content="iOS and Android App Development Services" />
        <meta property="og:description" content="Maximize ROI with Synoverge's leading iOS and Android app development services, enabling enterprises to create innovative services with measurable results." />
        <meta property="og:url" content="https://www.synoverge.com/iot-mobility-devices"/>
        <meta name="twitter:title" content="iOS and Android App Development Services" />
        <meta name="twitter:description" content="Maximize ROI with Synoverge's leading iOS and Android app development services, enabling enterprises to create innovative services with measurable results." />
      </Helmet>
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>IOT, Mobility & Devices</h1>
                {/* <h1>Elevate your customer experience by collaborating with us!</h1> */}
                <p>We believe the future of mobile is the future of everything. Come to us and see your imagination turning into an innovation</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img src={iotmobilitybanner} alt="iot-mobility" title="iot-mobility" />
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
                  Enterprise mobility benefits the business by allowing
                  next-generation technologies and digital transformation to be
                  more effective. In recent years, it has experienced remarkable
                  expansion, and is only going to grow exponentially in the coming
                  future.
                </p>

                <p>
                  IoT has revolutionised usage of IoT based apps, improving the
                  quality and efficiency of businesses and user experiences.
                </p>

                <p>
                  Today's businesses are continuously seeking for ways to improve
                  their operations by gaining a deeper understanding of their
                  processes and activities. It requires them to gather and share
                  contextual data in order to obtain control over their resources
                  and assets' productivity. IoT practise at Synoverge enables
                  businesses to extend their workflows and decision-making
                  processes to smart phones & devices, allowing stakeholders and
                  employees to interact and obtain real-time information at any
                  time and from any location.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div className="overview-img">
                <img
                  src={mobilities}
                  alt="Mobilities"
                  title="Mobilities"
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
            <Col>
              <h3>Our Offerings</h3>
              <p>
                Our expertise in native and cross-platform mobile apps
                development, embedded technologies, cloud services, and IoT
                application development enables us to build feature-rich
                connected applications from scratch or migrate and modernize the
                existing legacy system.
              </p>
              <p>
                We offer a full range of mobile app development services that
                make things better for enterprises and companies we work with.
                Our team of dedicated mobile app developers fulfills your
                diverse business requirements through several services. We
                specialize in the following services:
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
          <h3 className="hide-desktop">iOS</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={ios}
                  alt="IOS"
                  loading="lazy"
                  title="IOS"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">iOS</h3>
                <p className="mb-0">
                  Synoverge offers its iOS app development expertise in
                  developing custom apps for iPhone & iPad. We have built some
                  of the top-ranking iOS mobile apps that have ruled the App
                  Store. Hire iOS app developers who are experts in everything
                  ranging from iPhone application development, design, writing
                  codes to app support and maintenance. Our expert iOS app
                  development team leverages swift and other programming
                  languages for macOS, iOS, watchOS, tvOS and more.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module module-gray">
        <Container>
          <Row>
          <h3 className="hide-desktop">Android</h3>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Android</h3>
                <p className="mb-0">
                  Synoverge team is an expert in Android app development
                  services for the highly fragmented Android world. We have a
                  skilled team of android app developers to complete the life
                  cycle development of Android mobile apps, from conception to
                  the delivery of the apps. We take your Android app development
                  project a step up with the Java and Kotlin programming
                  language to create Android apps for all Google Play’s major
                  categories. We also work on multi support device and language
                  apps for Phone, Tablet, Android TV, and Watch.
                </p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <div>
                <img
                  src={android}
                  loading="lazy"
                  alt="Android"
                  title="Android"
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
          <h3 className="hide-desktop">Cross-Platform App Development</h3>
            <Col xs={12} lg={6} className="common-sec">
              <div>
                <img
                  src={crossplatform}
                  loading="lazy"
                  alt="Cross Platform"
                  title="Cross Platform"
                  className="w-100 left-img"
                />
              </div>
            </Col>
            <Col xs={12} lg={6} className="common-sec">
              <div className="content-spacing-left">
                <h3 className="hide-mobile">Cross-Platform App Development</h3>
                <p className="mb-0">
                  Synoverge team specializes in developing cross-platform mobile
                  applications that run flawlessly across all major platforms
                  such as Android and iOS and different devices. We provide you
                  cross-platform app with a native look and feel with rich
                  features focusing on innovation. We leverage industry-best
                  architecture, standards, and performance measures. We are
                  working on all trending technologies like React Native,
                  Flutter, PWA, Xamarin. We understand the client requirements
                  in-depth and suggest the best cross-platform as per needs.
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
                With technology expertise and industry knowledge, our mobility
                consultants will work with you to develop your organization’s
                mobile blueprint and implement across a diverse range of mobile
                platforms and devices.
              </p>
              <p>
                Synoverge leverages its extensive experience across technologies
                and industries for developing your mobility blueprint and
                implementing it across platforms and devices. We work with
                client to design apps that are made for people.
              </p>
            </Col>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="common-sec">
              <div className="content-spacing-right">
                <p>
                  When you get an idea to develop a mobile app or how to make a
                  mobile app, you will come across many questions. Like
                </p>

                <ul className="icon-list">
                  <li>What to know before developing a mobile app?</li>
                  <li>What is the mobile app development lifecycle?</li>
                  <li>What are the steps in developing an app?</li>
                  <li>How to develop a mobile app from scratch?</li>
                  <li>How much time does it take to develop an app?</li>
                  <li>How to streamline the mobile app development process?</li>
                </ul>
                <p>
                  Being a custom mobile app development company, we handle the
                  entire lifecycle of your product from planning and strategy,
                  UI/UX design, app development, QA testing to product delivery.
                  Our team of mobile app developers uses the latest technologies
                  to develop high-end mobile apps.
                </p>
                <p>
                  When you plan to develop an app, several steps form an integral
                  process in the application development lifecycle.
                </p>
                <p>Let’s have a quick look at it.</p>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} className="common-sec">
              <img
                src={iotapproach}
                alt="Our approach"
                title="Our approach"
                className="w-100 right-img"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img src={search} alt="Research" title="Research" />
                </div>
                <h4>Research</h4>
                <p>
                  It consists of app development idea, competitor analysis, the
                  listing of features, market analysis.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img src={wireframe} alt="wireframe" title="wireframe" />
                </div>
                <h4>Wireframing</h4>
                <p>
                  Sketching the app structure that helps you to understand the
                  functionality and features. It helps designers get the gist of
                  the system flow and aid them in creating flawless & accurate
                  UI/UX
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img src={uxdesign} alt="uxdesign" title="uxdesign" />
                </div>
                <h4>UI/UX design</h4>
                <p>
                  See the actual placement of icons, color combinations; you can
                  also modify the information architecture, workflow, of your
                  app.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img
                    src={technicalsupport}
                    alt="technical support"
                    title="technical support"
                  />
                </div>
                <h4>Technical aspects</h4>
                <p>
                  Look into the process of mobile app development and know your
                  technical feasibility. Your app’s requirement depends on its
                  format as well as the platform this is figured out with the
                  help of public APIs.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img src={mobileapp} alt="mobileapp" title="mobile app" />
                </div>
                <h4>App development</h4>
                <p>
                  The app’s coding, bug fixing, selection of technical stack
                  libraries, it also consists of an app development milestone to
                  keep a track of the development process.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img src={search1} alt="Testing" title="Testing" />
                </div>
                <h4>Testing</h4>
                <p>
                  The QA tests the application. An app’s usability,
                  compatibility, security, interface checks, stress, and
                  performance.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img src={fileupload} alt="Deployment" title="Deployment" />
                </div>
                <h4>Deployment</h4>
                <p>
                  The app is deployed on the respective platforms and web
                  servers.
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="syno-card">
                <div>
                  <img
                    src={helpdesk}
                    alt="Post-production support"
                    title="Post-production support"
                  />
                </div>
                <h4>Post-production support</h4>
                <p>
                  Adding and updating features & functionalities in the app for
                  a better user experience.
                </p>
              </div>
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
                    <li>Faster time to market and optimize cost</li>
                    <li>Faster time to market and optimize cost</li>
                    <li>Transparency and Flexibility</li>
                    <li>
                      Complete Ownership for multi languages and multi support
                      Apps
                    </li>
                    <li>
                      Adoring standard UI-UX Design patterns to achieve client’
                      milestone
                    </li>
                    <li>Working with the trending technologies</li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div>
                  <ul className="icon-list">
                    <li>Access to Diverse Technologies</li>
                    <li>Scalable & Flexible team structures</li>
                    <li>Robust Processes & Governance Models</li>
                    <li>COE's for emerging architectures & technologies</li>
                    <li>Comprehensive Quality Management</li>
                    <li>
                      Innovation in Product, Process & Delivery Methodologies
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

export default IotMobilityDevices;
