import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { careers } from "./careers";
import { useLocation } from "react-router-dom";
import "./career.css";
import CustomBreadcrumb from "../BreadCrumbs/CustomebreadCrumb";
import contactusbanner from "../../assets/images/banner/career-banner.jpg";
import { AxiosResponse } from "axios";
import { Controller, useForm } from "react-hook-form";
import { axiosPost } from "../../utils/helper";
import { toast } from "react-toastify";
import { postCareerDetails } from "../../utils/api";
import ReCAPTCHA from "react-google-recaptcha";

interface File {
  filename: string;
  filetype: string;
  data: string;
}

function ApplyCareer() {
  const location = useLocation();
  const selectedCareer = careers.find(
    (item) => item.id === location.pathname.split("/")[2]
  );
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "About Reliance Pulses", link: "/our-story" },
    { label: "Career", link: "/career" },
    { label: selectedCareer?.jobPosition },
  ];
  let response: AxiosResponse;

  const [file, setFile] = useState<File>();
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [noticePeriodValue, setNoticePeriodValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const handleVerify = (response: string | null) => {
    // 'response' will be null if the user cancels the reCAPTCHA
    if (response) {
      setIsVerified(true);
    }
  };
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();

  const validateContactNumber = (value: any) => {
    // Replace this with your contact number validation logic
    const isValidNumber = /^[0-9]{10}$/.test(value);
    return isValidNumber || "Please enter a valid 10-digit contact number";
  };

  const handleChangeFile = (event: any) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileType = selectedFile?.type;
      const fileSize = selectedFile?.size;

      const reader: any = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1];

        const fileObject: any = {
          filename: selectedFile?.name,
          filetype: selectedFile?.type,
          data: base64String,
        };

        setFile(fileObject);
        clearErrors("Resume");
      };
    }
  };

  async function postCareerData(reqUrl: string, reqBody: string) {
    try {
      response = (await axiosPost(reqUrl, reqBody)) as AxiosResponse;
      if (response.status === 200) {
        toast.success("Successful submit", {});
        return response;
      }
    } catch (error: any) {
      throw error;
    }
  }
  const onSubmit = async (data: any) => {
    try {
      if (showOtherInput && data.CustomNoticePeriod) {
        data.NoticePeriod = data.CustomNoticePeriod;
      }

      await postCareerData(postCareerDetails, {
        ...data,
        file,
        position: selectedCareer?.jobPosition,
      });
      setShowOtherInput(false);
      reset();
    } catch (error) {
      console.error("Error posting");
    }
  };
  return (
    <div id="career-details" className="module">
      <div className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="banner-cont">
                <h1>{selectedCareer?.jobPosition}</h1>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="banner-img">
                <img src={contactusbanner} alt="Contactus" title="Contactus" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <CustomBreadcrumb items={breadcrumbItems} />
        <Row>
          <Col xs={12} lg={8}>
            <div className="Job-content">
              <h3>Work Experience</h3>
              <p>{selectedCareer?.experience}</p>
              <h3>Positions</h3>
              <p>{selectedCareer?.positions}</p>

              {selectedCareer?.BackEnd && (
                <>
                  <h3>Back-End</h3>
                  <ul className="icon-list">
                    {selectedCareer?.BackEnd.map((description) => {
                      return <li>{description}</li>;
                    })}
                  </ul>
                </>
              )}
              {selectedCareer?.FrontEnd && (
                <>
                  <h3>Front-End</h3>
                  <ul className="icon-list">
                    {selectedCareer?.FrontEnd.map((description) => {
                      return <li>{description}</li>;
                    })}
                  </ul>
                </>
              )}
              {selectedCareer?.Database && (
                <>
                  <h3>Database</h3>
                  <ul className="icon-list">
                    {selectedCareer?.Database.map((description) => {
                      return <li>{description}</li>;
                    })}
                  </ul>
                </>
              )}
              {selectedCareer?.jobDescription && (
                <>
                  <h3>Job Description</h3>
                  <ul className="icon-list">
                    {selectedCareer?.jobDescription.map((description) => {
                      return <li>{description}</li>;
                    })}
                  </ul>
                </>
              )}
              {selectedCareer?.Expectations && (
                <>
                  <h3>Expectations</h3>
                  <ul className="icon-list">
                    {selectedCareer?.Expectations.map((description, index) => {
                      return (
                        <li>
                          {description}{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {index === 0 && "IT organization"}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="apply-job">
              <h3>Apply Job</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Full Name*"
                        {...register("FullName", {
                          required: "Full Name is required",
                        })}
                      />
                      {errors.FullName && (
                        <p style={{ color: "red" }}>
                          {errors.FullName.message as string}
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
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Mobile No*"
                        maxLength={10}
                        {...register("Mobile", {
                          required: "Mobile number is required",
                          validate: validateContactNumber, // Use the custom validation function
                        })}
                      />
                      {errors.Mobile && (
                        <p style={{ color: "red" }}>
                          {errors.Mobile.message as string}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Current CTC*"
                        {...register("CTC", {
                          required: "Current CTC is required",
                        })}
                      />
                      {errors.CTC && (
                        <p style={{ color: "red" }}>
                          {errors.CTC.message as string}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Expected CTC*"
                        {...register("ECTC", {
                          required: "Expected CTC is required",
                          validate: (value) => {
                            const currentCTC = getValues("CTC");
                            const expectedCTC = parseFloat(
                              value.replace(/\b(?!^\.?\d)\d*\.?\d*\b/g, "")
                            ); // Extract numeric value, handle lakh

                            if (currentCTC && expectedCTC < currentCTC) {
                              return "Expected CTC should not be less than Current CTC";
                            }

                            return true;
                          },
                        })}
                      />
                      {errors.ECTC && (
                        <p style={{ color: "red" }}>
                          {errors.ECTC.message as string}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3">
                      <Controller
                        name="NoticePeriod"
                        control={control}
                        rules={{ required: "Notice Period is required" }}
                        render={({ field }) => (
                          <>
                            <Form.Select
                              {...field}
                              onChange={(e) => {
                                field.onChange(e.target.value);
                                setShowOtherInput(e.target.value === "Other");
                              }}
                            >
                              <option value="">Select Notice Period</option>
                              <option value="7 days">7 days</option>
                              <option value="15 days">15 days</option>
                              <option value="1 Month">1 Month</option>
                              <option value="2 Months">2 Months</option>
                              <option value="3 Months">3 Months</option>
                            </Form.Select>
                            {errors.NoticePeriod && (
                              <p style={{ color: "red" }}>
                                {errors.NoticePeriod.message as string}
                              </p>
                            )}
                            {showOtherInput && (
                              <Form.Control
                                type="text"
                                {...register("CustomNoticePeriod", {})}
                                value={noticePeriodValue}
                                onChange={(e) =>
                                  setNoticePeriodValue(e.target.value)
                                }
                                placeholder="For example, 10 days"
                              />
                            )}
                          </>
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mb-3 upload-resume">
                      <Form.Label>Upload Resume*</Form.Label>
                      <Form.Control
                        type="file"
                        {...register("Resume", {
                          required: "Resume is required",
                          validate: (value) => {
                            if (!value) return "Please upload a resume file";
                            const fileType = value[0]?.type;
                            const allowedFileTypes = [
                              "application/pdf",
                              "application/msword",
                              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                            ];
                            if (!allowedFileTypes.includes(fileType)) {
                              return "Please upload a file of type .doc or .pdf";
                            }
                            return true;
                          },
                        })}
                        onChange={handleChangeFile}
                      />
                      {errors.Resume && (
                        <p style={{ color: "red" }}>
                          {errors.Resume.message as string}
                        </p>
                      )}
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-4 career-textarea">
                      <Form.Control
                        as="textarea"
                        placeholder="Additional Info"
                        rows={5}
                        {...register("comments", {})}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="career-captcha">
                      <ReCAPTCHA
                        sitekey="6LetrCYpAAAAAPk24gcHCpl16hAYzC8_87MARhWv"
                        onChange={handleVerify}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group className="mt-3">
                      <Button
                        type="submit"
                        value="Submit"
                        className="btn-submit"
                        disabled={!isVerified}
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
  );
}

export default ApplyCareer;
