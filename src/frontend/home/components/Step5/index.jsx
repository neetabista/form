import React from "react";
import { FormInput, FormSelect } from "../../../../components/form";
import { Row } from "react-bootstrap";

const Step5 = ({ currentStep }) => {
  const leavingOptions = [
    {
      value: "Employed",
      title: "Employed",
    },
    {
      value: "Unemployed",
      title: "Unemployed",
    },
    {
      value: "Education",
      title: "Education",
    },
    {
      value: " Self-Employed",
      title: " Self-Employed",
    },
  ];
  return (
    <>
      <h3>Step-{currentStep}: References </h3>
      <p>
        List all your references for the past five years, one of which should be
        your present or most recent employer. Please list here, starting with
        the most recent, all employment, unemployment, educational, and travel
        periods throughout the previous 5 years. Please be aware that we will
        not be able to continue on with your application if you fail to provide
        enough information.
      </p>
      <Row className="g-4">
        <FormInput title="Date From" type="date" required={true} />
        <FormInput title="Date To" type="date" required={true} />
        <FormInput title="Company Name" type="text" required={true} />
        <FormInput title="Referee Name" type="text" required={true} />
        <FormInput title="Address" type="text" required={true} />
        <FormInput title="Mobile Number" type="text" required={true} />
        <FormInput title="Email" type="email" required={true} />
        <FormSelect
          title="Reason For Leaving"
          options={leavingOptions}
          required={true}
        />
      </Row>
      <p className="mt-4">
        <strong>Note:</strong>
        Please make sure the name of the person you choose as a referee to
        confirm your where abouts is provided above if you ticked the
        "Unemployed" box.
      </p>
      <h3>Character Reference Details:</h3>

      <p className="mt-3 mb-3">
        Please give details of any one individual who have known you for at
        least five years and who will be willing to provide a personal character
        reference for you. Please keep in mind that your Character Referee
        cannot be a blood relative or a member of your family
      </p>

      <Row className="g-4">
        <FormInput title="Referee Name" type="text" required={true} />
        <FormInput title="Address" type="text" required={true} />
        <FormInput title="Mobile Number" type="text" required={true} />
        <FormInput title="Email" type="email" required={true} />
      </Row>
    </>
  );
};

export default Step5;
