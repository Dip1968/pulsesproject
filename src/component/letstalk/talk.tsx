import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../component/pages/pages.scss";
import { useForm, Controller } from "react-hook-form";
import { AxiosResponse } from "axios";
import { postTalkDetails } from "../../utils/api";
import { axiosPost } from "../../utils/helper";
import { toast } from "react-toastify";
import Letstalkbanner from "../../assets/images/banner/letstalk-banner.jpg";
import "./talk.scss";
import CustomBreadcrumb from '../BreadCrumbs/CustomebreadCrumb';
import ReCAPTCHA from "react-google-recaptcha";

function Letstalk() {
  let response: AxiosResponse;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isVerified, setIsVerified] = useState(false);
  const handleVerify = (response: string | null) => {
    // 'response' will be null if the user cancels the reCAPTCHA
    if (response) {
      setIsVerified(true);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      // Include the selected dropdown value in the data object
      await postDetailsData(postTalkDetails, data);
      reset();
    } catch (error) {
      console.error("Error posting data:");
    }
  };

  async function postDetailsData(reqUrl: string, reqBody: string) {
    try {
      response = (await axiosPost(reqUrl, reqBody)) as AxiosResponse;
      if (response.status === 200) {
        toast.success("Successful submit", {});
      }
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  const validateContactNumber = (value: any) => {
    // Replace this with your contact number validation logic
    const isValidNumber = /^[0-9]{10}$/.test(value);
    return isValidNumber || "Please enter a valid 10-digit contact number";
  };

  // Create an array of options
  const serviceOptions = [
    "Select a Service",
    "Digital Transformation",
    "Platform Engineering",
    "Enterprise Applications",
    "Verification & Validation",
    "AI, BI & Data",
    "IOT, Mobility & Devices",
    "DevOps",
    "Cloud",
    "Microsoft Technologies",
    "Open Source Technologies",
  ];

  // Create an array of options for the "Your Requirements" dropdown
  const requirementOptions = [
    "Your Requirements",
    "Hire a dedicated team",
    "Talk to an expert",
    "Discuss new project",
  ];
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Lets Talk' },

  ];

  return (
    <Container fluid className="px-0">
      <div className="Lets-talk">
      <div className="banner">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="banner-cont">
                  <h1>Let's Talk</h1>
                  <p>
                  Developing Digital Solutions by Leveraging New Technologies
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="banner-img">
                  <img src={Letstalkbanner} alt="Letstalk" title="Letstalk" />
                </div>
              </Col>
            </Row>
          </Container>
      </div>
      <div className="module">
        <Container>
        <CustomBreadcrumb items={breadcrumbItems} />
        <Row>
          
          <Col xs={12} md={12}>
            <h3>Let's Talk</h3>
            <Form onSubmit={handleSubmit(onSubmit)} className="form">
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Name*"
                      {...register("Name", { required: "Name is required" })}
                    />
                    {errors.Name && (
                      <p style={{ color: "red" }}>
                        {errors.Name.message as string}
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Business Email Address*"
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
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Contact No.*"
                      maxLength={10}
                      {...register("Contact", {
                        required: "Contact number is required",
                        validate: validateContactNumber, // Use the custom validation function
                      })}
                    />
                    {errors.Contact && (
                      <p style={{ color: "red" }}>
                        {errors.Contact.message as string}
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Controller
                      name="Selectservice"
                      control={control}
                      render={({ field }) => (
                        <Form.Select {...field}>
                          {serviceOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                      )}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3">
                    <Controller
                      name="Requirement"
                      control={control}
                      render={({ field }) => (
                        <Form.Select {...field}>
                          {requirementOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                      )}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Brief About the Project"
                      rows={5}
                      {...register("Comments", {
                      //  required: "Comments is required",
                       })}
                    />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group className="mb-3 height-50">
                    <Controller
                      name="TermsAndCondition"
                      control={control}
                      render={({ field }) => (
                        <Form.Check>
                          <Form.Check.Input type="checkbox" {...field} />
                          <Form.Check.Label>
                            {" "}
                            I would like to receive information about Synoverge
                            news and events.{" "}
                            <Link to="../privacy-policy" target="_blank">Click here</Link> to read our
                            full Privacy Policy.{" "}
                          </Form.Check.Label>
                        </Form.Check>
                      )}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                <Form.Group className="mt-3">
                <ReCAPTCHA
                   sitekey="6LetrCYpAAAAAPk24gcHCpl16hAYzC8_87MARhWv"
                   onChange={handleVerify}
                />
                </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group className="mt-3">
                    <Button type="submit" value="" className="submit-btn submit" disabled={!isVerified}>Submit</Button> 
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        </Container>
      </div>
        
      </div>
    </Container>
  );
}

export default Letstalk;
