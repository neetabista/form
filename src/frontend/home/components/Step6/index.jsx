import React from "react";
import { FormFile } from "../../../../components/form";
import { Row } from "react-bootstrap";

const Step6 = ({ currentStep }) => {
  return (
    <>
      <h3>Step-{currentStep}: Equal Opportunity</h3>
      <h6 className="mb-3">
        In order to process your application for employment with AESN Limited ,
        please enclose :
      </h6>
      <p>
        1. An updated copy of your CV, which should details your qualifications
        and any relevant training courses attended.
      </p>
      <p>
        2.A copy of your valid passport and any visa required for your
        eligibility to work in the UK .
      </p>
      <Row className="g-4">
        <FormFile title="Upload your CV" type="file" required={true} />
        <FormFile
          title="Upload your Attached Passport"
          type="file"
          required={true}
        />
        <FormFile
          title="Upload your Right to Work Docs"
          type="file"
          required={true}
        />
        <FormFile title="Upload your NI Letter" type="file" required={true} />
      </Row>
    </>
  );
};

export default Step6;
