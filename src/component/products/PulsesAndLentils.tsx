import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Digitaltransformation from "../../assets/images/digital-transformation.png";
import offering from "../../assets/images/digital-transformation-offering.jpg";
import approach from "../../assets/images/digital-transformation-approach.jpg";
import bannerimg from "../../assets/images/banner/pulses-and-lentils.jpg";
import "../../component/pages/pages.scss";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import { Helmet } from "react-helmet";

function Pulses() {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Pulses & Lentils" },
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
          href="https://www.synoverge.com/digital-transformation"
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
          content="https://www.synoverge.com/digital-transformation"
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
                <h1>Pulses & Lentils</h1>
                <p>
                  At Reliance Pulses, we offer a premium range of pulses and
                  lentils, including Toor Dal, Urad Dal, Masoor Dal, and Moong
                  Dal. Our products are carefully sourced and processed to
                  ensure exceptional quality and flavor, catering to households
                  and kitchens worldwide.
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
      {/* <div className="module">
        <Container>
          <CustomBreadcrumb items={breadcrumbItems} />
          <Row>
            <h3 className="hide-desktop">Kabuli Chickpeas</h3>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Kabuli Chickpeas</h3>
                <p>
                  Grown in Canada Chickpeas Kabuli and Desi, the large Kabuli or
                  Garbanzo beans or Bengal (7-10 mm) are colour beige and round.
                  , Desi or Kala chana Chickpeas (6-7 mm) are colour yellow,
                  light green, light brown and black that is called kala chana.
                  The split Desi Chickpea is alo called Chana dal. gramor Kabuli
                  chana
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
            <h3 className="hide-desktop">Desi Chickpeas</h3>
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
                <h3 className="hide-mobile">Desi Chickpeas</h3>
                <p>
                  Grown in Canada Chickpeas Kabuli and Desi, the large Kabuli or
                  Garbanzo beans or Bengal (7-10 mm) are colour beige and round.
                  , Desi or Kala chana Chickpeas (6-7 mm) are colour yellow,
                  light green, light brown and black that is called kala chana.
                  The split Desi Chickpea is alo called Chana dal. gramor Kabuli
                  chana
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <Row>
            <h3 className="hide-desktop">Eston Lentils</h3>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="common-sec"
            >
              <div className="content-spacing-right">
                <h3 className="hide-mobile">Eston Lentils</h3>
                <p>
                  Canada is also the largest exporter of Lentils in the world
                  producing in large quantities Large Green (Laird Lentil) or
                  Masoor Large Green (6-7mm), Split Large Green or Yellow Split
                  Lentil or Masoor dal, Red Lentil or Masoor , Red Split Lentil
                  or Masoor dal, Dehulled Red or Football Lentil or Masoordal,
                  Small Green or Eston type or Masoor Small Green (4.45mm) ,
                  Medium Green Lentil or Richlea- type or Masoor medium Green .
                  In a smaller production; Spanish Brown or Pardina (40-45mg)
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
      </div> */}
      <div className="module ">
        <Container>
          <div className=" syno-adv mildblue-bg p-5">
            <Row>
              <Col md={12}>
                <h3>Advantages</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>Protein</li>
                  <li>Fiber</li>
                  <li>Folate - Vitamin B9</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <ul className="icon-list">
                  <li>Iron</li>
                  <li>Potassium</li>
                  <li>Manganese</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Pulses;
