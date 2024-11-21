import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
      CareerApplyFormContainer,
      Progress,
      ProgressBarContainer,
      ProgressText,
} from "./style";
import CustomButton from "../../../../components/common/CustomButton";
import { FormFile, FormInput, FormSelect } from "../../../../components/form";

const SubmitCv = () => {
      const [currentStep, setCurrentStep] = useState(1);

      const jobLocationOptions = [
            {
                  value: "Leicster",
                  title: "Leicster",
            },
            {
                  value: "Heathrow",
                  title: "Heathrow",
            },
      ];
      const availabilityOptions = [
            {
                  value: "Full - Time",
                  title: "Full - Time",
            },
            {
                  value: "Part - Time",
                  title: "Part - Time",
            },
      ];
      const countryOptions = [
            {
                  value: "np",
                  title: "Nepal",
            },
            {
                  value: "in",
                  title: "India",
            },
            {
                  value: "us",
                  title: "United States",
            },
            {
                  value: "ca",
                  title: "Canada",
            },
            {
                  value: "au",
                  title: "Australia",
            },
      ];
      const VisaStatusOptions = [
            {
                  value: "Student",
                  title: "Student",
            },
            {
                  value: "Dependent",
                  title: "Dependent",
            },
            {
                  value: "Sponsored visa (tier 2)",
                  title: "Sponsored visa (tier 2)",
            },
            {
                  value: "Youth mobility",
                  title: "Youth mobility",
            },
            {
                  value: "ARC holders",
                  title: "ARC holders",
            },
      ];
      const options = [
            {
                  value: "Yes",
                  title: "Yes",
            },
            {
                  value: "No",
                  title: "No",
            },
      ];

      const handleNext = () => {
            setCurrentStep(currentStep + 1);
      };

      const handlePrevious = () => {
            setCurrentStep((prevStep) => prevStep - 1);
      };
      return (
            <>
                  <Container className="section">
                        <Row className="justify-content-center">
                              <Col xl={12} lg={12} md={12} sm={6} xs={12}>
                                    <ProgressBarContainer>
                                          <Progress
                                                progress={
                                                      (currentStep / 7) * 100
                                                }
                                          />
                                          <ProgressText>
                                                {Math.round(
                                                      (currentStep / 7) * 100
                                                )}
                                                %
                                          </ProgressText>
                                    </ProgressBarContainer>

                                    <CareerApplyFormContainer>
                                          <Form>
                                                {currentStep === 1 && (
                                                      <>
                                                            <h3>
                                                                  Personal
                                                                  Details
                                                            </h3>
                                                            <Row className="g-4">
                                                                  <FormInput
                                                                        title="full Name"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Email"
                                                                        type="email"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Contact number"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />

                                                                  <FormInput
                                                                        title="Date Of Birth"
                                                                        type="date"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="NI Number No"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />

                                                                  <FormFile
                                                                        title="Profile Photo"
                                                                        type="file"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormSelect
                                                                        title="Visa Status"
                                                                        options={
                                                                              VisaStatusOptions
                                                                        }
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormSelect
                                                                        title="Do you have a valid UK Driving License?"
                                                                        options={
                                                                              options
                                                                        }
                                                                        required={
                                                                              true
                                                                        }
                                                                  />

                                                                  <h3>
                                                                        {" "}
                                                                        job
                                                                        Details
                                                                  </h3>
                                                                  <FormInput
                                                                        title="position applied for"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />

                                                                  <FormSelect
                                                                        title="Availability"
                                                                        options={
                                                                              availabilityOptions
                                                                        }
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormSelect
                                                                        title="Location for the job"
                                                                        options={
                                                                              jobLocationOptions
                                                                        }
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <h3>
                                                                        {" "}
                                                                        Address
                                                                        Details
                                                                  </h3>
                                                                  <FormInput
                                                                        title="Address Line 1"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="City"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Postcode"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormSelect
                                                                        title="Country"
                                                                        options={
                                                                              countryOptions
                                                                        }
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <h3>
                                                                        For
                                                                        Qualified
                                                                        Nurses
                                                                        Only
                                                                  </h3>
                                                                  <FormInput title="NMC PIN No" />
                                                                  <FormInput
                                                                        title="Expiry Date"
                                                                        type="date"
                                                                  />

                                                                  <h3>
                                                                        Next of
                                                                        Kin
                                                                        (NOK)
                                                                  </h3>
                                                                  <FormInput
                                                                        title="full Name"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Email"
                                                                        type="email"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Contact number"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Address Line 1"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="City"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Postcode"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormSelect
                                                                        title="Country"
                                                                        options={
                                                                              countryOptions
                                                                        }
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Relation"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                            </Row>
                                                      </>
                                                )}
                                                {currentStep === 2 && (
                                                      <>
                                                            <h3>
                                                                  Equal
                                                                  Opportunity
                                                            </h3>
                                                            <Row>
                                                                  <FormInput
                                                                        title="full Name"
                                                                        type="text"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                                  <FormInput
                                                                        title="Email"
                                                                        type="email"
                                                                        required={
                                                                              true
                                                                        }
                                                                  />
                                                            </Row>
                                                      </>
                                                )}

                                                {currentStep === 3 && (
                                                      <h3>
                                                            Qualifications &
                                                            Trainings
                                                      </h3>
                                                )}

                                                <div className="d-flex justify-content-between mt-4">
                                                      {currentStep > 1 && (
                                                            <CustomButton
                                                                  title="Previous"
                                                                  onClick={
                                                                        handlePrevious
                                                                  }
                                                            />
                                                      )}
                                                      {currentStep < 7 ? (
                                                            <CustomButton
                                                                  title="Next"
                                                                  type="button"
                                                                  onClick={
                                                                        handleNext
                                                                  }
                                                            />
                                                      ) : (
                                                            <CustomButton title="Submit" />
                                                      )}
                                                </div>
                                          </Form>
                                    </CareerApplyFormContainer>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default SubmitCv;
