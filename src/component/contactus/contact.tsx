import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AxiosResponse } from "axios";
import indiaflag from "../../assets/images/india-flag.png";
import japanflag from "../../assets/images/japan-flag.png";
import contact from "../../assets/images/contact.png";
import { useForm } from "react-hook-form";
import { postContactDetails } from "../../utils/api";
import { axiosPost } from "../../utils/helper";
import { toast, ToastContainer } from "react-toastify";
import contactusbanner from "../../assets/images/banner/contact-banner.jpg";
import "./contactus.scss";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";

function Contactus() {
  let response: AxiosResponse;
  const [isVerified, setIsVerified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleVerify = (response: string | null) => {
    // 'response' will be null if the user cancels the reCAPTCHA
    if (response) {
      setIsVerified(true);
    }
  };

  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      await postContactData(postContactDetails, data);
      reset();
      navigate("/thank-you");
    } catch (error) {
      console.error("Error posting");
    }
  };

  async function postContactData(reqUrl: string, reqBody: string) {
    try {
      const response = (await axiosPost(reqUrl, reqBody)) as AxiosResponse;
      if (response.status === 200) {
        toast.success("Successful submit", {});
      }
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Contact Us" },
  ];

  return (
    <Container fluid className="px-0">
      <div className="contact-us">
        <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                  <h1>Contact Us</h1>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img
                    src={contactusbanner}
                    alt="Contactus"
                    title="Contactus"
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
              {/* <h3>Get In Touch</h3> */}
              <Col xs={12} md={6}>
                <div className="contact-footer">
                  <div>
                    <img
                      src={indiaflag}
                      alt="india"
                      title="india"
                      className="flagimg"
                    />
                  </div>
                  <h4>Reliance Pulses</h4>
                  <p>
                    B/H Acropolis , N.H. No.: 48 (8),
                    <br />
                    Sahkarijin Cross Road, At & Po. Kanknol,
                    <br />
                    Himatnagar, Pin: 383001, Dist. S.K. (GUJ), India.
                  </p>
                  <p>
                    <strong>Tel.:</strong>{" "}
                    <Link to="tel:+919879106400">+91 9879106400</Link>
                  </p>
                  <p>
                    <strong>Email: </strong>
                    <Link to="mailto:reliancepulses@gmail.com">
                      reliancepulses@gmail.com
                    </Link>
                  </p>
                  {/* <div className="mt-40">
                    <iframe
                      title="Map"
                      src={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.41632148027!2d72.5275071153543!3d23.04519372126436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b05399196f%3A0xee01b0990d6ca12c!2sSynoverge%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1583398895233!5m2!1sen!2sin"
                      }
                      height={350}
                      width={"100%"}
                    />
                  </div> */}
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="contact-footer">
                  <div>
                    <img
                      src={contact}
                      alt="contact"
                      title="contact"
                      className="flagimg"
                    />
                  </div>
                  <h4>Please fill below details :</h4>
                  <Form onSubmit={handleSubmit(onSubmit)} className="form">
                    <Row>
                      <Col lg={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Your Name*"
                            {...register("Name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.Name && (
                            <p style={{ color: "red" }}>
                              {errors.Name.message as string}
                            </p>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Email ID*"
                            {...register("Email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                              },
                            })}
                          />
                          {errors.Email && (
                            <p style={{ color: "red" }}>
                              {errors.Email.message as string}
                            </p>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="contact-comments">
                          <Form.Control
                            as="textarea"
                            placeholder="Comments*"
                            rows={5}
                            {...register("Comments", {
                              required: "Comments is required",
                            })}
                          />
                          {errors.Comments && (
                            <p style={{ color: "red" }}>
                              {errors.Comments.message as string}
                            </p>
                          )}
                        </Form.Group>
                      </Col>
                      {/* <Col xs={12}>
                        <Form.Group className="contact-captcha">
                          <ReCAPTCHA
                            sitekey="6LetrCYpAAAAAPk24gcHCpl16hAYzC8_87MARhWv"
                            onChange={handleVerify}
                          />
                        </Form.Group>
                      </Col> */}
                      <Col xs={12} md={4}>
                        <Form.Group className="mt-3">
                          <Button
                            type="submit"
                            value="Submit"
                            className="submit-btn submit"
                            onClick={() => {
                              toast.success(
                                "Contact details have been saved successfully. ",
                                {}
                              );
                              window.location.reload();
                            }}
                          >
                            Submit
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Contactus;
