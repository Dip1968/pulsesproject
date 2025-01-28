import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import privacypolicybanner from "../../assets/images/banner/our-story-banner.jpg";
import "../pages/pages.scss";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';

function Privacypolicy() {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Privacy Policy' },

  ];
  return (
    <Container fluid className="px-0">
    <div className="privacy-policy">
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>Privacy Policy</h1>
                {/* <h1>Transforming Data into Intelligence</h1> */}
                <p>Improve decision making through business insights with our analytics roadmap</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img src={privacypolicybanner} alt="Privacypolicy" title="Privacypolicy" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="module">
        <Container>
          <CustomBreadcrumb items={breadcrumbItems} />
          <h3 className="pt-0">1. Purpose</h3>
          <p>
            The purpose of this document is to define Synoverge privacy policy.
          </p>
          <h3>2. Scope</h3>

          <p>
            This privacy policy is applicable to any stakeholder who share
            personal identification information with Synoverge for the purpose of
            its association with Synoverge.
          </p>
          <h3>3. Policy</h3>
          <h6 className="pt-0">
            3.1. Introduction and General Data Protection Regulation
          </h6>
          <p>
            At Synoverge, we value your privacy and the importance of safeguarding
            your data. This Privacy Policy ("Privacy Policy") describes our
            privacy practices for the activities set out below which are in
            accordance with the privacy regulations. As per your rights, we inform
            you how we collect, store, access, process and use personal
            information provided to us. In this Policy, "Personal Data" refers to
            any information that on its own, or in combination with other
            available information, can distinguish an individual.
          </p>
          <h6>
            3.2. Definition: Personal Data
          </h6>
          <p>
            Personal data means information which relates to a living and
            identifiable natural individual, such as names, addresses, account
            numbers, online identifier and location data.
          </p>
          <p>
            The data items transferred will vary from client to client. However,
            the personal data transferred will fall under the following
            categories.
          </p>
          <Table className="personal-data">
            <thead>
              <tr>
                <th colSpan={3}>Personal Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Phone number</li>
                    <li>Bank details</li>
                    <li>Address</li>
                  </ul>


                </td>
                <td>
                  <ul>
                    <li>Date of birth</li>
                    <li>Age</li>
                    <li>PAN Card</li>
                    <li>Aadhar Card</li>
                    <li>Driving license</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Passport number</li>
                    <li>Criminal Convictions</li>
                    <li>Health information</li>

                  </ul>

                </td>
              </tr>
            </tbody>
          </Table>
          <h6 className="pt-0">
            3.3. Sources of Personal Data and Purpose
          </h6>
          <p>
            We collect Personal Data through the following sources and below
            defined purpose:
          </p>
          <Table>
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Categories</th>
                <th style={{ width: '50%' }}>How we collect your data</th>
                <th style={{ width: '35%' }}>Purpose and Lawful basis of Processing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Prospect/Customer <br /> Personal Data or <br />
                  Personal Information in Projects
                </td>
                <td>
                  Directly from you while you evaluate Synoverge capabilities
                  and/or Synoverge is providing services to you
                </td>
                <td>
                  To share our capabilities, proposals and provide our products
                  and services to you
                </td>
              </tr>
              <tr className="odd">
                <td>
                  Prospect/Business
                  <br />
                  Partner/Vendor
                  <br />
                  Personal Data or
                  <br />
                  Personal Information
                </td>
                <td>
                  Directly from you while you are sharing your service proposal
                  and/or you are providing services to Synoverge
                </td>
                <td>
                  To share our business requirements and receive your products and
                  services
                </td>
              </tr>
              <tr>
                <td>Prospective Candidates</td>
                <td>
                  From multiple sources where you have shared your profile for
                  employment opportunities like recruitment portals, employee
                  referrals, recruitment agencies, networking platforms, etc.{" "}
                  <br />
                  Directly from you in case you have directly applied through the
                  website or email
                </td>
                <td>To evaluate your candidature for suitable open positions</td>
              </tr>
              <tr className="odd">
                <td>Employee Data</td>
                <td>Directly from you during the course of your employment</td>
                <td>
                  To maintain employee information as required during employment
                  period for continued employment, payroll processing.
                  <br />
                  To conduct background screening checks as per customer
                  requirement or compliance requirements
                </td>
              </tr>
              <tr>
                <td>Visitor information</td>
                <td>Directly from you at the time of visiting our premises</td>
                <td>To maintain basic visitor information as required by law</td>
              </tr>
              <tr className="odd">
                <td>Marketing Data, Events and Initiatives</td>
                <td>
                  Directly from you when you contact (or you have been contacted)
                  or interact with any Synoverge representative, via Synoverge
                  website or events or conferences or workshops or Surveys that
                  you attend, by telephone, email, online portal or in person or
                  from professional networking platforms like Linkedin, Tweeter.
                </td>
                <td>
                  To share required business information and discuss potential
                  business opportunities
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="pt-15">
            While we do not share personal information provided to Synoverge for
            business purpose mentioned above, we may be required to share this
            information under the following circumstances. In such cases data
            protection officer approves dissemination of this information based
            due diligence.
          </p>
          <ul className="icon-list">
            <li>
              Legal Obligations: We may process your Personal Data, Personal
              Information where it is necessary in order to comply with applicable
              legal and/or regulatory obligations, establish, exercise or defend
              our legal rights or for the purpose of legal proceedings and to
              prevent and respond to actual or potential fraud or illegal
              activities.
            </li>
            <li>
              Other “Public Interest” Grounds: We may process your Personal Data,
              Personal Information (or where relevant, your Sensitive Personal
              Data) on other public interest grounds where it is subject to
              regulatory requirements where Processing is necessary by us for the
              performance of a task mandated by governmental authorities,
              regulatory authorities or any other law enforcing authorities in the
              public interest.
            </li>
          </ul>
          <p>
            We do not use personal information provided for unsolicited emails,
            calls and/or messages to you.
          </p>
          <h6>
            3.4. Access, Retention and Disposal of Personal Data or Personal
            Information{" "}
          </h6>
          <p>
            Synoverge ensures that personal data / information access is limited
            to the employees / stakeholders who are engaged in business activities
            with you. This is assured through information security access control
            policy.
          </p>
          <p>
            Synoverge retains personal data / information provided as part of its
            master data for varying duration as per business requirement.
          </p>
          <ul className="icon-list">
            <li>
              Purposes identified in this Policy for using the Personal Data/
              Personal Information/ Sensitive Personal Information – we will need
              to keep the information for as long as is necessary for the relevant
              purpose; and
            </li>
            <li>
              Legal obligations – laws or regulation may set a minimum period for
              which we will have to keep your Personal Data/ Personal Information/
              Sensitive Personal Information
            </li>
          </ul>
          <p>
            Synoverge disposes personal data / information provided through the
            following means.
          </p>
          <ul className="icon-list">
            <li>
              Hardcopy personal data / information is disposed off using paper
              shredder.
            </li>
            <li>
              Softcopy personal data / information is removed through hard delete
              options from the database unless archival of personal data /
              information is required for specific legal / regulatory purpose.
            </li>
          </ul>
          <p>
            You can communicate to concern authority to specifically request
            removal of your personal information from our records. We will process
            your request in case this doesn’t conflict with requirement to retain
            information as per compliance and/or regulatory and/or legal
            requirement.
          </p>
          <h6>3.5. Quality of Personal Data/ Information </h6>

          <p>
            We shall ensure to implement reasonable mechanism to monitor the
            quality of the Personal Data/ Information maintained in our systems.
          </p>
          <ul className="icon-list">
            <li>
              Each business unit &amp; support function within our organisation
              shall take steps to assure that Processed Personal Data/ Information
              is complete and accurate.
            </li>
            <li>
              Employees can review, update and confirm on the accuracy and
              completeness of their Personal Data/ Information.
            </li>
          </ul>
          <h6>3.6. Consent</h6>
          <p>
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the third
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of your state, province, country or other governmental
            jurisdiction where the data protection laws may differ than those from
            your jurisdiction.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p>
            The Company will take all steps reasonably necessary to ensure that
            the personal data / information provided by you is treated securely
            and in accordance with this Privacy Policy and no transfer of Your
            Personal Data will take place to an organization or a country.
          </p>
          <h6>3.7. Grievances </h6>
          <p className="mb-0">
            Mr. Ritesh Dave is designated data protection officer at Synoverge.
            You can address your grievances regarding data protection to him on
            his email id
          </p>
          <p className="mb-0">
            <Link to="mailto:ritesh@synoverge.com">ritesh@synoverge.com</Link>
          </p>
        </Container >
      </div >
    </div >
    </Container>
  );
}

export default Privacypolicy;
