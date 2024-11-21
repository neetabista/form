import React from "react";
import { Row } from "react-bootstrap";
import { FormInput, FormSelect } from "../../../../components/form";

const Step2 = ({ currentStep }) => {
  const genderOptions = [
    {
      value: "Male",
      title: "Male",
    },
    {
      value: "Female",
      title: "Female",
    },
  ];
  return (
    <>
      <h3>Step-{currentStep}: Equal Opportunity</h3>
      <p>
        We offer equal employment opportunities. We want to make sure that no
        job applicant or employee is treated less favourably because of their
        race, colour, creed, nationality, ethnicity, or country of origin; their
        religion; their political opinion or affiliation; their sex; their
        marital status; their sexual orientation; or because they are disabled.
        We also want to make sure that they are not penalised for failing to
        meet unjustifiable conditions or requirements.
      </p>
      <p>
        In order to guarantee that people are chosen, promoted, and dealt with
        according to their pertinent merits and talents, our selection criteria
        and methods are regularly examined. All workers receive equal treatment
        and are urged to advance within the company. To ensure that this policy
        is as successful as possible, we are dedicated to a continuous programme
        of action.
      </p>
      <p>
        Please give the following information only to ensure that this policy is
        properly implemented, followed, and monitored.
      </p>
      <Row className="g-4">
        <FormInput title="Nationality" type="text" required={true} />
        <FormSelect title="Gender" options={genderOptions} required={true} />
      </Row>
    </>
  );
};

export default Step2;
